const Question = require('../models/Question');

// Get array of all the tags used in the questions
const tagsQuery = Question.aggregate([
  { $unwind: '$tags' },
  { $group: { _id: '$tags', count: { $sum: 1 } } },
]);

module.exports = tagsQuery;
