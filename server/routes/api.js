const express = require('express');
const api = express.Router();

const apptSaver = require('../controllers/apptSaver');

api.get('/',apptSaver.getAppts,(res, req) => {
  res.status(200).json(res.locals.data);
})
api.post('/post',apptSaver.getAppts, (res, req) => {
  res.status(200).json(res.locals.data);
});

module.exports= api;