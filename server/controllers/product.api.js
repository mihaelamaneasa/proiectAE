const express = require("express");
const router = express.Router();
const product = require("../models/product.js");

router.get("/", function(req, res) {
    product.find({}, function(err, data) {
        if (err) {
            res.send("error");
            return;
        }
        res.send(data);
    });
});

module.exports = router;