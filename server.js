const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const env = require("dotenv");
const connectDB = require("./src/db/db.js");

env.config();
connectDB();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("Express Check"));

//defining routes

// //admin routes
app.use("/admin/newUser", require("./src/routes/adminuser/newUser")); //register new user role=admin


// //user routes
app.use("/newUser", require("./src/routes/clientuser/newUser")); //register new user role=user

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
