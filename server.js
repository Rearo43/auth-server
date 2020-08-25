'use strict';

require('dotenv').config();

const express = require('express');
const pg = require('pg');
const morgan = require('morgan');
const cors = require('cors');
const PORT = process.env.PORT || 3000;
const app = express();
const client = new pg.Client(process.env.DATABASE_URL);

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
  
  
//-----Listen on Port, Start the server
client.connect(() => {
  app.listen(PORT, () => console.log(`Server is up on port: ${PORT}`));
});
