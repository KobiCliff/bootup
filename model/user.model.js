//call in mongoose
const mongoose = require('mongoose');

//setup Schema 
const userSchema = new mongoose.Schema({
    firstname: String,
    surname: String,
    othername: String,
    mobile: Number,
    email: String,
    password: String
}, {timestamps: true})

// setup the model
const user = mongoose.model("user", userSchema)
// export the model
module.exports = user