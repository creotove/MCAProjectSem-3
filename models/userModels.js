const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Last Name is require"],
  },
  email: { // For email Future Module
    type: String,
    required: [true, "email is required"],
    unique: true,
  },
  uniqueId: { //For Signin
    type: String,
    unique: true,
    required: [true, "uniqueId is require"],
  },
  password: {
    type: String,
    required: [true, "password is require"],
  },
  role: {
    type: String,
    default: "patient",
    enum: ["patient", "doctor", "admin", "receptionist"],
  },
  profilePic: {
    type: String,
    default: "https://cirrusindia.co.in/wp-content/uploads/2016/10/dummy-profile-pic-male1.jpg",
  },
});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
