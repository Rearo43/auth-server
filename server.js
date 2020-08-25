'use strict';

const PORT = process.env.PORT || 3000;

require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const bcrypt = require('bcrypt');
const base64 = require('base-64');

app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
// app.use(express.static('./public'));

// app.set('view engine', 'ejs');

//-----Routes
app.get('/', handleHome);
app.post('/signup', signUP);
app.post('/signin', basicAuth, signIN);
app.get('users', getUsers);

//-----Error Routes
app.use('*', handleNotFound);
app.use(handleError);




function signUP(req, res){

}

function signIN(req, res){
    
}

function getUsers(req, res){
    
}
//-----404 Errors
function handleNotFound(req, res) {
  res.status(404).send('Route Not Found!');
}

//-----Broken Errors
function handleError(error, res) {
  console.log(error);
  res.status(error).send('BROKEN!');
}
  
//-----Listen on Port
app.listen(PORT, () => console.log(`Server is up on port: ${PORT}`));
