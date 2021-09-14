"use strict";
var Webscraper = require("./webscraper")

const FUTURE_CONTEST_API_URL = "https://atcoder.jp/contests";


const PRESENT_COMPETITION = 1
const FUTURE_COMPETITION = 2
const PAST_COMPETITION = 3
var id_name;
function code_webScraper($,webscraper){
    var status = webscraper.status;
  switch(status){
    case PRESENT_COMPETITION:
       id_name = '#contest-table-action'
        break;
      case FUTURE_COMPETITION:
        id_name = '#contest-table-upcoming'
        break;
      case PAST_COMPETITION:
        id_name = '#contest-table-recent'
        break;
  }
 //Current or Upcoming contests 
 var list = $(id_name).find('tr');
  
  var tablelist = [];
  for (let i=1; i< list.length; i++)
{
  var data = $(list[i]).find('td')
 var temp_time = $(data[0]).text();            // stored time in temp variable
                      var time_split = temp_time.split(" ");            // stored date in [0] and time in [1]
                      var time_element0 = time_split[0].slice(0,10);            // removed (day) in element[0] == date
                      var time_concat = time_element0.concat(" ").concat(time_split[1]);            // added add strings in the format of     "YYYY-MM-DD HH-MM-SS"
                    var final_time = new Date(time_concat);
  var start_time = final_time.getTime()/1000;
   
  
  var contest_name = $(data[1]).find('a').text();
  var duration = $(data[2]).html().split(':');
  var end_time=duration[0]*60*60+duration[1]*60+start_time;
var min_rating = 0;
var max_rating = $(data[3]).html().replace(' - ','');
var link = "https://atcoder.jp" + $(data[1]).find('a').attr('href');

var table = {}
	 table.name = contest_name;
	table.start_time = start_time;
  table.end_time=end_time; 
   table.action_link = link;
	table.min_rating=min_rating;
  table.max_rating=max_rating;
 
    tablelist.push(table)
}


   switch(status)
   {
    case PRESENT_COMPETITION:
      webscraper.data.preComingContest = tablelist;
      break;
    case FUTURE_COMPETITION:
        webscraper.data.upComingContest = tablelist;
      break;
      case PAST_COMPETITION:
        webscraper.data.pastContest = tablelist;
      break;
    }
    return tablelist;


}
// initiate a webscraper instance
var contestPageScraper = new Webscraper(FUTURE_CONTEST_API_URL);


exports.preComingContest = (callback) => {

contestPageScraper.status = 1;

  if (contestPageScraper.data.preComingContest != null) {
    //console.log("Showing Cached Output: ");
    callback(contestPageScraper.data.preComingContest);
  } else {
   // console.log("Fetching and scraping: ");
    contestPageScraper.fetch(callback, code_webScraper);
  }
};


exports.pastContest = (callback) => {
contestPageScraper.status = 3;

  if (contestPageScraper.data.pastContest != null) {
    //console.log("Showing Cached Output: ");
    callback(contestPageScraper.data.pastContest);
  } else {
   // console.log("Fetching and scraping: ");
    contestPageScraper.fetch(callback, code_webScraper);
  }
};
exports.upComingContest = (callback) => {

    contestPageScraper.status = 2;
    
      if (contestPageScraper.data.upComingContest != null) {
        //console.log("Showing Cached Output: ");
        callback(contestPageScraper.data.upComingContest);
      } else {
       // console.log("Fetching and scraping: ");
        contestPageScraper.fetch(callback, code_webScraper);
      }
    };