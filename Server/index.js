const express = require('express')
const app = express()
const port = 8080
const cors = require('cors');
const bodyparser = require('body-parser')

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// mongoose.connect('mongodb://localhost:27017/user')
//     .then(() => console.log('Connected! Mongodb server'))
//     .catch((err) => console.log(err));


// const userSchema = new Schema({
//     fname: String,
//     lname: String,
//     email: String,
//     date: {
//         type: Date,
//         default: Date.now
//     }
// })

// const MyModel = mongoose.model('User', userSchema);

// const model = require('./Src/Mongodb')
// model.dbconet
app.use(cors())
app.options('*', cors());  // enable pre-flight
app.use(bodyparser.json());
app.use(express.json())

const databaseMysql = require('./Src/databaseMysql')
databaseMysql.connect();
const mySqlRoute = require('./Routers/mySqlRoute')
app.use(mySqlRoute)

const userRoute = require('./Routers/UserRoute')
app.use(userRoute)

const mongodbRoute = require('./Routers/mongodbRoute')
app.use(mongodbRoute)
app.use(express.urlencoded({ extended: true }));
app.listen(port, (err) => err == null ? console.log(`Server run on port http://localhost:${port}/ `) : console.log("Server error", err))