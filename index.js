'use strict'

require('dotenv').config();
const express = require('express');
const path = require('path');
const routes = require('./src/routes/routes');
const cookieSession = require('cookie-session');
const flash = require("connect-flash");

const app = express();

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cookieSession({
    name: 'session',
    secret: process.env.SECRET, 
    maxAge: 24 * 60 * 60 * 1000
  }));
  
  app.use(flash());

app.use(routes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running at http://localhost:${port}`));