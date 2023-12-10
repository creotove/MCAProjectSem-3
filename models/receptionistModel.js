const mongoose = require("mongoose");

const receptionistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  uniqueId: {
    type: String,
    required: true,
    unique: true,
  },
  mobileNumber: {
    type: Number,
    required: true,
    unique: true,
  },
  gender: {
    type: String,
    required: true,
    enum: ["Male", "Female", "Other"],
  },
  age: {
    type: Number,
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
});

const receptionistModel = mongoose.model("Receptionist", receptionistSchema);

module.exports = receptionistModel;

// "firstName"  : "receptionist",
// "lastName" : "receptionist",
// "email" : "receptionist@hms",
// "gender" : "Male",
// "mobileNumber" : 100,
// "age" : 21,
// "address1" : "ahmd",
// "address2" : "ahmd",
// "zip" : "ahmd"
