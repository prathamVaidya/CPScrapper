# CPScrapper

Example:
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

* Codechef: This function will fetch the details of upcoming contests on Codechef.

  var codechef = require("./codechef");             
  codechef.upcomingContests(function (data) {                
    console.log(data);                  
  });

* Codeforces: This function will fetch the details of upcoming contests on Codeforces.

  var codeforces = require("./codeforces");                   
  codeforces.upcomingContests(function (data) {               
    console.log(data);           
  });
  
* Atcoder: This function will fetch the details of upcoming contests on AtCoder.

  var atcoder = require("./atcoder");                 
  atcoder.upcomingContests(function (data) {           
    console.log(data);              
  });
  
* Topcoder: This function will fetch the details of upcoming contests on TopCoder.

  var topcoder = require("./topcoder");                            
  topcoder.upcomingContests(function (data) {             
    console.log(data);             
  });


Important Information:
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
* [codechef.js](https://github.com/Kushagra0426/CPScrapper/blob/main/webscrapers/codechef.js) contains the webscraper code for Codechef.
* [codeforces.js](https://github.com/Kushagra0426/CPScrapper/blob/main/webscrapers/codeforces.js) contains the webscraper code for Codeforces.
* [atcoder.js](https://github.com/Kushagra0426/CPScrapper/blob/main/webscrapers/atcoder.js) contains the webscraper code for AtCoder.
* [topcoder.js](https://github.com/Kushagra0426/CPScrapper/blob/main/webscrapers/topcoder.js) contains the webscraper code for TopCoder.
* [webscraper.js](https://github.com/Kushagra0426/CPScrapper/blob/main/webscrapers/webscraper.js) contains a framework designed for webscraping.
