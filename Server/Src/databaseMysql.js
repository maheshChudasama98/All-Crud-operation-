const mysql = require('mysql2');

const createTable = `CREATE TABLE USER (
    id INT NOT NULL AUTO_INCREMENT,
    firstName VARCHAR(45) NULL,
    lastName VARCHAR(45) NULL,
    email VARCHAR(100) NULL,
    password VARCHAR(15) NULL,
    PRIMARY KEY(id))`;

const alterTable = 'ALTER TABLE User AUTO_INCREMENT=100';
var cos = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "yug@1226"
})



const connect = () => {
    cos.connect((err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Connected");

            // create dropDateBase
            const dropDateBase = `DROP DATABASE MYDEMO;`
            // cos.query(dropDateBase, (err) => { if (err) throw err })

            // create database
            const dataBase = `CREATE DATABASE MYDEMO;`
            // cos.query(dataBase, (err) => { if (err) throw err })

            // select database
            const selectDatabase = `USE MYDEMO;`
            cos.query(selectDatabase, (err) => { if (err) throw err })

            // drop table 
            const dropTable = `DROP TABLE USER`
            // cos.query(dropTable, (err) => { if (err) throw err })

            // create table
            // cos.query(createTable, (err) => { if (err) throw err })

            // alertable 
            // cos.query(alterTable, (err) => { if (err) throw err })
        }
    })
}
module.exports = {
    connect,
    cos
}
