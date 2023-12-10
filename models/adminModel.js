const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  uniqueId: {
    type: String,
    required: true,
    unique: true,
    ref : 'users',
  },
  adminName: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
  },
  adminGender: {
    type: String,
    required: true,
    enum: ['Male', 'Female', 'Other'],
  },
  adminAge: {
    type: Number,
    required: true,
  },
  adminDOB: {
    type: Date,
    required: true,
  },
});

const adminModel = mongoose.model('Admin', adminSchema);

module.exports = adminModel;
