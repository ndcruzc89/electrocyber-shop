let express = require("express"),
  router = express.Router();

// Modelo Producto
let productSchema = require("../models/Product");

// Lista de Productos
router.route("/").get((req, res, next) => {
  productSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Crear Producto
router.route("/create-product").post((req, res, next) => {
  productSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

// Actualizar Producto
router.route("/update-product/:id").put((req, res, next) => {
  productSchema.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        console.log(error);
        return next(error);
      } else {
        res.json(data);
        console.log("Producto actualizado con éxito!");
      }
    }
  );
});

module.exports = router;
