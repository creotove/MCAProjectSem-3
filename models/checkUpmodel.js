const mongoose = require("mongoose");
const checkUpSchema = new mongoose.Schema({
  patientName: {
    type: String,
    required: true,
    ref: "patient",
  },
  department: {
    type: String,
    required: true,
  },
  patientId: {
    type: String,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  bloodPressure: {
    type: Number,
    required: true,
  },
  doctorName: {
    type: String,
    required: true,
    ref: "docotor",
  },
  doctorId: {
    type: String,
    ref: "doctor",
  },
  isChecked: {
    type: Boolean,
    default: false,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});
const checkUpModel = mongoose.model("checkups", checkUpSchema);
module.exports = checkUpModel;
