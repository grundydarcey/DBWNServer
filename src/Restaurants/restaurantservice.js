const RestaurantService = {
  getAllRestaurants(knex) {
    return knex
      .select('*')
      .from('restaurants');
  },
  
  getByCuisine(knex, cuisine) {
    return knex
      .from('restaurants')
      .select('*')
      .where('cuisine', cuisine);
  }
};
  
module.exports = RestaurantService;