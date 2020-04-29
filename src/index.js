const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

const mongoUri =
  'mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@cluster0-kju2f.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
mongoose.connection.on('connected', () => {
  console.log('Connected to mongo instance');
});
mongoose.connection.on('error', (err) => {
  console.error('Error connection to mongo', err);
});

app.get('/', (req, res) => {
  res.send('Hi there!');
});

app.listen(3000, () => {
  console.log('Listening on port 4000');
});
