var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const { default: mongoose } = require('mongoose');
const { error } = require('console');
const User = require('./models/User');
const Article = require('./models/Article');

var app = express();

// Connect to MongoDB

mongoose
  .connect('mongodb://127.0.0.1:27017/indexSampleDB')
  .then(console.log('Connected to MongoDB'))
  .catch((error) => console.log(error));

// // Create a sample user
// const sampleUser = new User({
//   name: 'Raman Seshadri',
//   username: 'ramanseshad',
//   email: 'sample03@example.com',
//   address: {
//     city: 'New York1',
//     state: 'NYC2',
//     country: 'USA12',
//     pin: 543211,
//   },
// });

// sampleUser
//   .save()
//   .then(() => {
//     console.log('Sample user saved to the database');
//   })
//   .catch((error) => {
//     console.error('Error saving sample user:', error);
//   });

// Create a sample article
const sampleArticle = new Article({
  title: 'Express.js Introduction',
  description: 'This is an introductory article about Express.js',
  tags: ['Node.js', 'JavaScript', 'Backend'],
});

// Save the article document to the database
sampleArticle
  .save()
  .then(() => {
    console.log('Sample article saved to the database');

    // Now you can search for articles with the 'Node.js' keyword in the title or description
    Article.find({ $text: { $search: 'Node.js' } })
      .then((articles) => {
        console.log('Articles found:', articles);
      })
      .catch((error) => {
        console.error('Error searching for articles:', error);
      });
  })
  .catch((error) => {
    console.error('Error saving sample article:', error);
  });

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
