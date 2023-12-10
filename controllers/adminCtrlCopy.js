const doctorModel = require('../models/doctorModel');
const receptionistModel = require("../models/receptionistModel");
const patientModel = require("../models/patientModel");
const userModel = require("../models/userModels");
const bcrypt = require("bcryptjs");



const addNewReceptionist = async (req, res) => {
    try {
        // const exisitingReceptionist = await receptionistModel.findOne({ email: req.body.email });
        // if (exisitingReceptionist) {
        //     return res
        //         .status(200)
        //         .send({ message: "Receptionist Already Exist", success: false });
        // }

        //hashing the password
        const pass = req.body.password;
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(pass, salt);
        req.body.password = hashedPassword;

        // destructuring the req.body for creating the user
        const { firstName, lastName, email, password } = req.body
        const newReceptionist = new receptionistModel(req.body);
        const newUser = new userModel({ firstName, lastName, email, password, isReceptionist: true });
        await newReceptionist.save();
        await newUser.save();
        res.status(201).send({ message: "New Receptionist Added Sucessfully", success: true });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: `Error in Admin controller in addNewReceptionist ${error.message}`,
        });
    }
}

const addNewDoctor = async (req, res) => {
    try {
        // const exisitingDoctor = await receptionistModel.findOne({ email: req.body.email });
        // if (exisitingDoctor) {
        //     return res
        //         .status(200)
        //         .send({ message: "Doctor Already Exist", success: false });
        // }

        //hashing the password
        const pass = req.body.password;
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(pass, salt);
        req.body.password = hashedPassword;

        // destructuring the req.body for creating the user
        const { firstName, lastName, email, password } = req.body
        const newDoctor = new doctorModel(req.body);
        const newUser = new userModel({ firstName, lastName, email, password, isDoctor: true });
        await newDoctor.save();
        await newUser.save();
        res.status(201).send({ message: "New Doctor Added Sucessfully", success: true });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: `Error in Admin controller in addNewDoctor ${error.message}`,
        });
    }
}

const getAllPatients = async (req, res) => {
    await getAllUsers(req, res, 'patient', 'Patients');
    // try {

    //     const patients = await patientModel.find({})
    //     res.status(200).send({
    //         success: true,
    //         date: patients,
    //         message: "All patient Fetched Successfully",

    //     })
    // }
    // catch (error) {
    //     console.log(error);
    //     res.status(500).send({
    //         success: false,
    //         message: `Error in Admin controller in getAllPatients ${error.message}`,
    //     });
    // }
}

const getAllReceptionists = async (req, res) => {
    await getAllUsers(req, res, 'receptionist', 'Receptionists');
    
    // try {

    //     const receptionist = await receptionistModel.find({})
    //     res.status(200).send({
    //         success: true,
    //         data: receptionist,
    //         message: "All Receptionist Fetched Successfully",

    //     })
    // }
    // catch (error) {
    //     console.log(error);
    //     res.status(500).send({
    //         success: false,
    //         message: `Error in Admin controller in getAllReceptionist ${error.message}`,
    //     });
    // }
}

const getAllDoctors = async (req, res) => {
    await getAllUsers(req, res, 'doctor', 'Doctors');
    // try {

    //     const doctor = await doctorModel.find({})
    //     res.status(200).send({
    //         success: true,
    //         data: doctor,
    //         message: "All Receptionist Fetched Successfully",

    //     })
    // }
    // catch (error) {
    //     console.log(error);
    //     res.status(500).send({
    //         success: false,
    //         message: `Error in Admin controller in getAllDoctor ${error.message}`,
    //     });
    // }
}
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
}




const getDoctor = async (req, res) => {
    await getUserProfile(req, res, 'doctor');
    // try {
    //     const doctor = await doctorModel.find({ email: req.body.email })
    //     if (!doctor) {
    //         return res.status(200).send(
    //             {
    //                 success: false,
    //                 message: `Something Wend Wrong`
    //             }
    //         )
    //     }
    //     res.status(200).send(
    //         {
    //             success: true,
    //             data: doctor
    //         }
    //     )

    // } catch (error) {
    //     console.log(error);
    //     res.status(500).send(
    //         {
    //             success: false,
    //             message: `Error in Admin Controller in getDoctor ${error}`
    //         }
    //     )

    // }
}

