const express = require("express");
const router = express.Router();
const Customer = require("../models/Customer.Model");

router.get("/search-customer", async (req, res) => {
  try {
    const search = req.query.search || "";

    const customers = await Customer.find({
      $or: [
        { Name: { $regex: search, $options: "i" } },
        { Email: { $regex: search, $options: "i" } },
        { CompanyName: { $regex: search, $options: "i" } },
      ],
    })
      .limit(10)
      .select();

    return res.status(200).send(customers);
  } catch (error) {
    return res.status(500).send({
      error: error.message,
    });
  }
});

router.post("/add-customer", async (req, res) => {
  try {
    const addCustomer = await Customer.create(req.body);
    return res
      .status(201)
      .send({ message: "Customer added succesfully", data: addCustomer });
  } catch (error) {
    return res.send({ error: error });
  }
});

router.get("/all-customer", async (req, res) => {
  try {
    const allCustomers = await Customer.find({}).lean().exec();
    return res.send({ status: 200, data: allCustomers });
  } catch (error) {
    return res.send({ error: error });
  }
});

router.patch("/update-customer/:id", async (req, res) => {
  try {
    const updateCustomer = await Customer.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
    ).lean();

    return res.send({
      message: "Customer updated successfully",
      data: updateCustomer,
    });
  } catch (error) {
    return res.send({ error: error });
  }
});

router.delete("/delete-customer/:id", async (req, res) => {
  try {
    const deleteCustomer = await Customer.findByIdAndDelete(req.params.id);
    return res.send({ message: "Customer deleted successfully" });
  } catch (error) {
    return res.send({ error: error });
  }
});

module.exports = router;
