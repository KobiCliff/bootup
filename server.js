const express = require('express')
const server = express();
require("dotenv").config()
const ejs = require('ejs');
const { send } = require('express/lib/response');


server.get("*", (req, res) => {
    res.send("<h1>We go live</h1>")
})



const port = process.env.SERVER_PORT || 5000
server.listen(port, () => {
    console.log(`Server up and Running... http://localhost:${port}`)
})