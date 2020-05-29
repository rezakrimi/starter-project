const express = require("express");
const router = express.Router();

const Cdb = {
    "egg": {
        quantity: 8,
        price: 9
    }
}

router.get("/", (req, res, next) => {
    var result = {}
    if (req.query.ingredient in Cdb) {
        result = Cdb[req.query.ingredient];
    }
    res.send({...result, vendor: "vendor C"});
});

module.exports = router;