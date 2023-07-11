const express = require("express");
const router = express.Router();
const {
  findAllEmployees,
  findEmployeeById,
  createEmployee,
  editEmployee,
  deleteEmployee,
} = require("../controllers/employeeController");

/* GET : Get all employees. */
router.get("/get-employees", findAllEmployees);

/* GET : Get single employee by ID. */
router.get("/get-employee/:id", findEmployeeById);

/* POST : Create one employee. */
router.post("/create-employee", createEmployee);

/* PATCH : Update one employee by id. */
router.put("/update-employee/:id", editEmployee);

/* DELETE : Delete one employee by id. */
router.delete("/delete-employee/:id", deleteEmployee);

module.exports = router;
