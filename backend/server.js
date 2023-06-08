const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const cookieParser = require('cookie-parser');
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db') 
const colors = require('colors');
const port = process.env.PORT || 5000;


connectDB()

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/users',require('./routes/userRoutes'));

app.use(errorHandler);
app.listen(port)