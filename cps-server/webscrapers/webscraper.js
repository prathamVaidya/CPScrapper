'use strict';

var axios = require("axios");
var cheerio = require("cheerio");

/* Page class which represents a page. 
        Members Variables:
              html: contains html of fetched page
              url: url of the fetched page
              data: this is the final data after processing. Store the data you get in this object.
        Members Functions:
              fetch() : use to fetch source code of thw website and than calls the scraper and the user callback.
              
 */

module.exports = class Page {
  constructor(url) {
    this.url = url;
    this.html = "";
    this.data = {};
  }

  fetch(callback, scraper) {
    return axios
      .get(this.url)
      .then((response) => {
        // if request is successfull

        var $ = cheerio.load(response.data); // init cheerio
        this.html = response.data;
        // scraper will extract the data, save in it in a global object and returns the data too
        callback(scraper($, this));
      })
      .catch((error) => {
        // on request failed
        console.log(error.toString());
      });
  }
}
