const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
  
  name: {
    type: String,
    required: [true, "name is required"],
  },
  gender: {
    type: String,
    required: true,
  },
  uniqueId: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  mobileNumber: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
    required: true,
  },
  vaccinated: {
    type: Boolean,
    required: true,
  },
  bloodGroup: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  zip: {
    type: String,
    required: true,
  },
  reports: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "report",
    },
  ],
  visits: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "visit",
    },
  ],
  bills: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "bill",
    },
  ],
});

const patientModel = mongoose.model("patients", patientSchema);

module.exports = patientModel;
