var express = require('express')
    morgan  = require('morgan');

var app = express();
app.use(morgan('dev'));
app.use(express.static('www'));
app.listen(4568);
console.log('on 4568');
