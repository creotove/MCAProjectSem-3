const checkUpModel = require("../models/checkUpmodel");
const doctorModel = require("../models/doctorModel");
const patientModel = require("../models/patientModel");
const userModel = require("../models/userModels");
const visitModel = require("../models/visitModel");
const billModel = require("../models/billModel");
const reportModel = require("../models/reportsModel");
const bcrypt = require("bcryptjs");

const createPatient = async (req, res) => {
  try {
    const {
      name,
      gender,
      email,
      mobileNumber,
      age,
      bloodGroup,
      address,
      zip,
      vaccinated,
      uniqueId,
    } = req.body;
    const password = mobileNumber;
    const stringPass = password.toString();
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(stringPass, salt);
    const patientData = {
      name,
      gender,
      email,
      uniqueId,
      mobileNumber,
      age,
      bloodGroup,
      vaccinated,
      address,
      zip,
    };
    const userData = {
      name,
      email,
      uniqueId,
      password: hashedPassword,
      role: "patient",
    };

    const newPatient = new patientModel(patientData);
    if (!newPatient) {
      return res.status(404).send({
        message: "Error Adding the Patient for checkup",
        success: false,
      });
    }
    const newUser = new userModel(userData);
    if (!newUser) {
      return res.status(404).send({
        message: "Error Adding the Patient for checkup",
        success: false,
      });
    }
    await newPatient.save();
    await newUser.save();

    return res.status(200).send({
      message: "Added Patient for the checkUp",
      success: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `Adding new Patient Controller ${error.message}`,
    });
  }
};
const getPatientData = async (req, res) => {
  try {
    const { searchMobileNumber } = req.body;
    console.log(req.body);
    const patient = await patientModel
      .findOne({ mobileNumber: searchMobileNumber })
      .select("name gender uniqueId -_id");
    if (!patient) {
      return res.status(200).send({
        message: "Patient not found",
        success: false,
      });
    }
    return res.status(200).send({
      success: true,
      data: patient,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "auth error",
      success: false,
      error,
    });
  }
};
const getDepartmentOfDoctor = async (req, res) => {
  try {
    const { department } = req.body;
    const doctor = await doctorModel
      .find({ specialization: department })
      .select("name -_id uniqueId");
    if (!doctor) {
      return res.status(200).send({
        message: "Doctor not found",
        success: false,
      });
    }
    return res.status(200).send({
      success: true,
      data: doctor,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "internal server error",
      success: false,
      error,
    });
  }
};
const addForCheckUp = async (req, res) => {
  try {
    const {
      name,
      department,
      doctorName,
      weight,
      bloodPressure,
      patientId,
      doctorId,
    } = req.body;
    const checkUpData = {
      patientName: name,
      department,
      doctorName,
      weight,
      bloodPressure,
      patientId,
      doctorId,
    };
    const alreadyInCheckUp = await checkUpModel.findOne({ patientName: name });
    if (alreadyInCheckUp) {
      return res.status(200).send({
        message: "Patient already in checkUp",
        success: false,
      });
    }

    const newCheckUp = new checkUpModel(checkUpData);
    if (!newCheckUp) {
      return res.status(404).send({
        message: "Error Adding the Patient for checkup",
        success: false,
      });
    }
    await newCheckUp.save();
    return res.status(200).send({
      message: "Added Patient for the checkUp",
      success: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `addforCheckUpController ${error.message}`,
    });
  }
};
const updatePatient = async (req, res) => {
  try {
    const { name, email, mobileNumber, age, bloodGroup, address, zip } =
      req.body;
    const patientData = {
      name,
      email,
      mobileNumber,
      age,
      bloodGroup,
      address,
      zip,
    };
    const patient = await patientModel.findOneAndUpdate(
      { mobileNumber: mobileNumber },
      patientData
    );
    if (!patient) {
      return res.status(200).send({
        message: "Patient not found",
        success: false,
      });
    }
    return res.status(200).send({
      success: true,
      message: "Patient Updated",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "auth error",
      success: false,
      error,
    });
  }
};
const getAllDataOfPatient = async (req, res) => {
  try {
    const { searchMobileNumber } = req.body;
    const patient = await patientModel
      .findOne({ mobileNumber: searchMobileNumber })
      .select("-_id -__v")
      .populate([
        {
          path: "visits",
          options: { limit: 2 }, // Limit the number of populated "visits" documents to 2
        },
        {
          path: "bills",
          options: { limit: 2 }, // Limit the number of populated "bills" documents to 2
        },
        {
          path: "reports",
          options: { limit: 2 }, // Limit the number of populated "bills" documents to 2
        },
      ]);
    if (!patient) {
      return res.status(200).send({
        message: "Patient not found",
        success: false,
      });
    }
    // const visits = await visitModel.find({ patientId: patient.uniqueId });
    return res.status(200).send({
      success: true,
      data: patient,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Internal Server Error",
      success: false,
      error,
    });
  }
};
// For Billing Purpose
const patientForCheckUp = async (req, res) => {
  try {
    const patients = await checkUpModel
      .find({ isChecked: true })
      .select("patientName department doctorName patientId doctorId -_id");
    if (!patients) {
      return res.status(200).send({
        message: "Patient not found",
        success: false,
      });
    }
    return res.status(200).send({
      success: true,
      message: "Patients for CheckUp Fetched",
      data: patients,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Internal Server Error",
      success: false,
      error,
    });
  }
};
const addBill = async (req, res) => {
  try {
    const {
      patientId,
      patientName,
      doctorName,
      doctorId,
      service,
      fee,
      department,
      paymentMode,
    } = req.body;
    const billData = {
      patientId,
      patientName,
      doctorName,
      doctorId,
      service,
      department,
      fee,
      paymentMode,
    };
    const newBill = new billModel(billData);
    if (!newBill) {
      return res.status(404).send({
        message: "Error Adding the Patient for checkup",
        success: false,
      });
    }
    const patient = await patientModel.findOne({ uniqueId: patientId });
    if (!patient) {
      return res.status(404).send({
        message: "Error Adding the Patient for checkup",
        success: false,
      });
    }
    patient.bills.push(newBill._id);
    await patient.save();
    const removePatient = await checkUpModel.findOneAndDelete({
      patientId,
    });
    if (!removePatient) {
      return res.status(404).send({
        message: "Error Adding the Patient for checkup",
        success: false,
      });
    }
    await newBill.save();
    return res.status(200).send({
      message: "Added Patient for the checkUp",
      success: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `addforCheckUpController ${error.message}`,
    });
  }
};
const addLapReport = async (req, res) => {
  try {
    const {
      patientId,
      patientName,
      requestedBy,
      reportName,
      reportFile,
      fee,
      paymentMode,
    } = req.body;
    const reportData = {
      patientId,
      patientName,
      requestedBy,
      reportName,
      reportFile,
      fee,
      paymentMode,
    };
    const newReport = new reportModel(reportData);
    if (!newReport) {
      return res.status(404).send({
        message: "Error Adding the Patient for checkup",
        success: false,
      });
    }
    const patient = await patientModel.findOne({ uniqueId: patientId });
    if (!patient) {
      return res.status(404).send({
        message: "Error Adding the Patient for checkup",
        success: false,
      });
    }
    patient.reports.push(newReport._id);
    await patient.save();
    await newReport.save();
    return res.status(200).send({
      message: "Added Patient for the checkUp",
      success: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `addforCheckUpController ${error.message}`,
    });
  }
};
const getAllDoctor = async (req, res) => {
  try {
    const doctors = await doctorModel.find({}).select("name -_id uniqueId");
    if (!doctors) {
      return res.status(200).send({
        message: "Doctor not found",
        success: false,
      });
    }
    return res.status(200).send({
      success: true,
      message: "Doctors Fetched",
      data: doctors,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Internal Server Error",
      success: false,
      error,
    });
  }
};
const getrecent4Patient = async (req, res) => {
  try {
    const patients = await checkUpModel
      .find({})
      .select("patientName department doctorName -_id isChecked")
      .limit(4);
    if (!patients) {
      return res.status(200).send({
        message: "Patient not found",
        success: false,
      });
    }
    return res.status(200).send({
      success: true,
      message: "Patients for CheckUp Fetched",
      data: patients,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Internal Server Error",
      success: false,
      error,
    });
  }
};
const getNumberOfPatientVisitedToday = async (req, res) => {
  try {
    const today = new Date();

    // Set the start and end of the day
    today.setHours(0, 0, 0, 0);
    const endOfDay = new Date(today);
    endOfDay.setHours(23, 59, 59, 999);

    const query = {
      date: {
        $gte: today,
        $lte: endOfDay,
      },
    };

    // Use Mongoose to find checkup records for today
    const checkups = await checkUpModel.find(query).count();

    return res.status(200).send({
      success: true,
      data: checkups,
      message: "Number of Patients for CheckUp Today Fetched",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Internal Server Error",
      success: false,
      error,
    });
  }
};

module.exports = {
  createPatient,
  addForCheckUp,
  getPatientData,
  updatePatient,
  getDepartmentOfDoctor,
  patientForCheckUp,
  getAllDataOfPatient,
  getrecent4Patient,
  getNumberOfPatientVisitedToday,
  addBill,
  getAllDoctor,
  addLapReport,
};
