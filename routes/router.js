const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller");

// Getters
router.get("/", controller.index);
router.get("/about", controller.about);
// router.get("/login", controller.loginForm);

// Setters
// router.post("/login", controller.login);

module.exports = router;