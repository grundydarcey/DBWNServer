/* eslint-disable no-unused-vars */
const { expect } = require('chai');
const knex = require('knex');
const app = require('../../src/app');
const { makeRestaurantArray } = require('./restaurants-fixtures');
const RestaurantService = require('../../src/Restaurants/restaurantservice');

describe('Restaurant endpoints', function() {
  this.timeout(10000);
  let db;
  let testRestaurants = makeRestaurantArray();
  before(() => {
    db = knex({
      client: 'pg',
      connection: process.env.TEST_DATABASE_URL,
    });
    app.set('db', db);
  });
  
  before(() => db('restaurants').truncate());
  
  afterEach(() => db('restaurants').truncate());
  
  after(() => db.destroy());
  
  context('Given \'restaurants\' has data', () => {
    before(() => {
      return db
        .into('restaurants')
        .insert(testRestaurants);
    });
    it('GET /api/restaurants responds with 200 and all restaurants from \'restaurants\' table', () => {
      return supertest(app)
        .get('/api/restaurants')
        .expect(200, testRestaurants);
    });
   
  });
  
  context('Given \'restaurants\' is empty', () => {
    it('GET /api/restaurants responds with 200 and an empty array', () => {
      return supertest(app)
        .get('/api/restaurants')
        .expect(200);
    });
  });
});