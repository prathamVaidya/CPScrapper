
module.exports.run = function (){
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

/* Get Upcoming Contests of Codechef */
codechef.upcomingContests(function (upcomingContestsList) {
    console.log("Storing Results from Codechef")
  upcomingContestsList.forEach((singleContest) => {
     // to create a new contest if doesnt exist already

     var contest = {
      name: singleContest.name,
      startTime:  singleContest.start_time,
      endTime:  singleContest.end_time,
      actionLink:  singleContest.action_link,
      source: "Codechef"
    };
    
    findOrCreateContest(contest)
    


  })
  
});

codeforces.upcomingContests(function (upcomingContestsList) {
  console.log("Storing Results from Codeforces")
  upcomingContestsList.forEach((singleContest) => {
     // to create a new contest if doesnt exist already

     var contest = {
      name: singleContest.name,
      startTime:  singleContest.start_time,
      endTime:  singleContest.end_time,
      actionLink:  singleContest.action_link,
      source: "Codeforces"
    };
    
    findOrCreateContest(contest)
    


  })
  
});

atcoder.upcomingContests(function (upcomingContestsList) {
  console.log("Storing Results from atcoder")
  upcomingContestsList.forEach((singleContest) => {
     // to create a new contest if doesnt exist already

     var contest = {
      name: singleContest.name,
      startTime:  singleContest.start_time,
      endTime:  singleContest.end_time,
      actionLink:  singleContest.action_link,
      source: "Atcoder"
    };
    
    findOrCreateContest(contest)
    


  })
  
});

topcoder.upcomingContests(function (upcomingContestsList) {
  console.log("Storing Results from topcoder")
  upcomingContestsList.forEach((singleContest) => {
     // to create a new contest if doesnt exist already

     var contest = {
      name: singleContest.name,
      startTime:  singleContest.start_time,
      endTime:  singleContest.end_time,
      actionLink:  singleContest.action_link,
      source: "Topcoder"
    };
    
    findOrCreateContest(contest)
    


  })
  
});



  })
  .catch((err) => {
    console.log(err);
  });


  function findOrCreateContest(contest){
    Contest.findOne(contest,function (err, data) {
      if (err){
          console.log(err)
      } 
      else{
          console.log("Result : ", data);
          if(data == null){
             new Contest(contest)
             .save()
             .then((result) => console.log("Record Created"))
             .catch((error) => console.log("Handle this error here: "+error));
          }
      }
  })
  }
}