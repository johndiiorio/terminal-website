let express = require('express');
let app = express();
let path = require('path');
let favicon = require('serve-favicon');
let logger = require('morgan');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');

let commandRoute = require('./routes/command');

app.use(favicon(path.join(__dirname, '..', 'client', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '..', 'client')));

app.use('/api/command', commandRoute);

// catch 404 and forward to error handler
app.use((req, res, next) => {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    if (err.status == 404) res.send('<h1>' + err.status + ' Not found</h1>');
    else res.send('<h1>' + err.status + ' Server Error</h1>');
});

module.exports = app;