/* eslint consistent-return:0 */

const express = require('express');
const { resolve } = require('path');
const logger = require('./util//logger');

const argv = require('./util/argv');
const port = require('./util//port');
const setup = require('./middlewares/frontendMiddleware');

const app = express();

// In production this app needs to pass these values in instead of relying on webpack
setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/',
});

// Get the intended host and port number, use localhost and port 3000 if not provided
const customHost = argv.host || process.env.HOST;
const host = customHost || null; // Let http.Server use its default IPv6/4 host
const prettyHost = customHost || 'localhost';

// Start the app.
app.listen(port, host, (err) => {
  if (err) {
    return logger.error(err.message);
  }
  logger.appStarted(port, prettyHost);
});
