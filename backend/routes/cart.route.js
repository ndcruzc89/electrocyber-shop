let express = require("express"),
  router = express.Router();

// Modelo Carrito de compras
let cartSchema = require("../models/Cart");

// Obtener la lista de productos en el Carrito
router.route("/").get((req, res, next) => {
  cartSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Obtener un producto en el Carrito
router.route("/get-product-cart/:id").get((req, res, next) => {
  cartSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Añadir el producto al Carrito
router.route("/add-product-cart").post((req, res, next) => {
  cartSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

// Actualizar un producto en el Carrito
router.route("/update-product-cart/:id").put((req, res, next) => {
  cartSchema.findByIdAndUpdate(
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
        console.log("Producto actualizado en el Carrito de Compras con éxito!");
      }
    }
  );
});

// Eliminar un producto en el Carrito
router.route("/delete-product-cart/:id").delete((req, res, next) => {
  cartSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});

module.exports = router;
