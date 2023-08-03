const FoodItems = require("../models/FoodItems");

exports.products = async function (req, res, next) {
  const products = await FoodItems.find();
  //   const total = await FoodItems.countDocuments();
  //   res.setHeader("Content-Range", `products 0-${products.length}/${total}`);

  return res.send(products);
};
