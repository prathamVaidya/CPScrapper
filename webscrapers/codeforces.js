var Webscraper = require("./webscraper");

const FUTURE_CONTEST_API_URL = "https://codeforces.com/contests";

const UPCOMING_CONTEST = 1;
const PAST_CONTEST = 2;
const URL = "https://codeforces.com";

function code_webScraper($, webscraper) {
  var status = webscraper.status;
  switch (status) {
    case UPCOMING_CONTEST:
      var list = $(".contestList").find("table")[0];
      break;
    case PAST_CONTEST:
      var list = $(".contestList").find("table")[1];
      break;
  }
  //Current or Upcoming contests
  var data = $(list).find("tr");
  var tablelist = [];
  for (let i = 1; i < data.length; i++) {
    var upcoming_contests = data[i];
    var column = $(upcoming_contests).find("td");
    var contest_name = $(column[0])
      .children()
      .remove()
      .end()
      .text()
      .replace(/\n/g, "")
      .trim(); // Using .replace() and .trim() to filter the string

    var writers = $(column[1])
      .text()
      .replace(/\n/g, "")
      .replace(/   /g, "")
      .trim();

    var event_time = $(column[2]).find("[class^='format-time']").text();
    var unix_time = new Date(event_time).getTime() / 1000; // converted UTC time to unix timestamp

    var duration = $(column[3]).text().trim().split(":");
    var end_time;
    if (duration.length == 2) {
      end_time = duration[0] * 60 * 60 + duration[1] * 60 + unix_time;
    } else if (duration.length == 3) {
      end_time =
        duration[0] * 24 * 60 * 60 +
        duration[1] * 60 * 60 +
        duration[2] * 60 +
        unix_time;
    }

    if (status == UPCOMING_CONTEST) {
      var link = $(column[5]).find(".red-link").attr("href");
      if (link) {
        var register_link = URL + link;
      }
    } else {
      var standings_link = URL + $(column[4]).find("a").attr("href");
    }

    var participants = $(column[5])
      .find(".contestParticipantCountLinkMargin")
      .text()
      .split("x")[1];

    var table = {};
    table.name = contest_name;
    table.writers = writers;
    table.start_time = unix_time;
    table.end_time = end_time;
    table.total_participants = participants;

    if (status == UPCOMING_CONTEST) {
      table.action_link = register_link;
    } else {
      table.standings_link = standings_link;
    }
    tablelist.push(table); // Stored all data in the tablelist[]
  }
  switch (status) {
    case UPCOMING_CONTEST:
      webscraper.data.upComingContest = tablelist;
      break;
    case PAST_CONTEST:
      webscraper.data.pastContest = tablelist;
      break;
  }
  return tablelist;
}
// initiate a webscraper instance
var contestPageScraper = new Webscraper(FUTURE_CONTEST_API_URL);

exports.upcomingContests = (callback) => {
  contestPageScraper.status = 1;

  if (contestPageScraper.data.upComingContest != null) {
    //console.log("Showing Cached Output: ");
    callback(contestPageScraper.data.upComingContest);
  } else {
    // console.log("Fetching and scraping: ");
    contestPageScraper.fetch(callback, code_webScraper);
  }
};

exports.pastContests = (callback) => {
  contestPageScraper.status = 2;

  if (contestPageScraper.data.pastContest != null) {
    //console.log("Showing Cached Output: ");
    callback(contestPageScraper.data.pastContest);
  } else {
    // console.log("Fetching and scraping: ");
    contestPageScraper.fetch(callback, code_webScraper);
  }
};
