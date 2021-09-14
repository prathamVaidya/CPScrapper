var codechef = require("./codechef");
var codeforces = require("./codeforces");
var topcoder = require("./topcoder");
/* Get Upcoming Contests of codechef */

// codechef.upcomingContests(function (data) {
//     console.log(data);
// })

/* Get Upcoming Contests of codeforce */
//codeforces.upComingContest(function (data) {
  //console.log(data);
  topcoder.upcomingContests(function (data) {
        console.log(data);
});
