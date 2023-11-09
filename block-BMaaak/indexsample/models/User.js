var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: { type: String },
  username: { type: String },
  email: { type: String, unique: true, index: true }, //field level - email indexed, along with unique index
  address: {
    city: { type: String },
    state: { type: String },
    country: { type: String },
    pin: { type: Number },
  },
});

//schema level - username indexed
userSchema.index({ username: 1 }, { unique: true });

//Q2. define compound indexes on state and country field inside address document. Each country must have states which are unique.
userSchema.index(
  { 'address.country': 1, 'address.state': 1 },
  { unique: true }
);

var User = mongoose.model('User', userSchema);

module.exports = User;
