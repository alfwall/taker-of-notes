// Get Express
const express = require('express');

// Used to link to stuff in /public/
const path = require("path");
// Access the file system
const fs = require('fs');
// Helper for fs promises
const util = require('util');

// Helper method
const readFromFile = util.promisify(fs.readFile)


// Package to create unique id's for notes
const uniqid = require("uniqid");

// Our saved notes are stored in this
const notes = require("./db/db.json");

// Start Express
const app = express();

app.use(express.json());
// Middleware for urlecoded data
// `urlencoded` data represents a URL encoded form. If we had a HTML form with fields: `username` and `password`, our urlencoded data would be "username=JohnAppleseed&password=passw0rd"
// This middleware will parse that string into an object containing key value pairs
app.use(express.urlencoded({ extended: true }));


// Access stuff within /public/ dir
app.use(express.static("public"));

// GET "/" returns index.html
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});
// GET "/notes" returns notes.html
app.get("/notes", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "/public/notes.html"));
});

// GET "/api/notes" returns db.json with saved notes
app.get("/api/notes", (req, res) => {
    //console.log("GET /api/notes: ")
    //console.log(notes)
    readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
});

// TODO: POST "/api/notes"
app.post("/api/notes", (req, res) => {
    //console.log(req.body)
    if (req.body) {
        const { title, text } = req.body;
        if (title && text) {
            const newNote = {
                title,
                text,
                id: uniqid()
            };
            fs.readFile("./db/db.json", "utf8", (err, data) => {
                if (err) {
                    console.error(err);
                }
                else {
                    const existingNotes = JSON.parse(data);
                    existingNotes.push(newNote);
                    fs.writeFile(
                        "./db/db.json",
                        JSON.stringify(existingNotes, null, 4),
                        (writeErr) => writeErr
                            ? console.error(writeErr)
                            : console.info("Successfully updated notes!"));
                }
            });
        }
        res.status(200).json(notes)
    }
    else {
        res.status(500).json("Error occurred while saving note!")
    }
});

// TODO: DELETE "/api/notes/:id"
app.delete("/api/notes/:id", (req, res) => {
    const id = req.params.id;
    //console.log("id to delete: " + id)
    let currentNotes = JSON.parse(fs.readFileSync("./db/db.json"));
    let newNotes = [];
    for (let i=0; i < currentNotes.length; i++) {
        if(currentNotes[i].id != req.params.id) {
            newNotes.push(currentNotes[i]);
        }
    }
    let newJSON = JSON.stringify(newNotes)
    fs.writeFileSync("./db/db.json", newJSON);
    res.status(200).json(newJSON)
});


// GET anything unspecified 404's to the index.html
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

// hmmmmmm today I shall use port 3001
const PORT = process.env.PORT || 3001;
// Actually connect to that port
app.listen(PORT, () => {
    //console.log(`Taker of Notes app listening at http://localhost:${PORT}`);
});
