const express = require('express')
const mongoose = require('mongoose');
const app = express()
const dotenv = require('dotenv')
const routesPath = require('./router/signuprouer');
const cors = require('cors');

dotenv.config()
mongoose.connect(process.env.DATABASE,()=>console.log("DATABSE IS CONNECTED"))

app.use(express.json())
app.use(cors())
app.use('/app',routesPath)

app.listen(5000,()=>console.log("App is Up And Running"));

// mongodb+srv://user:<password>@cluster0.m9kvr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority