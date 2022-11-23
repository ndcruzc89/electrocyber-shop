let express = require("express");
let router = express.Router();
let jwt = require("jsonwebtoken");
let bcrypt = require("bcryptjs");

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

// Login Usuario
router.route("/login").post((req, res) => {
  userSchema
    .findOne({ email: req.body.email })
    .then((user) => {
      if (user) {
        if (bcrypt.compareSync(req.body.pass, user.pass)) {
          const payload = {
            _id: user._id,
            first_name: user.firstName,
            last_name: user.lastName,
            email: user.email,
          };
          let token = jwt.sign(payload, "secret", {
            expiresIn: 1440,
          });

          res.status(200).json({ msg: "Login exitoso", token: token });
        } else {
          res.status(400).json({ error: "Credenciales inválidas" });
        }
      } else {
        res.status(400).json({ error: "El usuario no existe" });
      }
    })
    .catch((err) => {
      res.status(400).json({error: err });
    });
});

// Crear un Usuario
router.route("/create-user").post((req, res) => {
  const userData = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    pass: req.body.pass,
  };

  userSchema
    .findOne({ email: req.body.email })
    .then((user) => {
      if (!user) {
        bcrypt.hash(req.body.pass, 10, (err, hash) => {
          userData.pass = hash;
          userSchema
            .create(userData)
            .then((user) => {
              res.status(200).json({ msg: "Usuario registrado con éxito!", user: user });
            })
            .catch((err) => {
              res.status(400).json({ error: "Error de registro" });
            });
        });
      } else {
        res.status(400).json({ error: "Usuario ya registrado" });
      }
    })
    .catch((err) => {
      res.status(400).json({ error: err });
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
