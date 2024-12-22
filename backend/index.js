const express = require('express');
const mongoDb = require('./db'); // Ensure this is correct
const app = express();
const port = 5000;

// Connect to MongoDB
mongoDb();


// CORS Middleware
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});


app.use(express.json());


app.use('/api', require('./Routes/Createuser'));
app.use('/api', require('./Routes/Loginuser'));
app.use('/api', require('./Routes/DisplayData'));


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
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
