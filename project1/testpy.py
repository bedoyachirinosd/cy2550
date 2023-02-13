from bs4 import BeautifulSoup
import requests
'''
name = 'Braund, Mr. Owen Harris'
first_name = name.split('.')[1].lstrip().split(' ')[0]


name2 = 'one/two/three'
first_name2 = name2.split('/')[2].lstrip().split('/')[0]

print(first_name2)
'''


#set i=0
i = 0
    #create empty list
edited_list= []
#create bool variable
edited_bool = False

counter = 0

word = 'edited'

#loop through each profile file

#while(i<=50): #change to 1000 
with open('GroupProject/Datas/profile_files/profile1.txt', 'r') as outputfile:
    soup = BeautifulSoup(outputfile.content, "html.parser")
    print(soup)
    '''
#find all edited
    line = outputfile.read()
    if (word in line):
        counter+=1
    #append to a list
    #edited_list.append(str(edited[i]))

    #check if the list is not empty
    if(counter>0):
        edited_bool = True
print(edited_bool)
