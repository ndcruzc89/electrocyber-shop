let express = require("express");
let mongoose = require("mongoose");
let cors = require("cors");
let bodyParser = require("body-parser");

// Rutas de Express
const productRoute = require("../backend/routes/product.route");
const userRoute = require("../backend/routes/user.route");

// Base de datos
const db = require("../backend/database/db").mongoURI;

// Conexión a MongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB conectado correctamente"))
  .catch((err) => console.log(err));

const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());
app.use("/products", productRoute);
app.use("/users", userRoute);

// Configuración de puerto
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log("Conectado al puerto" + port);
});

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
