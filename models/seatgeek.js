const request = require('request');

module.exports = {

  getData(req,res,next){
   let currentSearch = req.params.search
   console.log(currentSearch)
    request({
      url:'https://api.seatgeek.com/2/events?',
      qs: {
        "client_id" : process.env['SG_KEY'],
        "venue.city": "new york",
        "datetime_utc": "2016-10-29",
        "q": currentSearch
      },
      method:'get',
      json:true,
    },(err,response,body)=>{
      if(err) throw err;


    console.log(body.events[0].title)
    console.log(body.events[0].venue)
    console.log(body.events[0].taxonomies)
    console.log(body.events[0].performers)


        res.results = body;
    next();
    })
  }
}
