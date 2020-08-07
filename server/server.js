const express  =require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const path = require('path');

const api = require('./routes/api');

const app = express();
const PORT = process.env.URI || 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', api);

//catches any unknown request
app.use((req, res) => {
  console.log('in catch-all route handler');
  res.sendStatus(404);
});

//global error handler
app.use((req, res,err) => {
  console.log(`global error handler error:${err}`);
  res.sendStatus(400).json({ err: 'an error has occured' });
})

app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`)
})
