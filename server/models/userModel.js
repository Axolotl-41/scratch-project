const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SALT_WORK_FACTOR = 10;
const bcrypt = require('bcryptjs');

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

userSchema.pre('save', function (next) {
  // within this context, 'this' refers to the document about to be save
  // in our case, it should have properties username and password
  bcrypt.hash(this.password, SALT_WORK_FACTOR, (err, hash) => {
    if (err) return next(err);
    // reassign the document's password to it's hashed version
    this.password = hash;
    //this next call makes mongoose move on to saving the doc
    return next();
  });
});
const User = mongoose.model('User', userSchema);

module.exports = User;
