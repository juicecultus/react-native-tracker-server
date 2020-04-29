const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config({ path: './.env' });

const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(authRoutes);

mongoose.connect(process.env.MONGO_URI, {
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
  console.log('Listening on port 3000');
});
