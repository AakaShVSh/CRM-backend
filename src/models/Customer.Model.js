const mongoose = require("mongoose");

const CustomerSchema = mongoose.Schema(
  {
    Name: { type: String, required: true, trim: true },
    Email: { type: String, lowercase: true, required: true, trim: true },
    PhoneNumber: { type: String, required: true },
    CompanyName: { type: String, required: true, trim: true },
    LeadStatus: {
      type: String,
      enum: ["New", "Contacted", "Qualified", "Converted", "Lost"],
      default: "New",
    },
    Notes: { type: String, default: "", required: true, trim: true },
    CreatedDate: {
      type: Date,
      default: Date.now,
    },
  },
  {
    versionKey: false,
  },
);

module.exports = mongoose.model("Customer", CustomerSchema);
