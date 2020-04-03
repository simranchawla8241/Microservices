var request = require('request');

const URL = 'http://assessments.reliscore.com/api/sales/';

var distance = {
   find: function(req, res, next) {
       console.log(URL  + req.params.year);
       request(URL  + req.params.year+'/' ,
       function (error, response, body) {
           if (!error && response.statusCode == 200) {
               response = JSON.parse(body);
               res.send(response);
           } else {
               console.log(response.statusCode + response.body);
               res.send({"status": "error",
               "message": "Illegal value for year"});
           }
       });

   }
};

module.exports = distance;