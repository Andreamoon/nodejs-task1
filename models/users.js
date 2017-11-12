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

/*========================================================0
  METODO CHE AGGIUNGE UN UTENTE
==========================================================*/
module.exports.addUsers = (req, res) => {
  let newUser = new User({
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    telephone: req.body.telephone
  });

  newUser.save((err) => {
    if (err) res.json({
      success: false,
      msg: 'Errore impossibile aggiungere un utente' + err
    });
    res.json({
      success: true,
      message: 'Utente aggiunto al Db'
    });
  });
};

/*==================================================
  METODO CHE LEGGE TUTTI GLI UTENTI DEL DB
====================================================*/

module.exports.getUsers = (req, res) => {
  User.find({}, function (err, data) {
    if (err) {
      res.json({
        msg: 'failed',
        err
      })
    } else {
      res.json({
        msg: 'success',
        data: data
      })
    }
  });;

}
/*=========================================================
  METODO CHE INSERITO UN NOME RESTITUISCE UN UTENTE
============================================================*/
module.exports.getUserByName = (req, res) => {

  const query = {
    name: req.params.name
  }

  User.find(query, (err, user) => {
    if (err) {
      res.json(err);
    }

    res.json(user);
    console.log(user)
  })

};

/*=================================================================
  METODO CHE INSERITO UN ID MODIFICA UN OGGETTO
====================================================================*/
module.exports.updateUser = (req, res) => {
  User.update({
    _id: req.params.id
  }, {
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    telephone: req.body.telephone

  }, (err, user) => {
    //handle it
    if (err) res.json({
      success: false,
      msg: 'Oggetto non modidicato'
    });
    res.json({
      success: true,
      msg: 'Oggetto modificato'
    })
  })
};
/*=================================================================
  METODO PER LA CANCELLAZIONE DI UN UTENTE TRAMITE ID
====================================================================*/

module.exports.deleteUser = (req, res) => {
  User.remove({
    _id: req.params.id
  }, (err) => {
    if (err) return res.status(500).json({
      success: false + err,
      msg: "C'è un errore non è possibile eliminare l' utente"
    })
    res.json({
      success: true,
      message: 'Utente eliminato correttamente'
    })
  })
}