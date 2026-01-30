const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
   username: { type: String, required: true, maxLength: 100},
   email: {type: String, required: true, maxLength: 100},
   password: {type: String, required: true},
});

UserSchema.virtual('user').get(function () {
   return this.username;
});

UserSchema.virtual('url').get(function () {
   return `/users/${this._id}`;
});

module.exports = mongoose.model('User', UserSchema);