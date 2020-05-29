const express = require("express");
const router = express.Router();

const Bdb = {
    "yeast": {
        quantity: 10,
        price:7
    },
    "butter": {
        quantity: 4,
        price: 12
    },
    "egg": {
        quantity: 5,
        price: 5
    },
    "sugar": {
        quantity: 7,
        price: 8
    }
};

router.get("/", (req, res, next) => {
    var result = {}
    if (req.query.ingredient in Bdb) {
        result = Bdb[req.query.ingredient];
    }
    res.send({...result, vendor: "vendor B"});
});

module.exports = router;