const doctorModel = require("../models/doctorModel");
const receptionistModel = require("../models/receptionistModel");
const patientModel = require("../models/patientModel");
const userModel = require("../models/userModels");
const billModel = require("../models/billModel");
const adminModel = require("../models/adminModel");
const bcrypt = require("bcryptjs");

//Only for creating Admin for the first time with the help of POSTMAN
const createAdmin = async (req, res) => {
  try {
    const { adminGender, adminAge, adminDOB, uniqueId, name, email, role } =
      req.body; //password field

    //Chat gpt stuff idk
    const dateStr = adminDOB;
    const parts = dateStr.split("-");
    const isoDateStr = `${parts[2]}-${parts[1]}-${parts[0]}T00:00:00.000Z`;

    const password = req.body.password;
    const stringPass = password.toString();
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(stringPass, salt);
    const adminData = {
      adminName: name,
      adminGender,
      adminAge,
      adminDOB: isoDateStr,
      uniqueId,
    };
    const userData = {
      name,
      email,
      password: hashedPassword,
      role,
      uniqueId,
    };

    const newAdmin = new adminModel(adminData);
    if (!newAdmin) {
      return res.status(404).send({
        message: "Error Adding the Admin",
        success: false,
      });
    }
    const newUser = new userModel(userData);
    if (!newUser) {
      return res.status(404).send({
        message: "Error Adding the Admin",
        success: false,
      });
    }
    await newAdmin.save();
    await newUser.save();

    return res.status(200).send({
      message: "Added Admin",
      success: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `Adding new Admin Controller ${error.message}`,
    });
  }
};

const addNewReceptionist = async (req, res) => {
  try {
    const { name, email, uniqueId, mobileNumber, gender, age, address, zip } =
      req.body; //also include password field

    //hashing the password
    const pass = req.body.password;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(pass, salt);
    const userData = {
      name,
      email,
      uniqueId,
      password: hashedPassword,
      role: "receptionist",
    };
    const receptionistData = {
      name,
      email,
      uniqueId,
      mobileNumber,
      gender,
      age,
      address,
      zip,
    };

    // destructuring the req.body for creating the user
    const newReceptionist = new receptionistModel(receptionistData);
    const newUser = new userModel(userData);
    await newReceptionist.save();
    await newUser.save();
    res
      .status(201)
      .send({ message: "New Receptionist Added Sucessfully", success: true });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `Error in Admin controller in addNewReceptionist ${error.message}`,
    });
  }
};

const addNewDoctor = async (req, res) => {
  try {
    const {
      name,
      uniqueId,
      gender,
      age,
      email,
      mobileNumber,
      specialization,
      address,
      zip,
      experience,
      password
    } = req.body.formData;
    

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const existingDoctor = await doctorModel.findOne({ uniqueId });
    if (existingDoctor) {
      return res.status(400).json({
        success: false,
        message: "Doctor already exists",
      });
    }

    const doctorData = {
      name,
      uniqueId,
      gender,
      age,
      email,
      mobileNumber,
      specialization,
      address,
      zip,
      experience,
    };
    const userData = {
      name,
      email,
      uniqueId,
      password: hashedPassword,
      role: "doctor",
    };
    const newDoctor = new doctorModel(doctorData);
    const newUser = new userModel(userData);
    if (!newUser) {
      return res.status(500).send({
        success: false,
        message: `Error in Admin controller in addNewDoctor ${error.message}`,
      });
    }

    await newDoctor.save();
    await newUser.save();
    res
      .status(201)
      .send({ message: "New Doctor Added Sucessfully", success: true });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `Error in Admin controller in addNewDoctor ${error.message}`,
    });
  }
};

// Fetching Todays Income of Hospital
const getTodaysIncome = async (req, res) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  try {
    const tottalVisits = await billModel.find({
      date: {
        $gte: today,
      },
    });
    const totalIncome = tottalVisits.reduce((acc, visit) => {
      if (visit.date >= today) {
        return acc + (visit.fee || 0);
      }
      return acc;
    }, 0);

    res.status(200).send({
      success: true,
      data: totalIncome,
      message: `All Income Fetched Successfully`,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `Error in Admin controller in getAllIncome ${error.message}`,
    });
  }
};

