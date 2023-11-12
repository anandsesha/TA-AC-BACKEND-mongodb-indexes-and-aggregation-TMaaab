const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Reply Model (for both Question and Answer replies)
const replySchema = new Schema({
  body: { type: String },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

const Reply = mongoose.model('Reply', replySchema);
module.exports = Reply;
