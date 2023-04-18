const express = require('express');
const router = express.Router();
const data = require('../Src/databaseMysql')
const con = data.cos
require('../Models/index')

router.get("/api/user", (req, res) => {

    res.send("send ")
})

//  Show
router.get('/sql/user', (req, res) => {
    console.log("ser");
    con.connect(function (err) {
        if (err) throw err;
        con.query("SELECT * FROM USER", function (err, result, fields) {
            if (err) throw err;
            // console.log(result);
            res.json(result)
        });
    });
})


router.post('/sql/user', (req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName
    const email = req.body.email;
    const password = req.body.password;
    con.connect(function (err) {
        if (err) throw err;
        console.log("Connected!");
        var sql = `INSERT INTO mydemo.user (firstName, lastName, email, password) VALUES ('${firstName}', '${lastName} ', '${email}', '${password}')`;
        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log(req.body);
        });
    });
    res.send(req.body)
})


router.put('/sql/user/:id', (req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const password = req.body.password;
    con.connect(function (err) {
        if (err) throw err;
        var sql = `UPDATE user SET firstName = '${firstName}', lastName='${lastName}', email='${email}', password='${password}'  WHERE id = '${req.params.id}' `;
        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log(result.affectedRows + " record(s) updated");
        });
    }); res.send(req.body)
})


// delete show 
router.delete('/sql/user/:id', (req, res) => {
    con.connect(function (err) {
        if (err) throw err;
        var sql = `DELETE FROM USER WHERE ID= '${req.params.id}'`;
        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log("Number of records deleted: " + result.affectedRows);
        });
    });
    res.send(req.body)
})

module.exports = router