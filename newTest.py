from collections import defaultdict

line = 'Once upon a time a time this upon a'

dic = defaultdict(int)

s = line.split()

for i in range(0, len(s)-1):
    dic[str(s[i]) + ' ' + str(s[i+1])] += 1
print(dic)