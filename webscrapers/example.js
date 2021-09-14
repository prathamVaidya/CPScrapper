var codechef = require("./codechef");
var codeforces = require("./codeforces");

/* Get Upcoming Contests of codechef */

// codechef.upcomingContests(function (data) {
//     console.log(data);
// })

/* Get Upcoming Contests of codeforce */
codeforces.upComingContest(function (data) {
  console.log(data);
});
