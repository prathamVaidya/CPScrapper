var codechef = require("./codechef");
var codeforces = require("./codeforces");
var atcoder = require("./atcoder");

/* Get Upcoming Contests of codechef */

 codechef.upcomingContests(function (data) {
     console.log(data);
 }) 

/* Get Upcoming Contests of codeforce */
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