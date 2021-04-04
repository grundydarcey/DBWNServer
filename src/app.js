/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const { NODE_ENV } = require('./config');
const nightlifeRouter = require('./Nightlife/nightliferouter');
const restaurantRouter = require('./Restaurants/restaurantrouter');
const { errorHandler } = require('./error-handler');
const app = express();

const morganOption = (NODE_ENV === 'production')
  ? 'tiny'
  : 'common';

app.use(morgan(morganOption));
app.use(helmet());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello, Daytona Beach!');
});

app.use('/api/restaurants', restaurantRouter);
app.use('/api/nightlife', nightlifeRouter);
app.use(errorHandler);

module.exports = app;