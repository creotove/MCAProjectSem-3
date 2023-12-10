const mongoose = require("mongoose");
const billSchema = new mongoose.Schema(
  {
    patientId: {
      type: String,
      required: true,
      ref: "patient",
    },
    patientName: {
      type: String,
      required: true,
      ref: "patient",
    },
    doctorName: {
      type: String,
      required: true,
      ref: "doctor",
    },
    doctorId: {
      type: String,
      required: true,
      ref: "doctor",
    },
    department: {
      type: String,
      required: [true, "department is required"],
    },
    fee: {
      type: Number,
      required: true,
    },
    paymentMode: {
      type: String,
      required: true,
      enum: ["Cash", "Card", "UPI"],
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);
const billModel = mongoose.model("bill", billSchema);
module.exports = billModel;
