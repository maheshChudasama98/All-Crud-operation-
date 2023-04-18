const mongoose = require('mongoose');
const user = require('../Models/userMongo')
const dbconet =
    mongoose.connect('mongodb://localhost:27017/user')
        .then(() => console.log('Connected! Mongodb server'));


const Schema = mongoose.Schema;
const userSchema = new Schema({
    name: String,
    role: String,
    email: String,
    password: String,
    date: {
        type: Date,
        default: Date.now
    }
})

const MyModel = mongoose.model('User', userSchema);
module.exports = {
    MyModel
}