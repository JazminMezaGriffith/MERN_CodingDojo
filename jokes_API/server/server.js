const express = require('express');
const mongoose = require('mongoose');
const jokesRoutes = require('./routes/jokes.routes');
const { PORT } = require('./config/config');

const app = express();
require('./config/mongoose.config');

app.use(express.json());

app.use('/api/jokes', jokesRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