// Fetching Recent Patients 5 per page
const getRecentPatients = async (req, res) => {
  const { page } = req.query;
  const pageSize = 5; // Number of patients per page

  try {
    const totalCount = await patientModel.countDocuments(); // Get the total number of patients
    const totalPages = Math.ceil(totalCount / pageSize); // Calculate the total number of pages

    if (page > totalPages) {
      // Check if the requested page exceeds the total number of pages
      return res.status(200).send({
        success: true,
        message: "No more Recent Patients",
      });
    }

    const patients = await patientModel
      .find()
      .sort({ "patientVisit.date": -1 }) // Sort by most recent visit first
      .skip((page - 1) * pageSize) // Skip the appropriate number of documents
      .limit(pageSize); // Limit the number of documents per page
    res.status(200).send({
      success: true,
      data: {
        patients,
        totalPages,
        currentPage: page,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `Error in Admin controller in getRecentPatients ${error.message}`,
    });
  }
};

// Fetching Detailed Todays Income of Hospital
const getDetailedTodaysIncome = async (req, res) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  try {
    const patients = await patientModel.find({
      "patientVisit.date": {
        $gte: today,
      },
    });
    const totalAmounts = patients.map((patient) => {
      const totalAmount = patient.patientVisit.reduce((acc, visit) => {
        if (visit.date >= today) {
          return acc + (visit.amount || 0);
        }
        return acc;
      }, 0);
      return {
        patientId: patient._id,
        patientName: patient.firstName + " " + patient.lastName,
        patientMobile: patient.mobileNumber,
        totalAmount,
      };
    });

    res.status(200).send({
      success: true,
      data: totalAmounts,
      message: `All Income Fetched Successfully`,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `Error in Admin controller in getAllIncome ${error.message}`,
    });
  }
};

//Patient Visited to Hospital filtered by date
const patientVisitedFilterByDate = async (req, res) => {
  // front End me date Format
  // let yourDate = new Date()
  // yourDate.toISOString().split('T')[0]
  const { filterDate } = req.body;
  try {
    const patients = await patientModel.find({
      "patientVisit.date": {
        $gte: new Date(filterDate),
      },
    });
    res.status(200).send({
      success: true,
      data: patients,
      message: `All Patient Visited to Hospital filtered by date Fetched Successfully`,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `Error in Admin controller in patientVisitedFilterByDate ${error.message}`,
    });
  }
};

// Common function for fetching a All Receptionist, Doctor, Patients.
const getAllUsers = async (req, res, modelName, pluralName) => {
  try {
    const Model = require(`../models/${modelName}Model`); // Adjust the path as needed
    const users = await Model.find({});

    res.status(200).send({
      success: true,
      data: users,
      message: `All ${pluralName} Fetched Successfully`,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `Error in Admin controller in getAll${pluralName}: ${error.message}`,
    });
  }
};
// Calling the common function for getting all Patient
const getAllPatients = async (req, res) => {
  await getAllUsers(req, res, "patient", "Patients");
};
// Calling the common function for getting all Receptionist
const getAllReceptionists = async (req, res) => {
  await getAllUsers(req, res, "receptionist", "Receptionists");
};
// Calling the common function for getting all Doctors
const getAllDoctors = async (req, res) => {
  await getAllUsers(req, res, "doctor", "Doctors");
};

// Common function for fetching a single Receptionist, Doctor, Patients.
const getUserProfile = async (req, res, modelName) => {
  try {
    const { email } = req.body; // Get the email from the body
    const Model = require(`../models/${modelName}Model`); // Adjust the path as needed
    const user = await Model.find({ email });

    if (!user || user.length === 0) {
      return res.status(200).send({
        success: false,
        message: `User Does Not Exists`,
      });
    }

    res.status(200).send({
      success: true,
      data: user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `Error in Admin Controller in get${modelName}: ${error}`,
    });
  }
};
// Calling the common function for getting a single user
const getDoctor = async (req, res) => {
  await getUserProfile(req, res, "doctor");
};
// Calling the common function for getting a single user
const getPatient = async (req, res) => {
  await getUserProfile(req, res, "patient");
};
// Calling the common function for getting a single user
const getReceptionist = async (req, res) => {
  await getUserProfile(req, res, "receptionist");
};

