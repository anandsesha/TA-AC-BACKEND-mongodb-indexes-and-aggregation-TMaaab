var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const tagsQuery = require('./aggregations/tagsQuery');
const questionCountQuery = require('./aggregations/questionCountQuery');
const answersCountQuery = require('./aggregations/answersCountQuery');
const userReputationQuery = require('./aggregations/userReputationQuery');
const viewsOnDayQuery = require('./aggregations/viewsOnDayQuery');
const totalAnswersByUserQuery = require('./aggregations/totalAnswersByUserQuery');
const { default: mongoose } = require('mongoose');

var app = express();

// Connect to MongoDB
mongoose
  .connect('mongodb://127.0.0.1:27017/StackOverflowDB')
  .then(() => {
    console.log('Connected to DB');
  })
  .catch((err) => console.log(err));

// Run Queries on Server Startup
async function runQueries() {
  try {
    const tagsResult = await tagsQuery.exec();
    console.log('Tags Query Result:', tagsResult);

    const questionCountResult = await questionCountQuery.exec();
    console.log('Question Count Query Result:', questionCountResult);

    const answersCountResult = await answersCountQuery.exec();
    console.log('Answers Count Query Result:', answersCountResult);

    const userReputationResult = await userReputationQuery.exec();
    console.log('userReputationQuery Result:', userReputationResult);

    const viewsOnDayResult = await viewsOnDayQuery.exec();
    console.log('viewsOnDay Result:', viewsOnDayResult);

    const totalAnswersByUserResult = await totalAnswersByUserQuery.exec();
    console.log('totalAnswersByUser Result:', totalAnswersByUserResult);
  } catch (error) {
    console.error('Error running queries:', error);
  }
}

runQueries();

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
