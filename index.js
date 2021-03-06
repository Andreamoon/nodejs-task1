const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config/database');
const port = 3000;
const route = require('./routes/route');


const app = express();

//con cors permetto a tutti i domini di raggiungere le mie routes
// Middleware
app.use(cors({
  origin: 'http://localhost:4200'
}));

//body-parser mi parsa i dati in entrata tipo json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}))

app.use('/route', route);
// Database Connection
mongoose.connect(config.uri, {
  useMongoClient: true
}, (err) => {
  if (err) {
    console.log('Non è possibile connettersi al  database: ', err);
  } else {
    console.log('Connesso al database: ' + config.db);
  }
});

// On Error
mongoose.connection.on('error', (err) => {
  console.log('Database error: ' + err);
});




//start serve
app.listen(port, () => {
  console.log('server listening on port ' + port);
})

/*
IF LISTEN EADRINUUSE ====>  C:\Windows\System32>  taskkill /F /IM node.exe
*/