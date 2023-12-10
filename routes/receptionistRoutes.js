const express = require("express");
const {
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
} = require("../controllers/receptionistCtrl");

//router onject
const router = express.Router();

// Auth || POST
router.post("/getPatientData", getPatientData);

//Add New Pateient || POST
router.post("/addNewPatient", createPatient);

//Add Existings patient for checkup || POST
router.post("/addforCheckUp", addForCheckUp);

//Update Patient || PATCH
router.patch("/updatePatient", updatePatient);

//Department dector
router.post("/getDepartmentOfDoctor", getDepartmentOfDoctor);

//GET || Patient for checkup for billing purpose
router.get("/patientForCheckUp", patientForCheckUp)

//POST || Add bill
router.post("/addBill", addBill);

//POST || Add Report
router.post("/addLabReport", addLapReport);

//Get || All Patient Data
router.post("/getAllPatientData", getAllDataOfPatient);

//Get || All doctor names for reports
router.get("/getDocNames", getAllDoctor);

//Get || Recent 4 Patient
router.get("/getrecent4Patient", getrecent4Patient);

//Get || Number of patient visited today
router.get("/getNumberOfPatientVisitedToday", getNumberOfPatientVisitedToday);

router.get;

module.exports = router;
