const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var userSchema = new Schema({
  username: { type: String, unique: true },
  reputation: { type: Number, default: 0 },
});

var User = mongoose.model('User', userSchema);

module.exports = User;
