const apiRouter       = require('express').Router();
const seatGeekAPI       = require('../models/seatgeek');

  apiRouter.get('/:search', seatGeekAPI.getData, (req,res)=>{
    res.json(res.results)
  });

module.exports = apiRouter
