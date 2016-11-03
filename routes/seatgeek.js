const apiRouter       = require('express').Router();
const seatgeek       = require('../models/seatgeek');

  apiRouter.get('/:search', seatgeek.getData, seatgeek.getDataBK, (req,res)=>{
    res.json(res.locals)
  });

module.exports = apiRouter
