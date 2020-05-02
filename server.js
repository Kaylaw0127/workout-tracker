const express = require("express");
const mongoose = require("mongoose");

const routes = require("./controllers/controller.js");
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout";

const PORT = 8080;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

app.use(express.static("public"));

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useFindAndModify: false,
});

// Routes
app.use(require("./routes/routes.js"));
app.use(require("./rouges/html-routes"));

app.listen(PORT, () => {
  console.log(`App running on: ${PORT}!`);
});