const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let studentSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  rollno: {
    type: Number,
    required: true
  }
});

const Student = mongoose.model('Student', studentSchema)
module.exports = Student;
