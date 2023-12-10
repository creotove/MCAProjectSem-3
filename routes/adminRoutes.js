const express = require("express");
const {
  addNewReceptionist,
  addNewDoctor,
  getAllDoctors,
  getAllPatients,
  getAllReceptionists,
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
  removeReceptionist,
  removeDoctor,
  getTodayVisits,
  getTodayIncomeInCash,
  getTodayIncomeInUpi,
} = require("../controllers/adminCtrl");
const router = express.Router();

//Add Admin
router.post("/createAdmin", createAdmin);

// Add new Receptionist OR Doctor
router.post("/addNewReceptionist", addNewReceptionist);
router.post("/addNewDocotor", addNewDoctor);

// Fetching All
router.get("/getAllDoctors", getAllDoctors);
router.get("/getAllPatients", getAllPatients);
router.get("/getAllReceptionists", getAllReceptionists);

// Fetching Single with their email
router.get("/getDoctor", getDoctor);
router.get("/getPatient", getPatient);
router.get("/getReceptionist", getReceptionist);

// Fetching Single with their email
router.patch("/updateDoctor", updateDoctor);
router.patch("/updatePatient", updatePatient);
router.patch("/updateReceptionist", updateReceptionist);

//Request Related to Income of Hospital
router.get("/getTodaysIncome", getTodaysIncome);
router.get("/getDetailedTodaysIncome", getDetailedTodaysIncome);
router.get("/patients/recent", getRecentPatients);

//Fetching Patient Visited Filter By Date
router.get("/patientVisitedFilterByDate", patientVisitedFilterByDate);

router.post("/find-staff", findStaff);
router.post("/getProfile", getProfile);
router.get("/getTodayVisits",getTodayVisits);
router.get("/getTodayIncomeInCash",getTodayIncomeInCash);
router.get("/getTodayIncomeInUpi",getTodayIncomeInUpi);

//Removing staff members
router.delete("/removeDoctor", removeDoctor);
router.delete("/removeReceptionist", removeReceptionist);

module.exports = router;
