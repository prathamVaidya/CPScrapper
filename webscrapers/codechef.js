var Webscraper = require("./webscraper")


// Define Constants Here
const FUTURE_CONTEST_API_URL = "https://www.codechef.com/api/list/contests/all";


/* This is the main scraper function where your jquery code goes.  

    Attributes: 
      $: Use it for jquery operations
     

    returns the processed data it extracted.
*/

function future_contest_scraper($, page) {
  // process data
  page.data.futureContests = page.html.future_contests;
  return page.data.futureContests;
  //console.log(present_contest_data);
}

/* Final Functions Available from this modules */
exports.futureContests = (callback) => {

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
