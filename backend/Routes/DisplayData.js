// import Mongodb from '../db.js';
const express = require('express');
const router = express.Router();

router.post('/foodData', (req, res) => { //This line sets up a POST route for the path /foodData.
    try {
        if (!global.foodItems || !global.foodCategory) {
            return res.status(404).json({ success: false, message: 'Food items or categories not found' });
        }

    

        console.log('Food items:', global.foodItems);
        console.log('Food categories:', global.foodCategory);

        // Send both food items and categories in a single response object
        res.status(200).json({
            success: true,
            foodItems: global.foodItems,
            foodCategory: global.foodCategory
        });
        
    } catch (error) {
        console.error('Error displaying data:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

module.exports = router;