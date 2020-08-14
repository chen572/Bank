const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv').config()

const app = express()
const router = require('./server/routes/router')
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost/Bank', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

  next()
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.use('/', router)

const { PORT } = process.env
app.listen(PORT, () => {
  console.log(`server is up on ${PORT}`)
})