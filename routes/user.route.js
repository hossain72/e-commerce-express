const express = require("express");
const route = express.Router();

const userController = require("../controllers/user.contoller");

route.post("/", userController.signUp);

module.exports = route;