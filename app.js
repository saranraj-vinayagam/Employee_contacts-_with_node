const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();

dotenv.config();

app.use(express.json());

mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
    .then(() => {
      console.log("DB connected...!");
      // Start the server after the database connection is established
      app.listen(5500, () => {
        console.log('Server running...!');
      });
    })
    .catch((error) => {
      console.error("DB connection error:", error);
    });

    // Routing Congfigurations
app.use('/api/empcontacts',require('./routes/empcontacts'));