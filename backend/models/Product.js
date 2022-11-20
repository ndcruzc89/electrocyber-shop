const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let productSchema = new Schema(
  {
    name: {type: String, required: true, unique: true},
    img: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    currency: {type: String, required: true}
  },
  {
    collection: "products",
  }
);

module.exports = mongoose.model("Product", productSchema);
