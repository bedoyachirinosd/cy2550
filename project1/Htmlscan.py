from sqlite3 import Row
from bs4 import BeautifulSoup
import requests
import csv
URL = "https://gaming.stackexchange.com/questions?tab=newest&page="
URLAfter = 'https://gaming.stackexchange.com/'
string = ""
fullText = ''
profile = []
reputation= []
time = []
title=[]
ids = []
views = []
tagCat = []
tagCatInner = []
CATarr =[]
PostTitle = []
isClosed = []

titleSTR = []

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
    fullText = fullText +  str(soup.prettify())

    reputation = soup.find_all(class_ = "todo-no-class-here")

    TitleHTML = soup.find_all(class_="s-post-summary--content-title")
    titleSTR.append(TitleHTML)

    views = soup.find_all(class_="s-post-summary--stats-item-number")
    

    time = soup.find_all(class_ = "relativetime")

    accountOne = soup.find_all(class_= "question-page unified-theme")

    tagCat = soup.find_all(class_="s-post-summary--meta")
    
    count = 0
    for tag in tagCat:
        CatText = tag.find('ul')
        lp = CatText.find_all('a')
        tagCatInner.append(lp)
    profile = soup.findAll(True, {'class':['s-avatar s-avatar__16 s-user-card--avatar', 's-avatar s-avatar__16 s-user-card--avatar js-user-hover-target']})

    for tag in soup.find_all(class_="s-post-summary js-post-summary") :
        ids.append(tag["id"])

for a in tagCatInner:
    inner = []
    for p in a:
        inner.append(p.text)
    CATarr.append(inner)

index = 0
title_str = ""
edited_list = []

#Loops through my div object to get title of and load the page of each question
for div in titleSTR:
    for name in div:
        for child in name.children:
            #Checks if title is a newline character 
            if(child != '\n'):
                index += 1
                # find excate title and comes of with link name
                title_str = title_str + child.getText() + "\n id: " + ids[index-1]+ '\n' 
                chi = child.getText()
                PostTitle.append(chi)
                if chi[len(chi)- 8:] == '[closed]':
                    isClosed.append(True)
                else:
                    isClosed.append(False)



                    #START OF DAVID CODE
                link= URLAfter + child['href']
                fileLink = str('profile_files/profile' + str(index) +'.txt')
                #gets page of the question and stores it in profile_files folder
                page = requests.get(link)
                #print(link)
                soup = BeautifulSoup(page.content, "html.parser")
                
                try:
                    try:
                        name = soup.find('a', {'title' : 'show all edits to this post'})['href']
                        isEdited = True
                            #print(index , "is edited")
            
                    except TypeError:
                            isEdited = False
                            pass
                
                    is_edited_dic={index:isEdited}
                        
                        #*finishes edited part*

                    
                        
                        #how many comments on the question
                    comment_finder = soup.find_all('div', {'class': 'comment'})
                        
                    number_comments = len(comment_finder)
                        
                        
                        
                        # score of the answer
            
                    find_score = soup.find('div', class_='js-vote-count')
                    answer_score = int(find_score.text)
                                    #user name of the question
                    user = soup.find('div', class_='user-details')
                        
                    try:
                        user_name = user.find('a').text
                
                    except AttributeError:
                        user_name = user.find('span').text
                        pass
                                
                            
                            
                            
                            # id of the user of the question
                    try:
                        user_id = soup.find('div', class_='user-details')
                        id = user_id.find('a')['href'].split('/')[-2]
                        
                    # makes an exception, how to catch the id if there is no id (CHECK THIS PART)
                    except TypeError:
                        user_id = soup.find_all('div', class_='user-gravatar32')
                        id = 'No ID found'
                        
                    #  possible answer: (didnt work)
                        # id = user_id.find('a')['href'].split('/')[-2]
                        
                        
                        
                        # reputation score of the user
                    reputation = soup.find('div', class_='-flair')
                    
                    try:
                        reputation_score = reputation.find('span').text
                        
                        
                    # catches a possible error if the user has no reputation score (NONE)   
                    except AttributeError:
                        reputation_score = 'No reputation score'
                        
                        # is the answer accepted?
                        
                    try:
                        answer = soup.find('div', class_='accepted-answer')    
                        answer_accepted = answer is not None 
                        
                    except AttributeError:
                        answer = soup.find('div', class_='s-accepted-answer-indicator flex--item fc-green-700 py6 mtn8 d-none')
                        answer_accepted = "No data"
                        
                        
                except:
                    print("An exception occurred")
                    
                    
                    
   
                print(user_name, answer_accepted)

                #END OF DAVID CODE






                with open(('Datas/profile_files/profile' + str(index) +'.txt'), 'a') as f:
                    f.write(str(soup))
                    f.close()              

with open('Datas/project1/QuestionPage.txt', 'w') as f:
    f.write(fullText)
    f.close()


rows = []
profileStr = []
timeAndINFO = ""
index2 = 0
index3 =0
for nameFull in profile:
    first_name2 = nameFull["href"].split('/')[3]
    userid = nameFull["href"].split('/')[2]
    print(nameFull["href"].split('/')[3])
    id = ids[index2].split('-')[2]
    catList = []
    for cat in tagCatInner:
        catList.append(len(cat))
    rows.append([PostTitle[index2],id,userid ,first_name2,str(reputation[index2].text),
    str(time[index2].text),views[index3].text,
    views[index3+1].text,views[index3+2].text,str(CATarr[index2]),str(isClosed[index2])])
    index2 +=1
    index3 +=3









fields = ['Title', 'Post id', 'User ID', 'User name', 'User reputation','Time posted','Votes','Answers','Views', 'Tag','Is closed?'] 

# name of csv file 
filename = "Datas/project1/XXX-questions.csv"
    
# writing to csv file 
with open(filename, 'w') as csvfile: 
    # creating a csv writer object 
    csvwriter = csv.writer(csvfile) 
        
    # writing the fields 
    csvwriter.writerow(fields) 
        
    # writing the data rows 
    csvwriter.writerows(rows)
