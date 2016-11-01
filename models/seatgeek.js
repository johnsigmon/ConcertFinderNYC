const request = require('request');

module.exports = {

  getData(req,res,next){
   let currentSearch = req.params.search
    request({
      url:'https://api.seatgeek.com/2/events?',
      qs: {
        "client_id" : process.env['SG_KEY'],
        "venue.city": "new york",
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


