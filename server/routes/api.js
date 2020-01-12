const express = require('express');
const router = express.Router();

router.use("/product", require("../controllers/product.api"));

module.exports = router;