/* eslint-disable quotes */
const express = require('express');
const RestaurantService = require('./restaurantservice');
const restaurantRouter = express.Router();

restaurantRouter
  .route('/')
  .get((req, res, next) => {
    RestaurantService.getAllRestaurants(
      req.app.get('db')
    )
      .then(restaurants => {
        res.json(restaurants);
      })
      .catch(next);
  });

restaurantRouter
  .route('/:cuisine')
  .get((req, res, next) => {
    const knexInstance = req.app.get('db');
    RestaurantService.getByCuisine(knexInstance, req.params.cuisine)
      .then(restaurant => {
        if (!restaurant) {
          return res.status(404).json({
            error: { message: `There are no locations that match your cuisine. Please try another.`}
          });
        }
        res.json(restaurant);
      })
      .catch(next);
  });

module.exports = restaurantRouter;