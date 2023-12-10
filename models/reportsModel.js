const mongoose = require("mongoose");
const reportSchema = new mongoose.Schema(
  {
    patientId: {
      type: String,
      ref: "patient",
      required: [true, "patientId is required"],
    },
    patientName: {
      type: String,
      ref: "patient",
      required: [true, "patient name is required"],
    },
    requestedBy: {
      type: String,
      required: [true, "requested by doctor name is required"],
      ref: "doctor",
    },
    reportName: {
      type: String,
      required: [true, "report name is required"],
    },
    reportFile: {
      type: String,
      required: [true, "report file is required"],
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
  },
  { timestamps: true }
);
const reportModel = mongoose.model("report", reportSchema);
module.exports = reportModel;
