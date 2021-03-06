'use strict';

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const candidateRouter = require('./routers/candidate.router');

const app = express();

app.use(morgan('common'));
app.use(express.static('public'));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/main.html');
});

app.use('/candidates', candidateRouter);

app.listen(process.env.PORT || 8080, () => {
  console.log(`Your app is listening at port ${process.env.PORT || 8080}`);
});