import json
import requests
from bs4 import BeautifulSoup
from bs4.element import Tag
from typing import Dict, List
from requests.models import Response
import re

LANDING_PAGE = 'https://211sonoma.org'
def get_landing_page(landing_page) :
    try:
        response = requests.get(landing_page)
    except:
        response = Response()
        pass # Handle error here.
    return BeautifulSoup(response.text, 'html5lib')

def getLinks(linkin,wordArr):
    html_in = get_landing_page(linkin)
    lwords = [] # empty array to start
    if wordArr:
        lwords.extend(wordArr) # words from previous link added 
    for link in html_in.find_all("a"): # get all links in page
        olinks = [] # link
        lstr = link.get('href')
        llstr = lstr.find('211sonoma.org', 0, 21)
        if ( (llstr >= 0) and (len(lstr) > 23 ) ):
            if ( lstr not in allLink ):
                 if (lstr != linkin): #watch for recursive loop
                    allLink.append(lstr)
#                    print("going into ",lstr, "from", linkin)
                    newWord = link.text.split()
                    getLinks(lstr,lwords.extend(newWord))
        elif ( (llstr < 0) and (len(lstr) >1) ) : # delete empty links, too
            lwords.extend(link.text.split()) # list of words split on space
            bigList.append((lwords,lstr))

bigList = [] # all links and words
allLink = []
allWord = []
getLinks(LANDING_PAGE,allWord)

# using set 
visited = set() 
print("Size of bigList ",len(bigList))

# Output list initialization
bigList2 = bigList # move data to new list
bigList = [] # reset data List
  
# Iteration 
for a, b in bigList2: 
    if not b in visited: 
        visited.add(b) 
        bigList.append((a, b)) 

print("Size of new bigList", len(bigList))  

# remove this list of simple unnecessary words
removeWords=["About","Us","Nosotros","para","Sonoma","County","in","de","en","la","un","una","su","sus","y","&","with","www.211sonoma.org","of","the","2-1-1","and","for","of","para","Click","here","","http:","www.211.org","-","del","el","sin","al","con","los","las","a","El","por","by","e","or","at","o","to","it","A","as"]
splitWords=[]
for litems in bigList:
    for sitems in litems[0]:
        l = sitems.split('/') # split any word with '/'
        splitWords.extend(l)

print("Big List is length ", len(bigList), "Split List is length ",len(splitWords))

nodupWords = list(dict.fromkeys(splitWords))
print("Deduped list is length ",len(nodupWords))

for xword in removeWords:
    while xword in nodupWords:
        nodupWords.remove(xword)

print("Removing simple words gives length ", len(nodupWords))

with open('Words.sql', 'w') as file:
    file.write("DROP TABLE IF EXISTS `key_words`;\n")
    file.write("CREATE TABLE `key_words` (\n")
    file.write("`ID` int(11) unsigned NOT NULL,\n")
    file.write("`words` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,\n")
    file.write("PRIMARY KEY (`ID`)\n")
    file.write(") ENGINE=MyISAM DEFAULT CHARSET=latin1;\n")
    for i in range(0,len(nodupWords)):
        t = "INSERT INTO `key_words` VALUES (" + str(i) + ", '" + nodupWords[i] + "');\n"
        file.write(t)

def get_page_title(linkin) :
    title = get_landing_page(linkin).find('title')
    print("title is ",title, "for link ",linkin)
    return title
        
with open('Links.sql', 'w') as file:
    file.write("DROP TABLE IF EXISTS `links`;\n")
    file.write("CREATE TABLE `links` (\n")
    file.write("`ID` int(11) unsigned NOT NULL,\n")
    file.write("`links` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,\n")
    file.write("`title` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,\n")
    file.write("PRIMARY KEY (`ID`)\n")
    file.write(") ENGINE=MyISAM DEFAULT CHARSET=latin1;\n")
    for i in range(0,len(bigList)):
        if ( (bigList[i][1].find('mailto', 0, 7) >= 0)): #mailto, not link
            title = "Email"
        elif (bigList[i][1].find('http',0,4) >=0) :
            title = get_page_title(bigList[i][1])
            if title is None: # if not page title just use empty string
                title = ""
            else:
                title = title.string.replace("'","")
        else:
            title = ""
        t = "INSERT INTO `links` VALUES (" + str(i) + ", '" + bigList[i][1] + "', '" + title + "');\n"
        file.write(t)        

with open('WordLinks.sql', 'w') as file:
    file.write("DROP TABLE IF EXISTS `word_links`;\n")
    file.write("CREATE TABLE `word_links` (\n")
    file.write("`ID` int(11) unsigned NOT NULL,\n")
    file.write("`link` int(11) unsigned NOT NULL,\n")
    file.write("`word` int(11) unsigned NOT NULL,\n")
    file.write("PRIMARY KEY (`ID`)\n")
    file.write(") ENGINE=MyISAM DEFAULT CHARSET=latin1;\n")
    id = 0;
    for i in range(0,len(bigList)):
        for term in bigList[i][0]:
            if term in nodupWords:
                j = nodupWords.index(term)
                t = "INSERT INTO `word_links` VALUES(" + str(id) + ", " + str(i) + ", " + str(j) + ");\n"
                file.write(t)
                id += 1

