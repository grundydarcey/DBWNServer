//const { expect } = require('chai');
const knex = require('knex');
const app = require('../src/app');
const { makeNightlifeArray } = require('./fixtures/nightlife-fixtures');
//const NightlifeService = require('../src/Nightlife/nightlifeservice');

describe('Nightlife endpoints', function() {
  this.timeout(10000);
  let db;
  let testClubs = makeNightlifeArray();
  before(() => {
    db = knex({
      client: 'pg',
      connection: process.env.TEST_DATABASE_URL,
    });
    app.set('db', db);
  });
  before(() => db('nightlife').truncate());
  afterEach(() => db('nightlife').truncate());
  after(() => db.destroy());

  context('Given \'nightlife\' has data', () => {
    before(() => {
      return db
        .into('nightlife')
        .insert(testClubs);
    });
    it('GET /api/nightlife responds with 200 and all clubs from \'nightlife\' table', () => {
      return supertest(app)
        .get('/api/nightlife')
        .expect(200, testClubs);
    });
  });

  context('Given \'nightlife\' is empty', () => {
    it('GET /api/nightlife responds with 200 and an empty array', () => {
      return supertest(app)
        .get('/api/nightlife')
        .expect(200);
    });
  });
});