const apiRouter       = require('express').Router();
const seatgeek       = require('../models/seatgeek');

  apiRouter.get('/:search', seatgeek.getData, (req,res)=>{
    res.json(res.results)
  });

module.exports = apiRouter
