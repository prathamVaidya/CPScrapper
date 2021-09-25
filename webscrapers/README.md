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
* [codechef.js](codechef.js) contains the webscraper code for Codechef.
* [codeforces.js](codeforces.js) contains the webscraper code for Codeforces.
* [atcoder.js](atcoder.js) contains the webscraper code for AtCoder.
* [topcoder.js](topcoder.js) contains the webscraper code for TopCoder.
* [webscraper.js](webscraper.js) contains a framework designed for webscraping.
