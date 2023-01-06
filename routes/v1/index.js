const express = require("express");
const { globallyRoutes } = require("./globally");

const v1Routes = express.Router();

v1Routes.use("/v1", globallyRoutes);

module.exports = v1Routes;
