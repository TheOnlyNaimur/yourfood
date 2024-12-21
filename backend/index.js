const express = require("express");
const app = express();
const port = 5000;
const mongoDB = require("./db");
mongoDB();

// Middleware to handle cross-origin requests
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000"); // Update to match your frontend domain
  // res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE"); // Specify allowed HTTP methods (optional)
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  ); // Specify allowed headers
  next();
});

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", require("./Routes/Createuser"));
app.use("/api", require("./Routes/Loginuser"));
app.use("/api", require("./Routes/DisplayData"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// -----------------------------------------------------------------------------------------------------------

// const express = require("express");
// const cors = require("cors");
// const mongoDB = require("./db");

// const app = express();
// const port = 5000;

// mongoDB();

// app.use(cors({ origin: "http://localhost:3000" }));
// app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.use("/api", require("./Routes/Createuser"));

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });
