// Get Express
const express = require('express');

// Used to link to stuff in /public/
const path = require("path");

// Start Express
const app = express();

// Access stuff within /public/ dir
app.use(express.static("public"));

// GET "/"
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"))
});

// hmmmmmm today I shall use port 3000
const PORT = 3000;

// Actually connect to that port
app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});
