const express = require('express')
const server = express();
require("dotenv").config()
const ejs = require('ejs');
const { send } = require('express/lib/response');


const formRouter = require('./routes/api/form.api')
server.use('/form.api', formRouter)
const pageRouter = require('./routes/api/pages.api')
server.use('/pages.api', formRouter)


server.get("*", (req, res) => {
    res.send("<h1>We go live, this is second update since launch</h1>")
})

// import server and model
const DB = require("./module/dbconnect");

const port = process.env.SERVER_PORT || 5000
server.listen(port, () => {
    console.log(`Server up and Running... http://localhost:${port}`)
})