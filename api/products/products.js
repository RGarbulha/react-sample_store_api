var express = require("express");
var mongoose = require("mongoose");
var router = express.Router();
var Product = require("./schema/Product");
const cors = require('cors')

mongoose.connect(
  process.env.MONGODB_CONN_STRING
);

// log when the DB is connected
mongoose.connection.on("open", () => {
  console.log("Database connection open.");
});

router.use(cors())

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log("Time: ", Date.now());
  //AUTH HERE

  next();
});

router.get("/list" ,function (req, res) {
  Product.find()
    .then((products) => {
      res.send({ products: products });
    })
    .catch((err) => {
      res.send(404, { msg: err });
    });
});

router.get("/sku/:sku", function (req, res) {
  var sku = /^req.params.sku$/i;

  var replace = "^" + req.params.sku + "$";
  var re = new RegExp(replace, "i");

  Product.findOne({ sku: re })
    .then((product) => {
      res.send({ product: product });
    })
    .catch((err) => {
      res.send(404, { msg: err });
    });
});

router.get("/slug/:slug", function (req, res) {
  var sku = /^req.params.slug$/i;

  var replace = "^" + req.params.slug + "$";
  var re = new RegExp(replace, "i");

  Product.findOne({ slug: re })
    .then((product) => {
      res.send({ product: product });
    })
    .catch((err) => {
      res.send(404, { msg: err });
    });
});

module.exports = router;
