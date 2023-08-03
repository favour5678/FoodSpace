let mongoose = require("mongoose");
const { Schema } = mongoose;

const FoodItemsSchema = new Schema(
  {
    id: { type: String, require: true },
    name: { type: String, require: true },
    category: { type: String, require: true },
    image: { type: String, require: true },
    price: { type: String, require: true },
  },
  { timestamp: true }
);

module.exports = mongoose.model("fooditems", FoodItemsSchema);
