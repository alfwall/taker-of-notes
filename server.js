// Get Express
const express = require('express');

// Used to link to stuff in /public/
const path = require("path");

// Start Express
const app = express();


const terms = require("./db/db.json");

// Access stuff within /public/ dir
app.use(express.static("public"));

// GET "/"
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});
// GET "/notes"
app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
});


app.get("/api/notes", (req, res) => {
    res.json(terms);
})


// hmmmmmm today I shall use port 3001
const PORT = 3001;
// Actually connect to that port
app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});
