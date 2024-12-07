// const mongoose = require("mongoose");
// const mongoURI = "mongodb://localhost:27017/YourFood";

// const mongoDB = async () => {
//   await mongoose.connect(mongoURI);
//   console.log("Connected to the DB");
//   const fetched_data = await mongoose.connection.db.collection("foodData");
//   fetched_data.find({}).toArray((err, data) => {
//     if (err) console.log(err);
//     else console.log(data);
//   });
// };

// module.exports = mongoDB;

const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost:27017/YourFood"; // Updated database name

const mongoDB = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to the DB");

    // Fetch the collection
    const fetched_data = mongoose.connection.db.collection("foodData");

    // Query the collection and display results
    const data = await fetched_data.find({}).toArray();
    // console.log("Data from foodData collection:", data);
  } catch (err) {
    console.error("Error connecting to the database or fetching data:", err.message);
  }
};

module.exports = mongoDB;
