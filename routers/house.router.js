'use strict';

const express = require('express');

const data = require('../database/house-candidates');
const simDB = require('../database/simDB');
const items = simDB.initialize(data);

const router = express.Router();

router.get('/', (req, res) => {
  const query = req.query;
  const list = items.find(query);
  res.json(list);
});

module.exports = router;