const express = require("express");
const app = express();
const cors = require("cors");
const customerController = require("./controllers/customer.controller");

app.use(express.json());
app.use(cors());

app.use("/api", customerController);

module.exports = app;
