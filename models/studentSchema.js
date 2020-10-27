const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let studentSchema = new Schema({
  name: {
    type: String,
    required: true
  }
});

const Student = mongoose.model('Student', studentSchema)
module.exports = Student;
