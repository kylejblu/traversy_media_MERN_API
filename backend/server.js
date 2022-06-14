const express = require('express');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 5000;
const {errorHandler} = require('./middleware/errorMiddleware')
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(errorHandler)


app.listen(5000, () => {
  console.log('Server started on port ' + PORT);
});

app.use('/api/goals', require('../routes/goalRoutes'));
