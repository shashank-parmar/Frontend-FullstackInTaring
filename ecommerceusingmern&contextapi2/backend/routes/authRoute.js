const express = require("express");
const { registerController,loginController } = require("../controller/authController"); // Destructure the registerController

const router = express.Router();

router.post('/register', registerController);
router.get('/login', loginController);

module.exports = router; // Corrected spelling mistake
