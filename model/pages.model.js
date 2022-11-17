// call in mongoose
const mongoose = require('mongoose');

// setup Schema
const pageSchema= new mongoose.Schema({
    title: String,
    content: String,
    

}, {timestamps: true});

// setup the model
const page = mongoose.model("pages", pageSchema)
// export the model
module.exports = page