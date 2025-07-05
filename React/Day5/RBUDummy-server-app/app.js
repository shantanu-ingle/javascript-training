var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose'); // ✅ Add this line
const cors= require('cors')
var coursesRouter = require('./routes/courses');

var app = express();

// ✅ Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/courses")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("Connection error:", err));

  // DELETE /courses/:id

  
app.use(cors())
  //middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/courses', coursesRouter);

module.exports = app;
