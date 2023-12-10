const express = require("express");
const {
    getPatientToBeChecked,
  addPatientVisit,
  checkedPatient,
  checkPatientHistoryOfVisit,
} = require("../controllers/doctorCtrl");

const router = express.Router();
// Fetching the patient are to be checked
router.post("/getPatientToBeChecked", getPatientToBeChecked);

// Submitting Patient Record after Checkup
router.post("/addPatientVisit", addPatientVisit);

// Update the Patient that got Checked
router.get("/checkedPatients", checkedPatient);

// Fetching the patient checked history
router.post("/checkPatientHistoryOfVisit", checkPatientHistoryOfVisit);




module.exports = router;
