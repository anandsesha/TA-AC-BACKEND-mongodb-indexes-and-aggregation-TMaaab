const mongoose = require('mongoose');
const Answer = require('../models/Answer');

// Count total answer by a particular user

const totalAnswersByUserQuery = Answer.aggregate([
  {
    $match: {
      //   user: mongoose.Types.ObjectId(),
    },
  },
  {
    $group: {
      _id: null,
      totalAnswers: { $sum: 1 },
    },
  },
  {
    $project: {
      _id: 0,
      totalAnswers: 1,
    },
  },
]);

module.exports = totalAnswersByUserQuery;
