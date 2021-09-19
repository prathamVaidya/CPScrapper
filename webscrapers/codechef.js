"use strict";

var Webscraper = require("./webscraper");

// Define Constants Here
const FUTURE_CONTEST_API_URL = "https://www.codechef.com/api/list/contests/all";
const CONTEST_PAGE_LINK =
  "https://www.codechef.com/%CONTEST%?itm_campaign=contest_listing";

/* This is the main scraper function where your jquery code goes.  

    Attributes: 
      $: Use it for jquery operations
     

    returns the processed data it extracted.
*/

function future_contest_scraper($, page) {
  // process data
  page.data.futureContests = [];

  page.html.future_contests.forEach((element) => {
    var link = CONTEST_PAGE_LINK.replace("%CONTEST%", element.contest_code);
    var stime = new Date(element.contest_start_date_iso).toUTCString();
    var etime = new Date(element.contest_end_date_iso).toUTCString();

    var contest = {};
    contest.code = element.contest_code;
    contest.name = element.contest_name;
    contest.starttime = stime;
    contest.endtime = etime;
    contest.actionlink = link;

    page.data.futureContests.push(contest);
  });

  return page.data.futureContests;
  //console.log(present_contest_data);
}

/* Final Functions Available from this modules */
exports.upcomingContests = (callback) => {
  // initiate a webscraper instance
  var contestPageScraper = new Webscraper(FUTURE_CONTEST_API_URL);

  if (contestPageScraper.data.futureContests != null) {
    //console.log("Showing Cached Output: ");
    callback(contestPageScraper.data.futureContests);
  } else {
    // console.log("Fetching and scraping: ");
    contestPageScraper.fetch(callback, future_contest_scraper);
  }
};
