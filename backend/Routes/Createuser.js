const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");

const bcrypt = require("bcryptjs");

router.post(
  "/createuser", // Create a new user
  [
    body("email").isEmail(),
    body("name", "Name is required").notEmpty(),
    body("password", "Password must be at least 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    const salt = await bcrypt.genSalt(10);
    let secpassword = await bcrypt.hash(req.body.password, salt);

    try {
      await User.create({
        name: req.body.name,
        password: secpassword,
        email: req.body.email, 
      });
      res.json({ success: true, message: "User created successfully" });
    } catch (err) {
      console.error("Error creating user:", err.message);
      res.status(500).json({ success: false, error: "Internal Server Error" });
    }
  
  }  

);

module.exports = router;
