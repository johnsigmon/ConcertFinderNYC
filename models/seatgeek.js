const request = require('request');

module.exports = {

  getData(req,res,next){
    console.log('GET DATA MODEL HIT')
   let searchQuery = req.params.search
   console.log(req.params)
    request({
      url:'https://api.seatgeek.com/2/events?',
      qs: {
        "client_id" : process.env['SG_KEY'],
        "venue.city": "new york",
        "q": searchQuery
      },
      method:'get',
      json:true
    },(err,response,body)=>{
      if(err) throw err;


        res.results = body;
    next();
    })
  }
}


