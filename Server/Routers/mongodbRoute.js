const express = require('express');
const router = express.Router();
const mongodb = require('../Controller/UserMongodb')

router.get("/api/mongodb/user", mongodb.getUser)
router.post("/api/mongodb/user", mongodb.pushUser)
router.put("/api/mongodb/user/:id", mongodb.putUser)
router.delete("/api/mongodb/user/:id", mongodb.deleteUser)

module.exports = router