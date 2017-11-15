const express = require('express');
const router = express.Router();
const config = require('../config/database');
const User = require('../models/users');

/* =======================================0
API CHE MI INSERISCE UN UTENTE
===============================================*/
router.post('/addUser', (req, res) => {

  User.addUsers(req, res);
});

/*==================================================
API CHE MI TORNA TUTTI GLI UTENTI
===================================================*/
router.get('/', (req, res) => {
  User.getUsers(req, res)
});

/*==============================================
API CHE TRAMITE ID TORNA UN UTENTE SPECIFICO
================================================*/
router.get('/user/:id', (req, res) => {
  User.getUserById(req, res);
});

/*==============================================
API CHE MI TORNA GLI UTENTI CON LO STESSO NOME
================================================*/
router.get('/users/:name', (req, res) => {

  User.getUserByName(req, res);
});

/* ===============================================================
    API PER LA MODIFICA DI UN UTENTE TRAMITE ID
  =============================================================== */
router.put('/editUsers/:id', (req, res) => {
  User.updateUser(req, res);
});


/* ===============================================================
    API PER LA CANCELLAZIONE DI UN UTENTE TRAMITE ID
  =============================================================== */
router.delete('/deleteUser/:id', function (req, res, next) {
  User.deleteUser(req, res);
})

module.exports = router;