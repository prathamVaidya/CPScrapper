"use strict";

const express = require("express");
let router = express.Router();

// Models here

// all API routes here

router.get("/", (req, res) => {
  console.log("Get request to API");
  res.send("Get request to API");
});

router.get("/refresh", (req, res) => {
  console.log("Reloading the data from the website using webscrapers.");

  var cpscraper = require("../cpscraper");
  cpscraper.run();
  res.send(
    "Contest Data Refresh Queued! (It normally takes 2-3 mins to complete )"
  );
});

router.get("/contests/upcoming", (req, res) => {
  console.log("Upcoming Contests Requested");
  var mongoose = require("mongoose");
  var Contest = require("../models/contest");
  const config = require("../config/config");

  mongoose
    .connect(config.MONGODB_CONN_STRING)
    .then((result) => {
      console.log("Connected Successfull");
      var todaysDate = new Date("2025-09-20T18:15:31.527Z");

      // error giving results even if date condition not sattisfied
      Contest.find({ startDate: { $gt: todaysDate } }, function (err, docs) {
        if (err) {
          console.log("Error Occured: " + err);
        } else {
          console.log(docs);
          res.send({ status: 200, data: docs });
        }
      });
    })
    .catch((err) => {
      console.log(err);
      res.send({ status: 500, data: err });
    });
});

module.exports = router;
