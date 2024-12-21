const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost:27017/YourFood";

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true });
    console.log("Connected to the DB");
    const fetched_data = mongoose.connection.db.collection("foodItems");
    fetched_data.find({}).toArray(async function (err, data) {
      const foodCategory = await mongoose.connection.db.collection(
        "foodCategory"
      );
      foodCategory.find({}).toArray(function (err, catdata) {
        if (err) console.log(err);
        else {
          global.foodItems = data;
          global.foodCategory = catdata;
          // console.log(global.foodData);
        }
      }); // console.log(data);
    }); // console.log("Data from foodData collection:", data);
  } catch (err) {
    console.log("---", err);
  }
};

module.exports = mongoDB;

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
