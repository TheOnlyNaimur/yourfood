const mongoose = require('mongoose');

const Mongourl = "mongodb://localhost:27017/YourFood";

async function mongoDb() {
    try {
        await mongoose.connect(Mongourl);
        console.log('DB connected');

        // Load food items
        const foodItemsCollection = mongoose.connection.db.collection('foodItems');
        const foodItems = await foodItemsCollection.find({}).toArray();

        // Load food categories
        const foodCategoryCollection = mongoose.connection.db.collection('foodCategory');
        const foodCategory = await foodCategoryCollection.find({}).toArray();

//   console.log(foodItems);
//     console.log(foodCategory);
        // Assign to global variables
        global.foodItems = foodItems;
        global.foodCategory = foodCategory;


        console.log('Data loaded into global variables');
        // console.log('Food items:', global.foodItems);
        // console.log('Food categories:', global.foodCategory);

    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
    }
}

module.exports = mongoDb;























// ---------------------------------------------------------------------------
// const mongoose = require("mongoose");
// const mongoURI = "mongodb://localhost:27017/YourFood";

// const mongoDB = async () => {
//   await mongoose.connect(
//     mongoURI,
//     { useNewUrlParser: true, useUnifiedTopology: true },
//     async (err) => {
//       if (err) {
//         console.error("Error connecting to MongoDB:", err);
//       } else {
//         console.log("Connected to the DB");

//         try {
//           const fetched_data = mongoose.connection.db.collection("foodItems");
//           const foodItems = await fetched_data.find({}).toArray();

//           const foodCategoryCollection = mongoose.connection.db.collection("foodCategory");
//           const foodCategory = await foodCategoryCollection.find({}).toArray();

//           global.foodItems = foodItems;
//           global.foodCategory = foodCategory;

//           console.log("Data fetched and stored globally.");
//         } catch (error) {
//           console.error("Error fetching data from MongoDB:", error);
//         }
//       }
//     }
//   );
// };

// module.exports = mongoDB;




//

//     console.log("Connected to the DB");
//     const fetched_data = mongoose.connection.db.collection("foodItems");
//     fetched_data.find({}).toArray(async function (err, data) {
//       // const foodCategory = await mongoose.connection.db.collection(
//       //   "foodCategory"
//       // );
//       foodCategory.find({}).toArray(function (err, catdata) {
//         if (err) console.log(err);
//         else {
//           global.foodItems = data;
//           global.foodCategory = catdata;
//           // console.log(global.foodData);
//         }
//       }); // console.log(data);
//     }); // console.log("Data from foodData collection:", data);
//   }
// }}

//     });
//     console.log("Connected to the DB");
//     const fetched_data = mongoose.connection.db.collection("foodItems");
//     fetched_data.find({}).toArray(async function (err, data) {
//       const foodCategory = await mongoose.connection.db.collection(
//         "foodCategory"
//       );
//       foodCategory.find({}).toArray(function (err, catdata) {
//         if (err) console.log(err);
//         else {
//           global.foodItems = data;
//           global.foodCategory = catdata;
//           // console.log(global.foodData);
//         }
//       }); // console.log(data);
//     }); // console.log("Data from foodData collection:", data);
//   } catch (err) {
//     console.log("---", err);
//   }
// };

// module.exports = mongoDB;

// const mongoose = require("mongoose");
// const mongoURI = "mongodb://localhost:27017/YourFood"; // Updated database name

// const mongoDB = async () => {
//   try {
//     // Connect to MongoDB
//     await mongoose.connect(mongoURI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("Connected to the DB");

//     // Fetch the collection
//     const fetched_data = mongoose.connection.db.collection("foodData");

//     // Query the collection and display results
//     const data = await fetched_data.find({}).toArray();

//     if (data.length === 0) {
//       console.log("The foodData collection is empty.");
//     } else {
//       // console.log("Data from foodData collection:", data);
//     }
//     // console.log("Data from foodData collection:", data);
//   } catch (err) {
//     console.error("Error connecting to the database or fetching data:", err.message);
//   }
// };

// module.exports = mongoDB;
