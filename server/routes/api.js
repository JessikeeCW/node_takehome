const express = require('express');
const api = express.Router();

const apptSaver = require('../controllers/apptSaver');

api.get('/', apptSaver.getAppts, (req,res) => {
  res.status(200).json(res.locals.all);
});
api.post('/post', apptSaver.postAppts, (req,res) => {
  res.status(200).json(res.locals.save);
});

module.exports = api;
