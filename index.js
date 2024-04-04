const express = require("express");
const app = express();
const cors = require("cors");
const ConnectDB = require("./connectDB");
const router = require("./routes/EmployeeRoutes");
require("dotenv").config();
const PORT = 8000;
const DB_Path =process.env.DB_PATH;

//connecting database
ConnectDB(DB_Path).then(
  console.log(`Successfully Connected to MongoDB Server`),
);

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routers
app.use("/", router);

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
module.exports = app;
