const fs = require('fs');
const express = require("express");
const showdown   = require('showdown');

// Default port
const port = 3000;

const app = express();
const converter = new showdown.Converter();

app.get("/", (req, res) => {
    const text = fs.readFileSync('./README.md').toString();
    const html = converter.makeHtml(text);
    res.send(html);
});

app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});