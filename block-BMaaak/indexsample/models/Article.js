var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var articleSchema = new Schema({
  title: { type: String },
  description: { type: String },
  tags: { type: [String] },
});

//multu-key index on tags
articleSchema.index({ tags: 1 });

// 2. Add text indexes on title as users will search for texts present in an article's title.
// 3. Update text indexes to include descriptions as well. Implement text indexes on both title and description.
articleSchema.index({ title: 'text' }, { description: 'text' });

var Article = mongoose.model('Article', articleSchema);

module.exports = Article;
