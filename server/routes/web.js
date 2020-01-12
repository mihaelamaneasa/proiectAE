const express = require('express');
const router = express.Router();
const path = require("path");

const absPath = path.join(__dirname, "../../app");

router.get('/', function(req, res, next) {
    res.sendFile(absPath + "/app.html");
});

module.exports = router;