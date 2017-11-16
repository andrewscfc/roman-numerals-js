var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

const romanNumerals = require('roman-numerals-andrew')

var app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/romanNumerals', function(req, res){
  const number = parseInt(req.query.number);
  const numeral = romanNumerals.generate(number);

  res.statusCode = 200;
  res.send(numeral);
  res.end();
});

module.exports = app;
