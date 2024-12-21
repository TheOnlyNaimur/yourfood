const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");

router.post(
  "/loginuser",
  [
    body("email").isEmail(),
    body("password", "Password must be at least 5 characters").isLength({
      min: 5,
    }),
  ],

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }
    let email = req.body.email;

    try {
      let userData = await User.findOne({ email });
      if (!userData) {
        return res
          .status(400)
          .json({ success: false, error: "User not found" });
      }

      if (userData.password === req.body.password) {
        return res.json({
          success: true,
          message: "User logged in successfully",
        });
      } else {
        return res
          .status(400)
          .json({ success: false, error: "Incorrect Email or Password" });
      }
    } catch (err) {
      console.error("Error creating user:", err.message);
      res.status(500).json({ success: false, error: "Internal Server Error" });
    }
  }
);

module.exports = router; // Export the router
