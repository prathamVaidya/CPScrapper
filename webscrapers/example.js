var codechef = require("./codechef");
var codeforces = require("./codeforces");
var atcoder = require("./atcoder");
var topcoder = require("./topcoder");

// /* Get Upcoming Contests of Codechef */
codechef.upcomingContests(function (data) {
  console.log(data);
});

/* Get Upcoming Contests of Codeforce */
codeforces.upcomingContests(function (data) {
  console.log(data);
});
/* Get Upcoming Contests of Atcoder */
atcoder.upcomingContests(function (data) {
  console.log(data);
});

// /* Get Upcoming Contests of Topcpder */
topcoder.upcomingContests(function (data) {
  console.log(data);
});
