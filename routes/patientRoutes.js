const express = require("express");

const {
  getPatientData,
  patientVisitHistory,
  patientBillsHistory,
  patientLabReportsHistory,
  patientLastTwoVisits,
  getPatientWeightAndBloodPressure,
} = require("../controllers/patientCtrl");

//router onject
const router = express.Router();

// GET || Fetching the logged in patient data
router.post("/getPatient",  getPatientData);

// GET || Fetching the logged in patient visit history
router.post("/patientVisitHistory", patientVisitHistory);

// GET || Fetching the logged in patient bills history
router.post("/patientBillsHistory", patientBillsHistory);

// GET || Fetching the logged in patient lab reports history
router.post("/patientLabReportsHistory", patientLabReportsHistory);

// GET || Fetching the logged in patient last two visits
router.post("/patientLastTwoVisits", patientLastTwoVisits);

//GET || Fetching the logged in patient weight and blood pressure
router.post("/patientWeightAndBloodPressure", getPatientWeightAndBloodPressure);


module.exports = router;
