/*const request = require('request');

module.exports = {

  getData(req,res,next){
   let currentSearch = req.params.search
    request({
      url:'https://api.seatgeek.com/2/events?',
      qs: {
        "client_id" : process.env['SG_KEY'],
        "venue.city": "new york",
        "datetime_utc": "2016-11-01",
        "q": currentSearch
      },
      method:'get',
      json:true,
    },(err,response,body)=>{
      if(err) throw err;

        res.results = body;
    next();
    })
  }
}

*/
