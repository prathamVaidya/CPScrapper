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

  function timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
    var utc_time = new Date(time).toUTCString();
    return utc_time;
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
    var unix_time = new Date(event_time).getTime() / 1000; 
    var start_time = new Date(event_time).toUTCString();

    var duration = $(column[3]).text().trim().split(":");
    var end_time;
    if (duration.length == 2) {
      var test_time = duration[0] * 60 * 60 + duration[1] * 60 + unix_time;
      end_time = timeConverter(test_time);
    } else if (duration.length == 3) {
      var test_time =
        duration[0] * 24 * 60 * 60 +
        duration[1] * 60 * 60 +
        duration[2] * 60 +
        unix_time;
        end_time = timeConverter(test_time);
    }

    if (status == UPCOMING_CONTEST) {
      var link = $(column[5]).find(".red-link").attr("href");
      if (link) {
        var register_link = URL + link;
        var register = (typeof (register_link) !== 'undefined' ? register_link : 'https://codeforces.com/contests');
      }
    } else {
      var standings_link = URL + $(column[4]).find("a").attr("href");
      var standings = (typeof (standings_link) !== 'undefined' ? standings_link : 'https://codeforces.com/contests');
    }

    var participants = $(column[5])
      .find(".contestParticipantCountLinkMargin")
      .text()
      .split("x")[1];
      var count = (typeof (participants) !== 'undefined' ? participants : 'Will Be Updated');

    var table = {};
    table.name = contest_name;
    table.writers = writers;
    table.startTime = start_time;
    table.endTime = end_time;
    table.totalParticipants = count;

    if (status == UPCOMING_CONTEST) {
      table.actionLink = register;
    } else {
      table.standingsLink = standings;
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
