const express = require("express")
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require("path")
const mongoose = require('mongoose')
const {corsOptions} = require('./config/corsOptions')
const connectDB = require('./config/dbConn')

const app = express()

connectDB()

app.use(
    cors(corsOptions)
)

const PORT = process.env.PORT || 8000


app.use(bodyParser.json());



app.use('/', express.static(path.join(__dirname,'/public')))
app.use('/', require('./routes/root'))

app.use('/products',require('./routes/productRoutes'))
app.use('/comments',require('./routes/commentRoutes'))


app.listen(PORT, ()=>console.log(`server running on port ${PORT}`))