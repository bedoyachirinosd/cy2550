name = 'Braund, Mr. Owen Harris'
first_name = name.split('.')[1].lstrip().split(' ')[0]


name2 = 'one/two/three'
first_name2 = name2.split('/')[2].lstrip().split('/')[0]

print(first_name2)