require("dotenv").config();
const express = require("express");

// express app
const app = express();
const PORT = process.env.PORT || 3000;

// middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.get("/", (req, res) => {
  res.json({ msg: "Welcome to the app!" });
});

// listen for requests on port
app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
});
