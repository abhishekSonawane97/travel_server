const mongoose = require('mongoose');
const dotenv = require("dotenv").config();



mongoose.set('strictQuery', true);


mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true }).then(con => console.log('DB connection established.')).catch(err => console.log('Error : ', err));
