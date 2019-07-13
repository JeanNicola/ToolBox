'use strict'

const express = require('express'),
      morgan = require('morgan'),
      bodyParser = require('body-parser'),
      port = process.env.PORT || 3000,
      router = require(`${__dirname}/routes/router`),
      app = express()

app
    .set('port', port)
    .use(morgan('dev'))
    .use(bodyParser.urlencoded({extended: false}))
    .use(bodyParser.json())
    .use('/', router)

module.exports = app