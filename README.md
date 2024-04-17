# Note Taker Starter Code

## Description
XXXXXXXXXXXXXXXX

## Result
[Click here!](URL_TO_THE_DEPLOYED_APP)

![Screenshot of deployed note taker](LOCAL_URL_OF_SCREENSHOT)

## User Story
AS A small business owner,
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete.

## Acceptance Criteria
GIVEN a note-taking application...

WHEN I open the Note Taker,
THEN I am presented with a landing page with a link to a notes page.

WHEN I click on the link to the notes page,
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column.

WHEN I enter a new note title and the note’s text,
THEN a "Save Note" button and a "Clear Form" button appear in the navigation at the top of the page.

WHEN I click on the Save button,
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes and the buttons in the navigation disappear.

WHEN I click on an existing note in the list in the left-hand column,
THEN that note appears in the right-hand column and a "New Note" button appears in the navigation.

WHEN I click on the "New Note" button in the navigation at the top of the page,
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column and the button disappears.

## Mockup
![Something like this!](./mockup/11-express-homework-demo.gif)

## TODO
- [ ] Make this README
- [ ] Make server.js
    - [ ] Import express
    - [ ] `GET *` returns index.html
    - [ ] `GET /notes` returns notes.html
    - [ ] `GET /api/notes` reads and returns `db.json` saved notes
    - [ ] `POST /api/notes` receives request body with note details, appends to `db.json`
    - [ ] `DELETE /api/notes/:id` receives note ID, removes from `db.json`, then saves `db.json`
- [ ] `/` Landing page with link to "/notes"
- [ ] `/notes` Note view and editor
    - [ ] Default: New Note
    - [ ] Nav bar buttons
        - [ ] "New Note" ONLY WHEN looking at saved note.
        - [ ] "Save Note" ONLY WHEN Title and Text exist, OR WHEN viewing saved but edited note.
        - [ ] "Clear Form" ONLY WHEN drafting an new unsaved note.
    - [ ] Delete Note icon button
        - [ ] Make the `DELETE /api/notes/:id` request, update page
- [ ] Deploy app to Heroku


