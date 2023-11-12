const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Vote Model (for upvotes and downvotes)
const voteSchema = new Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  value: { type: Number }, // 1 for upvote, -1 for downvote
});

const Vote = mongoose.model('Vote', voteSchema);

module.exports = Vote;
