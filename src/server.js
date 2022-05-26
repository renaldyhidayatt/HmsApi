const express = require('express');
const morgan = require('morgan');
const cors = require("cors")
const http = require('http');


const app = express()

require('dotenv').config();

app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'))
app.use(cors())



const PORT = process.env.PORT || 5000;

require("./routes")(app)


if(process.env.NODE_ENV !== 'test'){
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
}


module.exports = app