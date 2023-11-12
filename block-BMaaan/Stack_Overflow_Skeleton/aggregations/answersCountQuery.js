const Answer = require('../models/Answer');

// Total answers count overall and question specific as well
const answersCountQuery = Answer.aggregate([
  {
    $group: {
      _id: null,
      total: { $sum: 1 },
      byQuestion: { $push: { question: '$question', count: 1 } },
    },
  },
  {
    $project: {
      _id: 0,
      total: 1,
      byQuestion: 1,
    },
  },
]);

module.exports = answersCountQuery;
