const express = require("express");
const app = express();
const cors = require("cors");
const customerController = require("./controllers/customer.controller");


const corsOptions = {
  origin: ["http://localhost:5173", "https://crm-backend-p6mb.onrender.com"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

app.use(express.json());
app.use(cors(corsOptions)); // Apply updated CORS settings

app.use("/api", customerController);

module.exports = app;
