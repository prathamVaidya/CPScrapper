const express = require("express");
const app = express();
const port = 3000;

const apiRoutes = require("./routes/api.js");
app.use(express.json());
app.use(auth); // Middleware for Authentication

app.get("/", (req, res) => {
  res.send("Index Page");
});

app.use("/api", apiRoutes);

app.listen(port, () => {
  // Sync All the Models
  console.log("Listening on Port 3000...");
});

function auth(req, res, next) {
  console.log("Authenticate!");
  next();
}
