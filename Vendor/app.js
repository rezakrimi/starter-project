const express = require("express");
const app = express();
const cors = require('cors');
//remove for production
app.use(cors());
app.options('*', cors());

const vendorA = require("../GVendorsServer/routes/vendorA");
const vendorB = require("../GVendorsServer/routes/vendorB");
const vendorC = require("../GVendorsServer/routes/vendorC");
const vendorD = require("../GVendorsServer/routes/vendorD");

app.use("/vendorA", vendorA);
app.use("/vendorB", vendorB);
app.use("/vendorC", vendorC);
app.use("/vendorD", vendorD);

app.listen(5000, 'localhost', () => {
    console.log('Vendors app listening on port 5000!');
});