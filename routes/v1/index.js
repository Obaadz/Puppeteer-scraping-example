const express = require("express");
const { studentsRoutes } = require("./students");

const v1Routes = express.Router();

v1Routes.use("/v1", studentsRoutes);

module.exports = v1Routes;
