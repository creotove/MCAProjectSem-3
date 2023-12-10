const userModel = require("../models/userModels");
const patientModel = require("../models/patientModel");
const doctorModel = require("../models/doctorModel");
const adminModel = require("../models/adminModel");
const receptionistModel = require("../models/receptionistModel");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//register callback
// const registerController = async (req, res) => {
//     try {
//         const exisitingUser = await userModel.findOne({ email: req.body.email });
//         if (exisitingUser) {
//             return res
//                 .status(200)
//                 .send({ message: "User Already Exist", success: false });
//         }
//         const password = req.body.password;
//         const salt = await bcrypt.genSalt(10);
//         const hashedPassword = await bcrypt.hash(password, salt);
//         req.body.password = hashedPassword;
//         const newUser = new userModel(req.body);
//         await newUser.save();
//         res.status(201).send({ message: "Register Sucessfully", success: true });
//     } catch (error) {
//         console.log(error);
//         res.status(500).send({
//             success: false,
//             message: `Register Controller ${error.message}`,
//         });
//     }
// };

// login callback
const loginController = async (req, res) => {
  try {
    const { uniqueId, password } = req.body;
    const user = await userModel.findOne({ uniqueId });
    if (!user) {
      return res
        .status(400)
        .send({ message: "user not found", success: false });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(400)
        .send({ message: "Invlid Credentials", success: false });
    }
    const token = jwt.sign(
      { uniqueId: user.uniqueId },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );
    res.status(200).send({
      message: "Logged In Successfully",
      success: true,
      token,
      data: user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: `Error in Login CTRL ${error.message}` });
  }
};

// auth callback
const userAuthController = async (req, res) => {
  try {
    const { uniqueId } = req.body;
    const user = await userModel.findOne({ uniqueId });
    user.password = undefined;
    if (!user) {
      return res.status(200).send({
        message: "user not found",
        success: false,
      });
    }
    // return res.status(200).send({
    //   message: "User Fetched",
    //   success: true,
    //   data: user,
    // });
    if (user.role === "patient") {
      const patient = await patientModel.findOne({ uniqueId });
      if (!patient)
        return res.status(200).send({
          message: "user not found",
          success: false,
        });
      const data = { patient, user };
      return res.status(200).send({
        message: "Patient Fetched with User",
        success: true,
        data: data,
      });
    }
    if (user.role === "doctor") {
      const doctor = await doctorModel.findOne({ uniqueId });
      if (!doctor)
        return res.status(200).send({
          message: "user not found",
          success: false,
        });
      const data = { doctor, user };
      return res.status(200).send({
        message: "user found",
        success: true,
        data: data,
      });
    }
    if (user.role === "admin") {
      const admin = await adminModel.findOne({ uniqueId });
      if (!admin)
        return res.status(200).send({
          message: "user not found",
          success: false,
        });
      const data = { admin, user };
      return res.status(200).send({
        message: "user found",
        success: true,
        data: data,
      });
    }
    if (user.role === "receptionist") {
      const receptionist = await receptionistModel.findOne({ uniqueId });
      if (!receptionist)
        return res.status(200).send({
          message: "user not found",
          success: false,
        });
      const data = { receptionist, user };
      return res.status(200).send({
        message: "user found",
        success: true,
        data: data,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "auth error",
      success: false,
      error: error,
    });
  }
};

const selfDataAccToTheirId = async (req, res) => {
  try {
    const { uniqueId } = req.body;
    const user = await userModel.findOne({ uniqueId });
    const { role } = user;
    if (role === "patient") {
      const patient = await patientModel.findOne({ uniqueId });
      if (!patient) {
        return res.status(200).send({
          message: "user not found",
          success: false,
        });
      }

      return res.status(200).send({
        message: "User found Successfully",
        success: true,
        data: patient,
      });
    }
    if (role === "doctor") {
      const doctor = await doctorModel.findOne({ uniqueId });
      const profilePic = user.profilePic;
      if (!doctor) {
        return res.status(200).send({
          message: "user not found",
          success: false,
        });
      }
      return res.status(200).send({
        message: "User found Successfully",
        success: true,
        data: {user:doctor, profilePic },
      });
    }
    if (role === "admin") {
      const admin = await adminModel.findOne({ uniqueId });
      if (!admin) {
        return res.status(200).send({
          message: "user not found",
          success: false,
        });
      }
      return res.status(200).send({
        message: "User found Successfully",
        success: true,
        data: admin,
      });
    }
    if (role === "receptionist") {
      const receptionist = await receptionistModel.findOne({ uniqueId });
      if (!receptionist) {
        return res.status(200).send({
          message: "user not found",
          success: false,
        });
      }
      const data = {
        profilePic: user.profilePic,
        user: receptionist,
      };
      return res.status(200).send({
        message: "User found Successfully",
        success: true,
        data,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Internal Server Error",
      success: false,
      error: error,
    });
  }
};

const uploadProfilePic = async (req, res) => {
  const { uniqueId, profile, name, email, address } = req.body;
  const user = await userModel.findOne({ uniqueId: uniqueId });
  if (!user) {
    return res.status(400).send({
      message: "user not found",
      success: false,
    });
  }
  const updatedUser = await userModel.findOneAndUpdate(
    { uniqueId: uniqueId },
    { profilePic: profile, name, email, address },
    { new: true }
  );
  if (!updatedUser) {
    return res.status(400).send({
      message: "user not found",
      success: false,
    });
  }
  const role = user.role;
  if (role === "patient") {
    const patient = await patientModel.findOne({ uniqueId });
    if (!patient) {
      return res.status(404).send({
        message: "user not found",
        success: false,
      });
    }
    patient.name = name;
    patient.email = email;
    patient.address = address;
    await patient.save();
  }
  if (role === "doctor") {
    const doctor = await doctorModel.findOne({ uniqueId });
    if (!doctor) {
      return res.status(404).send({
        message: "user not found",
        success: false,
      });
    }
    doctor.name = name;
    doctor.email = email;
    doctor.address = address;
    await doctor.save();
  }
  if (role === "receptionist") {
    const receptionist = await receptionistModel.findOne({ uniqueId });
    if (!receptionist) {
      return res.status(404).send({
        message: "user not found",
        success: false,
      });
    }
    receptionist.name = name;
    receptionist.email = email;
    receptionist.address = address;
    await receptionist.save();
  }

  await updatedUser.save();

  return res.status(200).send({
    message: "Profile Pic Updated",
    success: true,
    data: user,
  });
};

const changePassword = async (req, res) => {
  const { uniqueId, password, newPassword } = req.body;
  const user = await userModel.findOne({ uniqueId: uniqueId });
  if (!user) {
    return res.status(400).send({
      message: "user not found",
      success: false,
    });
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).send({
      message: "Invalid Credentials",
      success: false,
    });
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(newPassword, salt);
  user.password = hashedPassword;
  await user.save();
  return res.status(200).send({
    message: "Password Changed",
    success: true,
    data: user,
  });
};

module.exports = {
  loginController,
  userAuthController,
  selfDataAccToTheirId,
  uploadProfilePic,
  changePassword,
};
