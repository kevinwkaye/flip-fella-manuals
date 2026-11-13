import os,sys
order=sys.argv[1:]
t=open('template.html',encoding='utf8').read()
import glob,base64
imgs=''
for f in sorted(glob.glob('img/*.jpg')):
    k=os.path.basename(f)[:-4]
    imgs+=f"IMGS['{k}']='data:image/jpeg;base64,"+base64.b64encode(open(f,'rb').read()).decode()+"';\n"
data=imgs+''.join(open(f'data/{i}.js',encoding='utf8').read() for i in order)
open('pebbles-plugin-manuals.html','w',encoding='utf8').write(t.replace('/*DATA*/',data))

# ---- Cloudflare Pages version: a real page with images as separate files ----
import shutil
site='site'
if os.path.isdir(site): shutil.rmtree(site)
os.makedirs(site+'/img')
for f in glob.glob('img/*.jpg'): shutil.copy(f, site+'/img/')
simgs=''.join(f"IMGS['{os.path.basename(f)[:-4]}']='img/{os.path.basename(f)}';\n" for f in sorted(glob.glob('img/*.jpg')))
body=t.replace('/*DATA*/', simgs+''.join(open(f'data/{i}.js',encoding='utf8').read() for i in order))
body=body.replace('<meta charset="utf-8">\n','',1)
head='''<!doctype html>
<html lang="en-GB">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="description" content="Visual manuals for the Flip Fella family of Ableton plugins: panel maps, plain-English controls, footswitches and dial-in recipes.">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M50 8c22 0 40 13 42 36 2 22-12 46-42 48C20 94 6 72 8 48 10 24 28 8 50 8z' fill='%234d5bff'/%3E%3C/svg%3E">
'''
# move <title>/<meta>/<link>/<style> head bits into head, rest into body
i=body.index('<header class="bar">')
html=head+body[:i]+'</head>\n<body>\n'+body[i:]+'\n</body>\n</html>\n'
open(site+'/index.html','w',encoding='utf8').write(html)
open(site+'/_headers','w').write("/img/*\n  Cache-Control: public, max-age=604800\n/\n  Cache-Control: public, max-age=300\n")
print('site written', os.path.getsize(site+'/index.html'))
