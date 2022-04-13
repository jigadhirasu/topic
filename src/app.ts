const fs = require('fs');
const express = require("express");

const app = express();

// default port to listen
const port = 3000;

// define a route handler for the default home page
app.get("/", (req, res) => {
    const text = fs.readFileSync('./README.md').toString();
    res.send(text);
});

// start the Express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});