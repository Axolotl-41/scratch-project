const db = require('../models/userModel');

const UserController = {
  // Create a new user in the Database
  // Their information will be sent in the request body
  // This should send the created user
  async createUser(req, res, next) {
    try {
      console.log('------entering create user controller----');
      console.log('body: ', req.body);
      const { first_name, last_name, password, username, zipcode } = req.body;
      // console.log(typeof firstName, typeof lastName);
      const query =
        'INSERT INTO users (first_name, last_name, username, password, zipcode) VALUES ($1, $2, $3, $4, $5)';
      const values = [first_name, last_name, username, password, zipcode];
      await db.query(query, values);

      // log the sign up
      console.log('New user signup:', {
        first_name,
        last_name,
        username,
        zipcode,
      });
      res.locals.newUser = {
        first_name,
        last_name,
        password,
        username,
        zipcode,
      };
      return next();
    } catch (error) {
      console.error('Error during user signup:', error);
      return next({
        log: 'Express error in createUser Middleware',
        status: 500,
        message: { err: 'An error occurred during sign-up' },
      });
    }
  },
  // get method for fetching user based off of username
};

module.exports = UserController;
