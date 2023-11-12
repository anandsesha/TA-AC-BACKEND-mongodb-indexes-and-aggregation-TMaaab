const Question = require('../models/Question');

//Get total questions count
const questionCountQuery = Question.aggregate([
  {
    $group: {
      _id: null,
      count: { $sum: 1 },
    },
  },
  {
    $project: {
      _id: 0,
      count: 1,
    },
  },
]);

module.exports = questionCountQuery;
