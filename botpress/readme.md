**BotPress Readme:**

This directory contains the data directory of a development BotPress
installation. There is also an export file,
bot\_211sonoma\_1604098642133.tgz

The chat bot, 211chatbot, accesses an SQL database found in the
web\_scrape directory in this repository. (Note, the words in
"key\_words" have been converted to all lower case to make matching
easier.)

**Update 12/2/20: Please use the new sql files in the web\_scrape
directory.**

Key parts of the repository:

1.  The main flow of the bot is in bots/211sonoma/flows/main.flow.json

2.  The javascript "action" that calls the database to get the links is:
    global/actions/callResourceApi.js

3.  There is a directory (assets/modules/qna) which sounds like it
    should have the "Q&A" from the studio, but I haven't found where
    they're stored yet...

How to install the bot and get it working;

1.  Install botpress here: https://botpress.com/download

2.  There needs to be a database on a server. The SQL files are in the
    web\_scrape directory. Create a database, I used the name
    "211Sonoma". Import these 4 SQL table files into that database:
    key\_words.sql, Links.sql, other\_words.sql, WordLinks.sql. You
    probably want to also create a database user on that database.

3.  In the server directory copy the 2 php files from the php directory.
    I used Xampp as a local server on my machine, so the files went into
    the htdocs directory. Start the server if localhost.

4.  You will need to create the file dbconvars.php in this directory
    with the following information:\
    *\<?php \$dbhost = \"127.0.0.1\"; \$dbuser = \"username\"; \$dbpwd =
    \"yourpassword\"; \$dbname = \"211Sonoma\"; ?\>*

5.  Start BotPress (./bp in it's installed directory if using Linux).

6.  Open localhost:3000 to start the bot.

7.  On the main page, click "Create Bot" and "Import Existing" to import
    the bot.

8.  If you're not using the localhost database with the same name as I
    did, then you'll need to update the following line in the
    callResourceApi.js file. You can find this in the "Code Editor"
    tab.\
    *const { data } = await
    axios.get(\'http://localhost/request.php?command=getResource&resource=\' +
    rsrc)*

9.  Select "211sonoma" as the bot and it should open the BotPress
    studio. Launch the emulator and you should have the functioning bot.
