const express = require('express');

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static('public'));

// MIDDLEWARES intercept data before it reaches POST route
// parse incoming string or array data from form
app.use(express.urlencoded({ extended: true }));
// // parse incoming JSON data
app.use(express.json());

// Router Middleware
// if client makes request to '<host>/api', use router set up in apiRoutes/index.js
app.use('/api', apiRoutes);
// if client makes request to '<host>/', use router set up in htmlRoutes/index.js
app.use('/', htmlRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));