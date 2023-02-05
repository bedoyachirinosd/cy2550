from collections import defaultdict
import re
import operator
punc = '''!()-[]{};:'"\,<>./?@#$%^&*_~'''
dic = defaultdict(int)
text = ''
first = True
count = 10
last = True
with open(r"text.txt", 'r') as fp:
    lines = fp.readlines()
    for number, line in enumerate(lines):
        if '*** START OF THE PROJECT' in line:
           first = False
        if  '*** END OF THE PROJECT' in line:
            last = False
        if first == False:
            s = line.split()
            for i in range(0, len(s)-1):
                dic[str(s[i]) + ' ' + str(s[i+1])] += 1
            line = line.lower()
            line = re.sub('[!,*)@#%(&$_?.^]', '', line)
            text += line
        if last == False:
            break
    sorted_d = dict( sorted(dic.items(), key=operator.itemgetter(1),reverse=True)[:count])
    words = text.split()
    text += str(words)


    pv = ''
    for sort in sorted_d:
        pv += str(sort) + ' ' + str(sorted_d[sort]) + '\n'

    text+= str(pv)



    with open('74-9.txt', 'w') as f:
       f.write(text)
