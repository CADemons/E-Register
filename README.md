# E-Register
An electronic registration page, which was primarily used for Club Expo 2016,
but can be implemented elsewhere. 

To contribute, it's suggested to fork the repository and make pull requests
(during the 2016-2017 school year), however, after that simple cloning will do. 

## Getting Started
### Cloning a Forked Repository
First, fork the repository on the homepage of this project (upper right hand
corner). 

Then navigate to your "fork" under your repositories, and via command line
type:
`git clone https://github.com/<YOURGITHUBUSERNAME>/E-Register.git`

After it has successfully cloned, navigate to your local E-Register folder, and
type: `npm install`. 

After modifying index.html / adding files, to run the app, `node lib/index.js`.

The local page will be running at `localhost:3000`.

### Cloning The Organization's Repository
First clone the repository via command line using: `git clone
https://github.com/CADemons/E-Register.git`.

Then navigate to the E-Register Folder, and do `npm install`. 

After modifying index.html / adding files, to run the app, `node lib/index.js`.

The local page will be running at `localhost:3000`.

## lib/index.js

It's preferred that you don't make direct modifications to this file unless you
are working with a forked repository so I, Colin Rioux, can read through and
understand the changes made, and make sure it won't affect the app
significantly. You're welcome to make any changes you like as long as you don't
push it to the Organization Repository. 

## How to link the spreadsheet

First, you'll need a service account and it's "secret" (stored as a json) as well as the
Google Drive API and Google Sheets API (if applicable) enabled on your google
developer account. There is plenty of resource online to guide you through that
process. 

**Please note: you must download the service account "secret" promptly after
creating a service account. Otherwise, you'll have to delete your account and
create a new one.**

Once you have the "secret" downloaded, rename it to: `client_secret.json`, and
move that file into the base directory of E-Register. 

Then open `client_secret.json` with a text editor (preferably notepad or
textedit), and find the field `client_email:`. Copy that email, and share your
spreadsheet with that email. (This step gives your program access to
writing/accessing the spreadsheet). **Make sure that the client_email has write
permissions.**

Now in your spreadsheet (**this step is important**), cells **A1** and **B1**
must be labeled: `Name` and `Email` respectively. 

After that, you're all set! You'll be able to run E-Register (through `node
lib/index.js`), and add names to a spreadsheet. E-Register also generates the
email from the Name, however, some emails may be wrong if people use their
nickname instead of their real name. 


#### Many Thanks
Jerry and Colin 


