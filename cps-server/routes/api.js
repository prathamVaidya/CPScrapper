"use strict";

const express = require("express");
let router = express.Router();

// Models here

// all API routes here

router.get("/", (req, res) => {
  console.log("Get request to API");
  res.send("Get request to API");
});

router.get("/contests/upcoming", (req, res) => {
  console.log("Upcming Contests Requested");
  var mongoose = require("mongoose");
  var Contest = require("../models/contest");
  
  mongoose
  .connect("mongodb://cpserveruser:passwordhere@localhost:27017/cpserver")
  .then((result) => {
    console.log("Connected Successfull");
    var todaysDate = new Date("2025-09-20T18:15:31.527Z")

    // error giving results even if date condition not sattisfied
    Contest.find({startDate: {$gt: todaysDate}}, function (err, docs) { 
      if (err){
        console.log("Error Occured: "+err)
    } 
    else{
        console.log(docs)
    }

    });
  })
  .catch((err) => {
    console.log(err);
  });

  res.send("You will get Contest Data From Here");
});

module.exports = router;
