const express = require('express');
const morgan = require('morgan');

const app = express()

const authRouter = require('./routes/auth');
const userRouter = require('./routes/user');
const doctorRouter = require('./routes/doctor');
const doctorSpeRouter = require('./routes/doctorspe');
const appointmentRouter = require('./routes/appointment');

require('dotenv').config();

app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'))



const PORT = process.env.PORT || 5000;

app.use('/', authRouter)
app.use('/', userRouter);
app.use('/', doctorRouter)
app.use('/', doctorSpeRouter);
app.use('/', appointmentRouter);


app.listen(PORT, () => {
    console.log("Running on PORT 5000")
})
