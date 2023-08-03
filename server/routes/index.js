var express = require("express");
const FoodItems = require("../models/FoodItems");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});
router.get("/products", async function (req, res) {
  const products = await FoodItems.find();

  return res.send(products);
});

module.exports = router;
