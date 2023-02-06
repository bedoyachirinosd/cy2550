from bs4 import BeautifulSoup
import requests
import urllib.request , sys
URL = "https://gaming.stackexchange.com/questions?tab=newest&page="
#page = requests.get(URL)

#soup = BeautifulSoup(page.content, "html.parser")

#results = str(soup.find_all("h3")
 
string = ""

counter=0

title=[]

myDiv2 = []



for i in range(2):
    i+=1
    next_page = URL + str(i)
    page = requests.get(next_page)
    soup = BeautifulSoup(page.content, "html.parser")
    mydivs = soup.find_all(class_="s-post-summary--content-title")
    myDiv2.append(mydivs[i])
    string = string, soup

for name in mydivs:
    for child in name.children: 
       title.append(child)
'''

'''
with open('GroupProject/Datas/project1/header.txt', 'w') as f:
    str1 = ''
    for i in range(len(title)):
        str1 = str1 + str(title[i])
    f.write(str1)

    #results = str(soup.find(class_="ss-post-summary--content"))
with open('GroupProject/Datas/project1/htmlFile.txt', 'w') as f:
      f.write(str(string))


      
'''s-post-summary--content
try:
    #raw = page.read()
        #html = raw.decode()

except:
    print("Didnt work")
    sys.exit(1)
'''
#page = requests.get(URL)

#soup = BeautifulSoup(page.content, "html.parser")
#results = str(soup.find(id="questions"))


#with open('project1/htmlFile.txt', 'w') as f:
 #      f.write(html)














'''
<div class="s-post-summary--meta-tags tags js-tags t-no-mans-sky">

<ul class="ml0 list-ls-none js-post-tag-list-wrapper d-inline"><li class="d-inline mr4 js-post-tag-list-item"><a href="/questions/tagged/no-mans-sky" class="post-tag flex--item mt0 js-tagname-no-mans-sky" title="show questions tagged 'no-mans-sky'" aria-label="show questions tagged 'no-mans-sky'" rel="tag" aria-labelledby="no-mans-sky-container">no-mans-sky</a></li></ul>
            </div>
#print(page.text)

'''

'''
html_doc = """
<html><head><title>The Dormouse's story</title></head>
<body>
<p class="title"><b>The Dormouse's story</b></p>

<p class="story">Once upon a time there were three little sisters; and their names were
<a href="http://example.com/elsie" class="sister" id="link1">Elsie</a>,
<a href="http://example.com/lacie" class="sister" id="link2">Lacie</a> and
<a href="http://example.com/tillie" class="sister" id="link3">Tillie</a>;
and they lived at the bottom of a well.</p>

<p class="story">...</p>
"""
soup = BeautifulSoup(html_doc, 'html.parser')
print(soup.prettify())'''