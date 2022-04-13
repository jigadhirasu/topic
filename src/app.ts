const fs = require('fs');
const express = require("express");
const showdown   = require('showdown');

// default port to listen
const port = 3000;

const app = express();
const converter = new showdown.Converter();

// define a route handler for the default home page
app.get("/", (req, res) => {
    const text = fs.readFileSync('./README.md').toString();
    const html = converter.makeHtml(text);
    res.send(html);
});

// start the Express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});