const getPatient = async (req, res) => {
    await getUserProfile(req, res, 'patient');
    // try {
        
    //     const patient = await patientModel.find({ email: req.body.email })
    //     if (!patient) {
    //         return res.status(200).send(
    //             {
    //                 success: false,
    //                 message: `Something Wend Wrong`
    //             }
    //         )
    //     }
    //     res.status(200).send(
    //         {
    //             success: true,
    //             data: patient
    //         }
    //     )

    // } catch (error) {
    //     console.log(error);
    //     res.status(500).send(
    //         {
    //             success: false,
    //             message: `Error in Admin Controller in getPatient ${error}`
    //         }
    //     )

    // }
}

const getReceptionist = async (req, res) => {
    await getUserProfile(req, res, 'receptionist');
    // try {
    //     const receptionist = await receptionistModel.find({ email: req.body.email })
    //     if (!receptionist) {
    //         return res.status(200).send(
    //             {
    //                 success: false,
    //                 message: `Something Wend Wrong`
    //             }
    //         )
    //     }
    //     res.status(200).send(
    //         {
    //             success: true,
    //             data: receptionist
    //         }
    //     )

    // } catch (error) {
    //     console.log(error);
    //     res.status(500).send(
    //         {
    //             success: false,
    //             message: `Error in Admin Controller in getReceptionist ${error}`
    //         }
    //     )

    // }
}

const getUserProfile = async (req, res, modelName) => {

    try {
        const { email } = req.body; // Get the email from the body
        const Model = require(`../models/${modelName}Model`); // Adjust the path as needed
        const user = await Model.find({ email });

        if (!user || user.length === 0) {
            return res.status(200).send({
                success: false,
                message: `User Does Not Exists`
            });
        }

        res.status(200).send({
            success: true,
            data: user
        });

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: `Error in Admin Controller in get${modelName}: ${error}`
        });
    }
}




const updateProfile = async (req, res, modelName) => {
    try {
        const { email } = req.body; // Get the email from the body
        const updatedData = req.body;
        const Model = require(`../models/${modelName}Model`); // Adjust the path as needed
        const updatedUser = await Model.findOneAndUpdate({ email }, updatedData, { new: true });

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
}

const updateDoctor = async (req, res) => {
    await updateProfile(req, res, 'doctor');
    // try {
    //     const { email } = req.body; // Get the mobile number from the body
    //     const updatedDoctorData = req.body;
    //     const updatedDoctor = await doctorModel.findOneAndUpdate({ email }, updatedDoctorData,
    //         { new: true }
    //     );
    //     if (!updatedDoctor) {
    //         return res.status(404).send({
    //             message: "Error in Updating Doctor Profile",
    //             success: false,
    //         });
    //     }
    //     return res.status(200).send({
    //         message: "Updated Doctor Profile",
    //         success: true,
    //     });
    // } catch (error) {
    //     console.log(error);
    //     res.status(500).send({
    //         success: false,
    //         message: `addforCheckUpController ${error.message}`,
    //     });
    // }
}

const updatePatient = async (req, res) => {
    await updateProfile(req, res, 'patient');
    // try {
    //     const { email } = req.body; // Get the mobile number from the body
    //     const updatedPatientData = req.body;
    //     const updatedPatient = await patientModel.findOneAndUpdate({ email }, updatedPatientData,
    //         { new: true }
    //     );
    //     if (!updatedPatient) {
    //         return res.status(404).send({
    //             message: "Error in Updating Patient Profile",
    //             success: false,
    //         });
    //     }
    //     return res.status(200).send({
    //         message: "Updated Patient Profile",
    //         success: true,
    //     });
    // } catch (error) {
    //     console.log(error);
    //     res.status(500).send({
    //         success: false,
    //         message: `addforCheckUpController ${error.message}`,
    //     });
    // }
}

const updateReceptionist = async (req, res) => {
    await updateProfile(req, res, 'receptionist');
    // try {
    //     const { email } = req.body; // Get the mobile number from the body

    //     const updatedReceptionistData = req.body;

    //     const updatedReceptionist = await receptionistModel.findOneAndUpdate({ email }, updatedReceptionistData, { new: true })
    //     if (!updatedReceptionist) {
    //         return res.status(404).send({
    //             message: "Error in Updating Receptionist Profile",
    //             success: false,
    //         });
    //     }
    //     return res.status(200).send({
    //         message: "Updated Patient Profile",
    //         success: true,
    //     });

    // } catch (error) {
    //     console.log(error);
    //     res.status(500).send({
    //         success: false,
    //         message: `Error in Admin Controller in updateReceptionist ${error}`
    //     })

    // }
}
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
};

