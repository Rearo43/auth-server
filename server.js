'use strict';

require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
// app.use(express.static('./public'));

// app.set('view engine', 'ejs');

//-----Routes
app.get('/', handleHome);

//-----Error Routes
app.use('*', handleNotFound);
app.use(handleError);

//-----404 Errors
function handleNotFound(req, res) {
  res.status(404).send('Route not found');
}

//-----Broken Errors
function handleError(error, res) {
  console.log(error);
  res.render('pages/error', {data: error.message, pgName: 'Error 404'});
}
  
  
//-----Listen on Port
app.listen(PORT, () => console.log(`Server is up on port: ${PORT}`));
