const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    fname: String,
    lname: String,
    email: String,
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = userSchema