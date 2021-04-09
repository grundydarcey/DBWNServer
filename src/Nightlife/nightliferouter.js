/* eslint-disable quotes */
const express = require('express');
const NightlifeService = require('./nightlifeservice');
const nightlifeRouter = express.Router();

nightlifeRouter
  .route('/')
  .get((req, res, next) => {
    NightlifeService.getAllNightlife(
      req.app.get('db')
    )
      .then(nightlife => {
        res.json(nightlife);
      })
      .catch(next);
  });



nightlifeRouter
  .route('/:area')
  .get((req, res, next) => {
    const knexInstance = req.app.get('db');
    NightlifeService.getByArea(knexInstance, req.params.area)
      .then(clubs => {
        if (!clubs) {
          return res.status(404).json({
            error: { message: `Nothing in that area found, please try another.`}
          });
        }
        res.json(clubs);
      })
      .catch(next);
  });

nightlifeRouter
  .route('/adult')
  .get((req, res, next) => {
    const knexInstance = req.app.get('db');
    NightlifeService.getByAdult(knexInstance, req.params.adult)
      .then(club => {
        if (!club) {
          return res.status(404).json({
            error: { message: `No adult clubs found.`}
          });
        } 
        res.json(club);
      })
      .catch(next);
  });

module.exports = nightlifeRouter;