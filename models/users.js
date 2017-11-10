const mongoose = require('mongoose'); //per mongo

//richiamo il mio Db
const config = require('../config/database');
// User Schema

const UserSchema = mongoose.Schema({
  name: {
    type: String
  },

  username: {
    type: String,
  },
  email: {
    type: String
  },
  telephone: {
    type: String
  }

});

//espsorto il mio Schema assegnando a User
const User = module.exports = mongoose.model('User', UserSchema);

//metodo che aggiunge un utente
module.exports.addUser = (user, callback) => {
  user.save(callback);
};

//metodo che legge utente
module.exports.getUserByName = (name, callback) => {
  const query = {
    name: name
  }

  User.find(query, callback)
};