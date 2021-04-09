const express = require('express');
const AdultService = require('./adultservice');
const adultRouter = express.Router();

adultRouter
  .route('/')
  .get((req, res, next) => {
    AdultService.getAllAdult(
      req.app.get('db')
    )
      .then(adult => {
        res.json(adult);
      })
      .catch(next);
  });

module.exports = adultRouter;