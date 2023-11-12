const mongoose = require('mongoose');
const User = require('../models/User');

// Count total reputation of a user

const userReputationQuery = User.aggregate([
  {
    $project: {
      reputation: { $sum: ['$questions.reputation', '$answers.reputation'] },
    },
  },
]);

module.exports = userReputationQuery;
