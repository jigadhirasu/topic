const fs = require('fs');
const express = require("express");
const showdown = require('showdown');

// Default port
const port = 3000;

const app = express();
const converter = new showdown.Converter();
converter.setOption('tables', true);

app.get("/", (req, res) => {
    const text = fs.readFileSync('./README.md').toString();
    const html = converter.makeHtml(text);
    res.send(html);
});

app.get('/battle', (req, res) => {
    // TODO 依README.md需求實作於此處
    res.send('');
})

app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});