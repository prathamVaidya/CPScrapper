var codechef = require("./webscrapers/codechef");
var codeforces = require("./webscrapers/codeforces");
var atcoder = require("./webscrapers/atcoder");
var topcoder = require("./webscrapers/topcoder");

var mongoose = require("mongoose");
var Contest = require("./models/contest");
mongoose
  .connect("mongodb://cpserveruser:passwordhere@localhost:27017/cpserver")
  .then((result) => {
    console.log("Connected to Mongo");

    // to create a new contest
    var contest = new Contest({
      name: "Temp Contest 2",
      startTime: 1631966700,
      endTime: 1631973900,
      actionLink: "https://www.topcoder.com/challenges",
    });

    contest
      .save()
      .then((result) => console.log("Record Created"))
      .catch((error) => console.log("Handle this error here"));
  })
  .catch((err) => {
    console.log(err);
  });

/* Get Upcoming Contests of Codechef */
// codechef.upcomingContests(function (data) {
//   console.log(data);
// });
