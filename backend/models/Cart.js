const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let cartSchema = new Schema(
  {
    name: {type: String, required: true, unique: true},
    img: {type: String, required: true},
    quantity: {type: Number, required: true},
    price: {type: Number, required: true},
  },
  {
    collection: "cart",
  }
);

module.exports = mongoose.model("Cart", cartSchema);