const mongoose = require('mongoose');
const Question = require('../models/Question');

// total views on a particular day

const viewsOnDayQuery = Question.aggregate([
  {
    $match: {
      createdAt: { $gte: new Date('2023-01-01T00:00:00.000Z') },
    },
  },
  {
    $group: {
      _id: null,
      totalViews: { $sum: '$views' },
    },
  },
  {
    $project: {
      _id: 0,
      totalViews: 1,
    },
  },
]);

module.exports = viewsOnDayQuery;
