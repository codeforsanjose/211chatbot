**BotPress Readme:**

This directory contains the data directory of a development BotPress
installation.

The chat bot, 211chatbot, accesses an SQL database found in the
web\_scrape directory in this repository. (Note, the words in
"key\_words" have been converted to all lower case to make matching
easier.)

Key parts of the repository:

1.  The main flow of the bot is in bots/211sonoma/flows/main.flow.json

2.  The javascript "action" that calls the database to get the links is:
    global/actions/callResourceApi.js

3.  There is a directory (assets/modules/qna) which sounds like it
    should have the "Q&A" from the studio, but I haven't found where
    they're stored yet\...
