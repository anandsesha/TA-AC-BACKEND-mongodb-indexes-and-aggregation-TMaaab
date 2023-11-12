const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const answerSchema = new mongoose.Schema({
  body: { type: String },
  upvotes: { type: Number, default: 0 },
  downvotes: { type: Number, default: 0 },
  question: { type: mongoose.Schema.Types.ObjectId, ref: 'Question' },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

const Answer = mongoose.model('Answer', answerSchema);

module.exports = Answer;
