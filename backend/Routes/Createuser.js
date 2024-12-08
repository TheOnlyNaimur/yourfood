// const express = require("express");
// const router = express.Router(); // Import the express router
// const User = require("../models/User"); // Import the User model
// const { body, validationResult } = require("express-validator");

// router.post(
//   "/createuser",
//   [
//     body("email").isEmail(), // Validate the email
//     body("name", "Name is required").notEmpty(),


//     // password must be at least 5 chars long
//     body("password", "Incorrect Password").isLength({ min: 5 }), // Validate the password
//   ],
//   async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }

//     try {
//       await User.create({
//         // username: "John Doe",

//         // password: "password",
//         // email: "johndoe11@gmail.com",
//         // date: new Date(),

//         name: req.body.name,

//         password: req.body.password,
//         email: req.body.email,
//       });
//       res.json({ message: "User created successfully" });
//     } catch (err) {
//       console.error("Error creating user:", err.message);
//     }
//   }
// );

// exports = module.exports = router; // Export the router


const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");

router.post(
  "./createuser",
  [
    body("email").isEmail(),
    body("name", "Name is required").notEmpty(),
    body("password", "Password must be at least 5 characters").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    try {
      await User.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email
      });
      res.json({ success: true, message: "User created successfully" });
    } catch (err) {
      console.error("Error creating user:", err.message);
      res.status(500).json({ success: false, error: "Internal Server Error" });
    }
  }
);

module.exports = router;
