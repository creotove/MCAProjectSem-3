const checkUpModel = require("../models/checkUpmodel");
const patientModel = require("../models/patientModel");
const visitModel = require("../models/visitModel");

const getPatientToBeChecked = async (req, res) => {
  try {
    const { doctorId } = req.body;
    const patientsToBeChecked = await checkUpModel.find({
      isChecked: false,
      doctorId,
    });
    if (!patientsToBeChecked) {
      return res.status(200).send({
        success: false,
        message: "No Patient are to be Checked",
      });
    }
    return res.status(200).send({
      success: true,
      data: patientsToBeChecked,
      message: "Patients to be Checked",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `Error in patientToBeCheckedController ${error.message}`,
    });
  }
};
const addPatientVisit = async (req, res) => {
  try {
    const {
      patientId,
      doctorName,
      prescription,
      report,
      weight,
      bloodPressure,
      visitSummary,
    } = req.body;
    const patient = await checkUpModel.findOneAndUpdate(
      { patientId, doctorName },
      { isChecked: true }
    );
    if (!patient) {
      return res.status(404).send({
        success: false,
        message: "Patient not found",
      });
    }
    const visitData = {
      checkedBy: doctorName,
      patientId: patient.patientId,
      patientName: patient.patientName,
      isChecked: true,
      department: patient.department,
      prescription,
      report,
      weight,
      bloodPressure,
      visitSummary,
    };
    const newVisit = await visitModel.create(visitData);
    if (!newVisit) {
      return res.status(404).send({
        success: false,
        message: "Error occured",
      });
    }
    const patientVisit = await patientModel.findOne({ uniqueId: patientId });
    if (!patientVisit) {
      return res.status(404).send({
        success: false,
        message: "Patient not found",
      });
    }
    patientVisit.visits.push(newVisit._id);

    await patientVisit.save();
    await patientVisit.save();
    await newVisit.save();
    await patient.save();
    return res.status(200).send({
      success: true,
      message: "Patient Checked",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `Error in checkedPatientController ${error.message}`,
    });
  }
};
const checkedPatient = async (req, res) => {
  try {
    const { doctorName } = req.body;
    const patientsChecked = await checkUpModel.find({
      doctorName,
      isChecked: true,
    });
    if (!patientsChecked) {
      return res.status(200).send({
        success: false,
        message: "No Patient are Checked",
      });
    }
    return res.status(200).send({
      success: true,
      data: patientsChecked,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `Error in checkedPatientController ${error.message}`,
    });
  }
};
const checkPatientHistoryOfVisit = async (req, res) => {
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
      message: `Error in checkPatientHistoryOfVisitController ${error.message}`,
    });
  }
};
module.exports = {
  getPatientToBeChecked,
  addPatientVisit,
  checkedPatient,
  checkPatientHistoryOfVisit,
};
