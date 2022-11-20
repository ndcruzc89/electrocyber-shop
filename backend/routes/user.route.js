let express = require("express"),
  router = express.Router();

// Modelo Producto
let userSchema = require("../models/User");

// Obtener la lista de Usuarios
router.route("/").get((req, res, next) => {
  userSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Obtener un Usuario
router.route("/get-user/:id").get((req, res, next) => {
  userSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Crear un Usuario
router.route("/create-user").post((req, res, next) => {
  userSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

// Actualizar un Usuario
router.route("/update-user/:id").put((req, res, next) => {
  userSchema.findByIdAndUpdate(
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
        console.log("Usuario actualizado con éxito!");
      }
    }
  );
});

// Eliminar un Usuario
router.route("/delete-user/:id").delete((req, res, next) => {
  userSchema.findByIdAndRemove(req.params.id, (error, data) => {
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