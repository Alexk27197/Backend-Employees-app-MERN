const express = require("express");
const { dbConnect } = require("./dbConnect");
const employeesRouter = require("./routes/employeeRoutes");
const cors = require("cors");
const app = express();

dbConnect();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use("/api/employees", employeesRouter);
const PORT = 4010;

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
