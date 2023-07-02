const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SALT_WORK_FACTOR = 10;
const bcrypt = require('bcryptjs')

userSchema.pre('save', function(next) {
  bcrypt.hash(this.password, SALT_WORK_FACTOR,
  (err, has) => {
    if (err) return next(err);
    this.password = hash;
    return next();
  })
});

// set a schema for the 'users' collectionx
const userSchema = new Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  zipcode: {
    type: Number,
    required: true,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
