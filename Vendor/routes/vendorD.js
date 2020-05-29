const express = require("express");
const router = express.Router();

const Ddb = {
    "milk": {
        quantity: 2,
        price: 8
    }
}


router.get("/", (req, res, next) => {
    var result = {}
    if (req.query.ingredient in Ddb) {
        result = Ddb[req.query.ingredient];
    }
    res.send({...result, vendor: "vendor D"});
});

module.exports = router;