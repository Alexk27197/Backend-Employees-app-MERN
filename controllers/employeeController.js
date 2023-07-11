const Employee = require("../models/EmployeeModel");

async function findAllEmployees(req, res) {
  try {
    const employees = await Employee.find({});
    res.status(200).json({
      employees,
      success: true,
      msg: "Get all employee successfuly",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Employees not found" });
  }
}

async function findEmployeeById(req, res) {
  const id = req.params.id;

  try {
    const employee = await Employee.findById(id);
    if (!employee)
      return res.json({ message: `Employee with the id: ${id} not found` });

    res.status(200).json({
      employee,
      success: true,
      msg: "Get single employee successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Employee not found" });
  }
}

async function createEmployee(req, res) {
  const newEmployee = req.body;

  try {
    const savedNewEmployee = new Employee(newEmployee);
    savedNewEmployee.save();
    res.status(201).json({
      savedNewEmployee,
      success: true,
      msg: "Created employee successfuly",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Couldn't create an employee" });
  }
}

async function editEmployee(req, res) {
  const id = req.params.id;
  const newEmployeeData = req.body;

  try {
    const editedEmployee = await Employee.findByIdAndUpdate(
      id,
      newEmployeeData,
      { new: true }
    );
    res.status(201).json({
      editedEmployee,
      success: true,
      msg: "Update employee successfuly",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Couldn't update an employee" });
  }
}

async function deleteEmployee(req, res) {
  const id = req.params.id;

  try {
    await Employee.findByIdAndDelete(id);

    res.status(201).json({
      success: true,
      msg: "Delete employee successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Couldn't delete an employee" });
  }
}

module.exports = {
  findAllEmployees,
  findEmployeeById,
  createEmployee,
  editEmployee,
  deleteEmployee,
};
