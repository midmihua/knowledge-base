require('dotenv-extended').load();
const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const compression = require('compression');

const { logging } = require('./utils/logging');
const { invalidPath } = require('./routes/api/404');
const { errorHandling } = require('./middleware/error-handling');

const app = express();

// application/json data
app.use(bodyParser.json());

// CORS (cross origin resource sharing)
// This middleware must be set up before route configuration
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

// Helmet helps you secure your Express apps by setting various HTTP headers.
app.use(helmet());

// Middleware to compress the traffic (to have a better performance)
app.use(compression());

// Requests logging in case of local env
logging(app);

// Routes
// TBD

// Route does not exist (404)
app.use(invalidPath);

// Error-handling middleware
app.use(errorHandling);

// Export app to use it in external files
module.exports = app;