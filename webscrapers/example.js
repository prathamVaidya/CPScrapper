var codechef = require("./codechef");
var codeforces = require("./codeforces");
var atcoder = require("./atcoder");
var topcoder = require("./topcoder");

/* Get Upcoming Contests of Codechef */
 codechef.upcomingContests(function (data) {
     console.log(data);
 }) 

/* Get Upcoming Contests of Codeforce */
codeforces.upComingContest(function (data) {
  console.log(data);
}); 

atcoder.upComingContest(function (data) {
  console.log(data);
});

atcoder.preComingContest(function (data) {
  console.log(data);
});

atcoder.pastContest(function (data) {
  console.log(data);
}); 

 topcoder.futureContests(function (data) {
     console.log(data);
 }) 