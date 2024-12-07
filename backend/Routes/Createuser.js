const express = require("express");
const router = express.Router();  // Import the express router
const User = require("../models/User"); // Import the User model


router.post("/createuser", async (req, res) => {
  try {
    await User.create({

      // username: "John Doe",
      
      // password: "password",
      // email: "johndoe11@gmail.com",  
      // date: new Date(),
      username: req.body.username,
      
      password: req.body.password,
      email: req.body.email, 
  })
res.json({message: "User created successfully"}); 

  }
  catch (err) {
    console.error("Error creating user:", err.message);
  }
});

exports = module.exports = router; // Export the router