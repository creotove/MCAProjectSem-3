const mongoose = require("mongoose");
const visitSchema = new mongoose.Schema(
  {
    checkedBy: {
      type: String,
      ref: "doctor",
      required: [true, "checked by doctor name is required"],
    },
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
    isChecked: {
      type: Boolean,
      default: false,
    },
    department: {
      type: String,
      default: "",
    },
    prescription: {
      type: String,
      default: "",
    },
    report: {
      type: String,
      default: "No Reports Required",
    },
    visitSummary: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);
const visitModel = mongoose.model("visit", visitSchema);
module.exports = visitModel;
