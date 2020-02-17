import createError from 'http-errors';
import express from 'express';
import path from 'path';
import logger from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';
import http from 'http';
import dotenv from 'dotenv'
import MongoClient from 'mongodb';
var db;

//var stomp = require('./src/stomp/stomp')();

import ssiRouter from './src/routes/ssi.js';
import osipRouter from './src/routes/osip.js';

dotenv.config();

var app = express();


app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/ssi', ssiRouter);
app.use('/osip', osipRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

MongoClient.connect(process.env.DATABASE_URL, {useNewUrlParser: true },(err, client) => {
  if (err) {
    return console.log(err);
  }
  db = client.db('osip');

  http.createServer(app).listen(process.env.PORT, function(){
    console.log('Express server listening on port ' + process.env.PORT);
  });
});

export default app;