// Common function for Updating a single Receptionist, Doctor, Patients.
const updateProfile = async (req, res, modelName) => {
  try {
    const { email } = req.body; // Get the email from the body
    const updatedData = req.body;
    const Model = require(`../models/${modelName}Model`); // Adjust the path as needed
    const updatedUser = await Model.findOneAndUpdate({ email }, updatedData, {
      new: true,
    });

    if (!updatedUser) {
      return res.status(404).send({
        message: `Error in Updating ${modelName} Profile`,
        success: false,
      });
    }

    return res.status(200).send({
      message: `Updated ${modelName} Profile`,
      success: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `Error in updateProfile for ${modelName}: ${error.message}`,
    });
  }
};
// Calling the common function for updating a single user
const updateDoctor = async (req, res) => {
  await updateProfile(req, res, "doctor");
};
// Calling the common function for updating a single user
const updatePatient = async (req, res) => {
  await updateProfile(req, res, "patient");
};
// Calling the common function for updating a single user
const updateReceptionist = async (req, res) => {
  await updateProfile(req, res, "receptionist");
};
const findStaff = async (req, res) => {
  try {
    const { userId } = req.body;
    const staff = await userModel.findOne({ uniqueId: userId });
    if (!staff || staff.length === 0) {
      return res.status(404).send({
        message: "No Staff Found",
        success: false,
      });
    }
    if (staff.role === "doctor") {
      const doctor = await doctorModel.findOne({ uniqueId: userId });
      if (!doctor || doctor.length === 0) {
        return res.status(404).send({
          message: "No Staff Found",
          success: false,
        });
      }
      return res.status(200).send({
        message: "Staff Found",
        success: true,
        data: doctor,
      });
    }
    if (staff.role === "receptionist") {
      const receptionist = await receptionistModel.findOne({
        uniqueId: userId,
      });
      if (!receptionist || receptionist.length === 0) {
        return res.status(404).send({
          message: "No Staff Found",
          success: false,
        });
      }
      return res.status(200).send({
        message: "Staff Found",
        success: true,
        data: receptionist,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `Error in Admin controller in findStaff ${error.message}`,
    });
  }
};
const getProfile = async (req, res) => {
  try {
    const { uniqueId } = req.body;
    const admin = await adminModel.findOne({ uniqueId }).populate("uniqueId");
    if (!admin) {
      return res.status(404).send({
        message: "No Admin Found",
        success: false,
      });
    }
    return res.status(200).send({
      message: "Admin Found",
      success: true,
      data: admin,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: `Error in Admin controller in getProfile ${error.message}`,
    });
  }
};
const removeDoctor = async (req, res) => {
  try {
    const { uniqueId } = req.body;
    const doctor = await doctorModel.findOneAndDelete({ uniqueId });
    if (!doctor) {
      return res.status(404).send({
        message: "No Doctor Found",
        success: false,
      });
    }
    const user = await userModel.findOneAndDelete({ uniqueId });
    if (!user) {
      return res.status(404).send({
        message: "No User Found",
        success: false,
      });
    }
    return res.status(200).send({
      message: "Doctor Removed",
      success: true,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: `Error in Admin controller in removeDoctor ${error.message}`,
    });
  }
};
const removeReceptionist = async (req, res) => {
  try {
    const { uniqueId } = req.body;
    const receptionist = await receptionistModel.findOneAndDelete({ uniqueId });
    if (!receptionist) {
      return res.status(404).send({
        message: "No Receptionist Found",
        success: false,
      });
    }
    const user = await userModel.findOneAndDelete({ uniqueId });
    if (!user) {
      return res.status(404).send({
        message: "No User Found",
        success: false,
      });
    }
    return res.status(200).send({
      message: "Receptionist Removed",
      success: true,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: `Error in Admin controller in removeReceptionist ${error.message}`,
    });
  }
};

const getTodayVisits = async (req, res) => {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const patients = await patientModel.find({
      "patientVisit.date": {
        $gte: today,
      },
    });
    const totalVisits = patients.reduce((acc, patient) => {
      const totalVisits = patient.patientVisit.reduce((acc, visit) => {
        if (visit.date >= today) {
          return acc + 1;
        }
        return acc;
      }, 0);
      return acc + totalVisits;
    }, 0);
    res.status(200).send({
      success: true,
      data: totalVisits,
      message: `All Visits Fetched Successfully`,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `Error in Admin controller in getTodayVisits ${error.message}`,
    });
  }
};

const getTodayIncomeInCash = async (req, res) => {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const patients = await billModel
      .find({
        date: {
          $gte: today,
        },
        paymentMode: "Cash",
      })
      .select("fee -_id");
      return console.log(patients);
    const totalAmountInCash = patients.reduce((acc, patient) => {
      return acc + patient;
    }, 0);

    res.status(200).send({
      success: true,
      data: totalAmountInCash,
      message: `All Income Fetched Successfully`,
    });
    
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `Error in Admin controller in getAllIncome ${error.message}`,
    });
  }
};

const getTodayIncomeInUpi = async (req, res) => {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const patients = await billModel
      .find({
        date: {
          $gte: today,
        },
        paymentMode: "UPI",
      })
      .select("paymentMode -_id");
    const totalAmountInCash = patients.reduce((acc, patient) => {
      return acc + patient;
    }, 0);

    res.status(200).send({
      success: true,
      data: totalAmountInCash,
      message: `All Income Fetched Successfully`,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `Error in Admin controller in getAllIncome ${error.message}`,
    });
  }
};

module.exports = {
  addNewReceptionist,
  addNewDoctor,
  getAllReceptionists,
  getAllPatients,
  getAllDoctors,
  getDoctor,
  getPatient,
  getReceptionist,
  updateDoctor,
  updatePatient,
  updateReceptionist,
  getTodaysIncome,
  patientVisitedFilterByDate,
  getDetailedTodaysIncome,
  getRecentPatients,
  createAdmin,
  findStaff,
  getProfile,
  removeDoctor,
  removeReceptionist,
  getTodayVisits,
  getTodayIncomeInCash,
  getTodayIncomeInUpi,
};
