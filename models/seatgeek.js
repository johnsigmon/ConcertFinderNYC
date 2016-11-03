const request = require('request');

module.exports = {

  getData(req,res,next){
    console.log('CITY MODEL HIT')
   let searchQuery = req.params.search
   console.log(req.params)
    request({
      url:'https://api.seatgeek.com/2/events?per_page=100',
      qs: {
        "client_id" : process.env['SG_KEY'],
        "venue.city": "new york",
        "q": searchQuery
      },
      method:'get',
      json:true
    },(err,response,body)=>{
      if(err) throw err;


        res.locals.nyc = body;
    next();
    })
  },
  getDataBK(req,res,next){
    console.log('bk MODEL HIT')
   let searchQuery = req.params.search
   console.log(req.params)
    request({
      url:'https://api.seatgeek.com/2/events?per_page=100',
      qs: {
        "client_id" : process.env['SG_KEY'],
        "venue.city": "brooklyn",
        "q": searchQuery
      },
      method:'get',
      json:true
    },(err,response,body)=>{
      if(err) throw err;


        res.locals.bk = body;

    next();
    })

  }
}


