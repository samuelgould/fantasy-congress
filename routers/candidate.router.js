'use strict';

const express = require('express');

const data = require('../database/candidates');
const simDB = require('../database/simDB');
const candidates = simDB.initialize(data);

const router = express.Router();

router.get('/', (req, res) => {
  const query = req.query;
  const list = candidates.find(query);
  res.json(list);
});

module.exports = router;