import os

words = [
    'name-user',
    'adress',
    'country-full',
    'country-short',
    'phone',
    'mail',
    'terms-date',
    'site-name',
    'site-url'
]

read = []

def replace(f):
    rf = open(f, 'r', encoding='utf-8')
    s = rf.read()
    rf.close()

    for i in range(len(words)):
        s = s.replace(f'[cgv {words[i]}]', read[i])

    wf = open(f, 'w', encoding='utf-8')
    wf.write(s)
    wf.close()

for x in words:
    read.append(input(x + ': '))

for f in os.listdir():
    replace(f)