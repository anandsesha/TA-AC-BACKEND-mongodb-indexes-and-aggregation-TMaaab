const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema(
  {
    title: { type: String },
    body: { type: String },
    tags: [{ type: String }],
    views: { type: Number, default: 0 },
    upvotes: { type: Number, default: 0 },
    downvotes: { type: Number, default: 0 },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  },
  { timestamps: true }
);

// The tags field in the Question model is indexed to support queries related to tags efficiently. Avoid collection scan done by MongoDB and improves efficiency.
questionSchema.index({ tags: 1 });

var Question = mongoose.model('Question', questionSchema);

module.exports = Question;
