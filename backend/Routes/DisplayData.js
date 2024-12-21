const express = require("express");
const router = express.Router();

router.post('foodData', (req, res) => {
  try {
    // console.log(global.foodData);
    res.send(global.foodItems, global.foodCategory);
  } catch (err) {
    console.error("Error fetching data:", err.message);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
});

module.exports = router;