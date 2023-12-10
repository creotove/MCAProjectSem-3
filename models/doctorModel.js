const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    ref: "users",
    required: true,
  },
  uniqueId: {
    type: String,
    ref: "users",
    unique: true,
  },
  gender: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: [true, "age is required"],
  },
  email: {
    type: String,
    required: [true, "email is required"],
    unique: true,
  },
  mobileNumber: {
    type: Number,
    required: true,
    unique: true,
  },
  specialization: {
    type: String,
    enum: [
      "Eye Care",
      "Psychotherapy",
      "Primary Care",
      "Dental Care",
      "Orthopedic",
      "Cardiology",
      "Gynecology",
      "Neurology",
      "Dermatologists",
      "Nutritionists",
      "Physical Therapists",
    ],
  },
  address: {
    type: String,
    required: [true, "address is required"],
  },
  zip: {
    type: Number,
    required: [true, "zip is required"],
  },
  experience: {
    type: String,
    required: [true, "experience is required"],
  },
  patientChecked: {
    type: [
      {
        patientId: {
          type: String,
          ref: "patient",
          required: [true, "patientId is required"],
        },
      },
    ],
    default: [],
  },
  patientToBeChecked: {
    type: [
      {
        patientId: {
          type: String,
          ref: "patient",
          required: [true, "patientId is required"],
        },
        toBeChecked: {
          type: Boolean,
          default: false,
        },
      },
    ],
    default: [],
  },

});

const doctorModel = mongoose.model("Doctor", doctorSchema);

module.exports = doctorModel;

