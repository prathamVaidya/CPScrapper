"use strict";

const express = require("express");
let router = express.Router();

// Models here

// all API routes here

router.get("/", (req, res) => {
  console.log("Get request to API");
  res.send("Get request to API");
});

router.get("/contests", (req, res) => {
  console.log("You will get Contest Data From Here");
  res.send("You will get Contest Data From Here");
});

module.exports = router;
