const mongoose = require("mongoose");

const EmployeeSchema = mongoose.Schema({
  company: String,
  last_name: String,
  first_name: String,
  job_title: String,
  address: String,
  city: String,
  salary: Number,
  img_link: String,
});

module.exports = mongoose.model("employee", EmployeeSchema);
