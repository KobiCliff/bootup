// setup mongodb with mongoose
const mongoose = require('mongoose')
const Page = require("../model/pages.model")
const User = require('../model/user.model')
let DB = {};

// setup mongodb server connections
const dburi = process.env.SVR_DB_URI
const connection = mongoose.connect(dburi, {
    useNewUrlParser: true 
}).then((con) => {
    console.log(`Connected DB`)
}).catch((err) => {
    console.log(`Error:` + err)
});

// Link cconnection and model
DB.connection = connection;
DB.Page = Page;
DB.User = User;

// export the server
module.exports = DB;