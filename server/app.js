const express = require('express');
const morgan = require('morgan');
const path = require('path');
const router = require('./routes');

const app = express();
const PORT = 3001;

// Middleware
// Bodyparsing
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// Serve our static build files
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../Client/build')));
}
// Provides great rout logging in our console for debugging
app.use(morgan('dev'));

// Import the routing setup from our Router
app.use('/', router);

// Serving react on routs unused by previous routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../Client/build/index.html'));
});

// Startup
app.listen(PORT, () => {
  console.log(`The API Server is listening on port: ${PORT}`);
});
