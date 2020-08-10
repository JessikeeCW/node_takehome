const db = require('../models/models');

const apptSaver = {};

apptSaver.getAppts = (req, res, next) => {
  const { id } = req.body;
  const getQuery = {
    text: `SELECT * FROM appointments AS a INNER JOIN interviewer AS i ON a.int_id=i.id`,
    values: [id],
  };
  db.query(getQuery)
    .then((all) => {
      res.locals.all = all;
      return next();
    })
    .catch((err) => {
      return next({ log: `Error in the apptSaver.getAppts:${err}` });
    });
};


apptSaver.postAppts = (req, res, next) => {
  const { date, start_time, end_time, int_id, selected } = req.body;
  const postQuery = {
    text: `INSERT INTO appointments (date,start_time,end_time,int_id,selected) VALUES ($1,$2,$3,$4,$5)`,
    values: [date, start_time, end_time, int_id, selected],
  };
  db.query(postQuery)
    .then((save) => {
      res.locals.save = save;
      return next();
    })
    .catch((err) => {
      return next({ log: `Error in the apptSaver.postAppts:${err}` });
    
    });
};

module.exports = apptSaver;
