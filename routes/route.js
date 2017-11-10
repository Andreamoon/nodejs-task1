const express = require('express');
const router = express.Router();
const config = require('../config/database');
const User = require('../models/users');


router.post('/register', (req, res) => {

  let newUser = new User({
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    telephone: req.body.telephone
  });

  User.addUser(newUser, (err, user) => {
    if (err) {
      res.json({
        success: false,
        msg: 'registrazione failed'
      });
    } else {
      newUser.save();
      res.json({
        success: true,
        msg: 'Account registrato '
      });
    }

  });



});

router.get('/profile/:name', (req, res) => {
  User.getUserByName(req.params.name, (err, user) => {
    if (err) {
      res.json({
        success: false,
        msg: 'errore'
      })
    } else {
      res.json({
        success: true,
        user: user
      })
    }
  })

});

/* ===============================================================
     UPDATE User
  =============================================================== */
router.put('/profile/:id', (req, res) => {

  User.update({
    _id: req.params.id
  }, {
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    telephone: req.body.telephone

  }, function (err, numberAffected, rawResponse) {
    //handle it
    if (err) throw err;
    res.json({
      msg: 'aggiornato'
    })
  })

});



router.delete('/:id', function (req, res, next) {
  User.remove({
    _id: req.params.id
  }, function (err) {
    if (err) return res.status(500).json({
      error: err
    })
    res.json({
      message: 'Utente eliminato correttamente'
    })
  })
})

module.exports = router;