const express = require('express');
const morgan = require('morgan');

const app = express()

const authRouter = require('./routes/auth');

require('dotenv').config();

app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'))



const PORT = process.env.PORT || 5000;

app.use('/', authRouter)

app.listen(PORT, () => {
    console.log("Running on PORT 5000")
})
