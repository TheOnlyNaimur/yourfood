const express = require("express");
const app = express();
const port = 5000;
const mongoDB = require("./db");
const cors = require("cors");
mongoDB();

app.use((req, res, next) => {
  // add headers to allow cross origin requests
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  ); // add headers
  next(); // make sure we go to the next routes
});

// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
//   next();
// });

app.use(cors({ origin: "http://localhost:3000" })); 
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", require("./Routes/Createuser"));





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
