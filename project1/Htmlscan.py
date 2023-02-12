from bs4 import BeautifulSoup
import requests
URL = "https://gaming.stackexchange.com/questions?tab=newest&page="
URLAfter = 'https://gaming.stackexchange.com/'
string = ""
fullText = ''

profile = []
profileName = []

account= []

title=[]
TitleArray = []
ids = []
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

    

    TitleHTML = soup.find_all(class_="s-post-summary--content-title")
    TitleArray.append(TitleHTML)

    count = 0

    accountOne = soup.find_all(class_= "question-page unified-theme")

    profile = soup.findAll(True, {'class':['s-avatar s-avatar__16 s-user-card--avatar', 's-avatar s-avatar__16 s-user-card--avatar js-user-hover-target']})

    for tag in soup.find_all(class_="s-post-summary js-post-summary") :
        ids.append(tag["id"])
    #ids.append(soup.find_all())


index = 0
#Loops through my div object to get title of and load the page of each question


title_str = ""
edited_list = []

for div in TitleArray:
    for name in div:
        for child in name.children:
            #Checks if title is a newline character 
            if(child != '\n'):
               
                index += 1
                # find excate title and comes of with link name
            
                title_str = title_str + child.getText() + "\n id: " + ids[index-1]+ '\n' 
                
                link= URLAfter + child['href']
                title.append(link)
                fileLink = str('profile_files/profile' + str(index) +'.txt')
                #gets page of the question and stores it in profile_files folder
                page = requests.get(link)
                print(link)
                soup = BeautifulSoup(page.content, "html.parser")
                for link in soup.find_all(class_="js-gps-track"):
                    print(link.get('href'))
                '''
                lp = soup.find_all.title

                isEdited = False
                edited_list.append(1)
                #print(lp)

                
                if(len(edited_list)>1):
                    isEdited == True
            

                '''

                with open(('profile_files/profile' + str(index) +'.txt'), 'a') as f:
                    f.write(str(soup))
                    account.append(soup)

                
print(len(edited_list))
print("\n")


'''
                    


for i in range(1):
       
        
with open('project1/title.txt', 'w') as f:
    f.write(title_str)

with open('project1/QuestionPage.txt', 'w') as f:
    f.write(fullText)

with open('project1/profileInfo.txt', 'w') as f:
    profileStr = ""
    print(len(profileName))
    for nameFull in profileName:
        first_name2 = nameFull.split('/')[2].lstrip().split('/')[0]
        profileStr = profileStr + first_name2 + '\n'

    f.write(profileStr)


with open('GroupProject/Datas/profile_files/profile1.txt', 'r') as outputfile:
    soup = BeautifulSoup(outputfile.content, "html.parser")
    print(soup)








id
CHECK 1.The title (str) and the ID (str) of the question.

2. The name (str), the ID (str), and the reputation score (int) of the
original poster.

3. The time the question was posted (str).

4. The question score (int), the number of views (int), the number of
answers (int), and whether an answer was accepted (bool).

5. The question tags (str). A question may have at most five tags.

6. Whether the question is closed (bool).




    <div class="s-post-summary js-post-summary" data-post-id="401534" data-post-type-id="1" id="question-summary-401534">
        <div class="s-post-summary--stats js-post-summary-stats">
        <div class="s-post-summary--stats-item s-post-summary--stats-item__emphasized" title="Score of -1">
        <span class="s-post-summary--stats-item-number">-1</span>
        <span class="s-post-summary--stats-item-unit">votes</span>
        </div>
        <div class="s-post-summary--stats-item" title="0 answers">
        <span class="s-post-summary--stats-item-number">0</span>
        <span class="s-post-summary--stats-item-unit">answers</span>
        </div>
        <div class="s-post-summary--stats-item" title="14 views">
        <span class="s-post-summary--stats-item-number">14</span>
        <span class="s-post-summary--stats-item-unit">views</span>
        </div>
        </div>


        <div class="s-post-summary--content">
            <h3 class="s-post-summary--content-title">
                <a class="s-link" href="/questions/401534/mouse-doesnt-update-nor-does-screen-in-parsec">Mouse doesn't update, nor does screen, in Parsec</a>
            </h3>
            <div class="s-post-summary--content-excerpt">
                            I am using Parsec to stream from my Intel Mac to my Windows Laptop. So yes, Mac is the Host. It works fine for the most part, but I have two problems. I believe they may be related, so I am mentioning ...
                        </div>
            <div class="s-post-summary--meta">
            <div class="s-post-summary--meta-tags tags js-tags t-macos t-windows t-mouse">
            <ul class="ml0 list-ls-none js-post-tag-list-wrapper d-inline"><li class="d-inline mr4 js-post-tag-list-item"><a aria-label="show questions tagged 'macos'" aria-labelledby="macos-container" class="post-tag flex--item mt0 js-tagname-macos" href="/questions/tagged/macos" rel="tag" title="show questions tagged 'macos'">macos</a></li><li class="d-inline mr4 js-post-tag-list-item"><a aria-label="show questions tagged 'windows'" aria-labelledby="windows-container" class="post-tag flex--item mt0 js-tagname-windows" href="/questions/tagged/windows" rel="tag" title="show questions tagged 'windows'">windows</a></li><li class="d-inline mr4 js-post-tag-list-item"><a aria-label="show questions tagged 'mouse'" aria-labelledby="mouse-container" class="post-tag flex--item mt0 js-tagname-mouse" href="/questions/tagged/mouse" rel="tag" title="show questions tagged 'mouse'">mouse</a></li></ul>
        </div>



        <div class="s-user-card s-user-card__minimal">
        <div aria-live="polite">


        <a class="s-avatar s-avatar__16 s-user-card--avatar" data-user-id="299833" href="/users/299833/bliss-rae"> <div class="gravatar-wrapper-16">
        <img ,="" alt="Bliss Rae's user avatar" class="s-avatar--image" height="16" src="https://lh3.googleusercontent.com/a/AEdFTp7sjH7qMAyHW4x4BS3nWWH-_TRW0HQtaQZ_WmCS=k-s32" width="16">
        </img>
    </div>
        </a>
</div>

'''



