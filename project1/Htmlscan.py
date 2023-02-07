from bs4 import BeautifulSoup
import requests
URL = "https://gaming.stackexchange.com/questions?tab=newest&page="
URLAfter = 'https://gaming.stackexchange.com/'
string = ""
title=[]
myDiv2 = []

#Gets first 50 questions of the first 20 pages from stackoverflow

for i in range(1):#change from 1 to 20 to get 1000 questions         
    i+=1  
    
#Creates string of Url with appended page number
    next_page = URL + str(i)       
#Get page with created url from stackoverflow
    page = requests.get(next_page)  
#converts request to html page
    soup = BeautifulSoup(page.content, "html.parser")
#Locates title of question for each entry in page
    mydivs = soup.find_all(class_="s-post-summary--content-title")
    myDiv2.append(mydivs)
    string = string, soup

index = 0
#Loops through my div object to get title of and load the page of each question
for div in myDiv2:
    for name in div:
        for child in name.children: 
#Checks if title is a newline character
            if(child != '\n'):
                index += 1
                # find excate title and comes of with link name
                link= URLAfter + child['href']
                title.append(link)
                fileLink = str('profile_files/profile' + str(index) +'.txt')
                print(fileLink)
                #gets page of the question and stores it in profile_files folder
                page = requests.get(link)
                soup = BeautifulSoup(page.content, "html.parser")
                with open(('profile_files/profile' + str(index) +'.txt'), 'a') as f:
                    f.write(str(soup))
                             

with open('project1/htmlFile.txt', 'w') as f:
      f.write(str(string))