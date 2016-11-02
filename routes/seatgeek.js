const apiRouter       = require('express').Router();
const seatgeek       = require('../models/seatgeek');

  apiRouter.get('/:search', seatgeek.getData, (req,res)=>{
    console.log('ROUTER HIT')
    res.json(res.results)
  });

module.exports = apiRouter
