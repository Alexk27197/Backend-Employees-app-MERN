const mongoose = require("mongoose");
// Mongo DB Connection
const dbConnect = () => {
  mongoose
    .connect(process.env.DB_CONNECT, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to db"))
    .catch((err) => {
      console.log("Could not connect to the database. Exiting now...", err);
      process.exit();
    });
};

module.exports = { dbConnect };
