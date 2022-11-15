const express = require('express')
const server = express();
require("dotenv").config()





const port = process.env.SERVER_PORT || 5000
server.listen(port, () => {
    console.log(`Server up and Running... http://localhost:${port}`)
})