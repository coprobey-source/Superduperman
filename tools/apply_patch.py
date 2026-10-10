#!/usr/bin/env python3
"""Apply content patches to character files.

Patch format (sections separated by lines starting with @@@):
  @@@ <char> node <scene> <node>   -> replaces that node (6-space indented block)
  @@@ <char> morning               -> inserts a scene block before the `ending` scene
  @@@ <char> afterTalk             -> inserts a property before `scenes: {`
"""
import sys, re, os

ROOT = os.path.join(os.path.dirname(__file__), '..')

def apply(path):
    text = open(path, encoding='utf8').read()
    sections = re.split(r'^@@@ ', text, flags=re.M)[1:]
    for sec in sections:
        header, _, body = sec.partition('\n')
        parts = header.split()
        cid, kind = parts[0], parts[1]
        fp = os.path.join(ROOT, 'js', 'chars', cid + '.js')
        src = open(fp, encoding='utf8').read()
        body = body.rstrip('\n') + '\n'
        if kind == 'node':
            scene, node = parts[2], parts[3]
            si = src.find('\n    %s: {\n' % scene)
            assert si >= 0, (cid, scene)
            ni = src.find('\n      %s: {\n' % node, si)
            ei = src.find('\n    },\n', si)
            assert 0 <= ni < ei, (cid, scene, node)
            end = src.find('\n      },\n', ni) + len('\n      },\n')
            src = src[:ni + 1] + body + src[end:]
        elif kind == 'morning':
            assert '\n    morning: {\n' not in src, cid + ' already has morning'
            i = src.find('\n    ending: {\n')
            assert i >= 0
            src = src[:i + 1] + body + src[i + 1:]
        elif kind == 'afterTalk':
            assert '\n  afterTalk: [' not in src, cid + ' already has afterTalk'
            i = src.find('\n  scenes: {\n')
            assert i >= 0
            src = src[:i + 1] + body + src[i + 1:]
        else:
            raise SystemExit('unknown kind ' + kind)
        open(fp, 'w', encoding='utf8').write(src)
        print('applied', cid, kind, ' '.join(parts[2:]))

for p in sys.argv[1:]:
    apply(p)
