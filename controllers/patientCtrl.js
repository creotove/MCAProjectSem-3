const billModel = require("../models/billModel");
const patientModel = require("../models/patientModel");
const reportModel = require("../models/reportsModel");
const visitModel = require("../models/visitModel");
const checkUpModel = require("../models/checkUpmodel");

const getPatientData = async (req, res) => {
  try {
    const { patientId } = req.body;
    const patient = await patientModel.find({ patientId });
    if (!patient) {
      return res.status(404).send({
        success: false,
        message: "Patient not found",
      });
    }
    return res.status(200).send({
      success: true,
      data: patient,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `Error in getPatientDataController ${error.message}`,
    });
  }
};
const patientVisitHistory = async (req, res) => {
  try {
    const { patientId } = req.body;
    const patientHistory = await visitModel.find({ patientId });
    if (!patientHistory) {
      return res.status(200).send({
        success: false,
        message: "No Patient History",
      });
    }
    return res.status(200).send({
      success: true,
      data: patientHistory,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `Error in checkedPatientController ${error.message}`,
    });
  }
};
const patientBillsHistory = async (req, res) => {
  try {
    const { patientId } = req.body;
    const patientHistory = await billModel.find({ patientId });
    if (!patientHistory) {
      return res.status(200).send({
        success: false,
        message: "No Patient History",
      });
    }
    return res.status(200).send({
      success: true,
      data: patientHistory,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `Error in checkedPatientController ${error.message}`,
    });
  }
};
const patientLabReportsHistory = async (req, res) => {
  try {
    const { patientId } = req.body;
    const patientHistory = await reportModel.find({ patientId });
    if (!patientHistory) {
      return res.status(200).send({
        success: false,
        message: "No Patient History",
      });
    }
    return res.status(200).send({
      success: true,
      data: patientHistory,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `Error in checkedPatientController ${error.message}`,
    });
  }
};
const patientLastTwoVisits = async (req, res) => {
  try {
    const { patientId } = req.body;
    const patientHistory = await visitModel
      .find({ patientId })
      .sort({
        createdAt: -1,
      })
      .limit(2);
    if (patientHistory.length === 0) {
      return res.status(200).send({
        success: false,
        message: "No Patient History",
      });
    }
    return res.status(200).send({
      success: true,
      data: patientHistory,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `Error in checkedPatientController ${error.message}`,
    });
  }
};
const getPatientWeightAndBloodPressure = async (req, res) => {
  try {
    const { uniqueId } = req.body;
    console.log(uniqueId)
    const wAndB = await checkUpModel
      .findOne({ patientId : uniqueId })
      .select("weight bloodPressure -_id")
      .sort({ createdAt: -1 });
    if (!wAndB) {
      return res.status(200).send({
        message: "user not found",
        success: false,
      });
    }
    return res.status(200).send({
      message: "Weight and Blood Pressure Fetched",
      success: true,
      data: wAndB,
    });
  } catch (error) {}
};
module.exports = {
  getPatientData,
  patientVisitHistory,
  patientBillsHistory,
  patientLabReportsHistory,
  patientLastTwoVisits,
  getPatientWeightAndBloodPressure,
};
