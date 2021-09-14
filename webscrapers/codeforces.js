var Webscraper = require("./webscraper")

const FUTURE_CONTEST_API_URL = "https://codeforces.com/contests";


const UPCOMING_CONTEST = 1
const PAST_CONTEST = 2

function code_webScraper($,webscraper){
    var status = webscraper.status;
  switch(status){
    case UPCOMING_CONTEST:
      var list = $('.contestList').find('table')[0]
      break;
    case PAST_CONTEST:
      var list = $('.contestList').find('table')[1]
      break;
  }
 //Current or Upcoming contests 
 var data = $(list).find('tr')
 var tablelist = [];
for(let i=1;i<data.length;i++)
  {
    var upcoming_contests = data[i];
  var column = $(upcoming_contests).find('td');
  
    var contest_name = $(column[0]).children().remove().end().text().replace(/\n/g,"").trim();  // Using .replace() and .trim() to filter the string

    var writers = $(column[1]).text().replace(/\n/g,"").replace(/   /g,"").trim();
     
    var event_time = $(column[2]).find("[class^='format-time']").text(); 
    var unix_time = new Date(event_time).getTime() / 1000; // converted UTC time to unix timestamp
  

     var duration = $(column[3]).text().replace(/\n/g,"").trim();

    var register_link = $(column[5]).find('.red-link').attr('href');

     var participants = $(column[5]).find('.contestParticipantCountLinkMargin').text().split('x')[1];

    
    var table = {}
    table.name = contest_name;
    table.writers = writers;
    table.event_time = unix_time;
    table.duration = duration;
    table.participants = participants;
    table.register_link = register_link;
    tablelist.push(table)     // Stored all data in the tablelist[]
   }
   switch(status)
   {
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


exports.upComingContest = (callback) => {

contestPageScraper.status = 1;

  if (contestPageScraper.data.upComingContest != null) {
    //console.log("Showing Cached Output: ");
    callback(contestPageScraper.data.upComingContest);
  } else {
   // console.log("Fetching and scraping: ");
    contestPageScraper.fetch(callback, code_webScraper);
  }
};


exports.pastContest = (callback) => {
contestPageScraper.status = 2;

  if (contestPageScraper.data.pastContest != null) {
    //console.log("Showing Cached Output: ");
    callback(contestPageScraper.data.pastContest);
  } else {
   // console.log("Fetching and scraping: ");
    contestPageScraper.fetch(callback, code_webScraper);
  }
};