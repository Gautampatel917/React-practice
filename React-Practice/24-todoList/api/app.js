const express = require('express');
const cookieParser = require('cookie-parser');
const authRouter = require('./routes/authRoute');
const todoRouter = require('./routes/todoRoute');
const globalErrorHandler = require('./utils/globalErrorHandler');

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRouter);
app.use('/api', todoRouter);

app.use(globalErrorHandler);

module.exports = app;
