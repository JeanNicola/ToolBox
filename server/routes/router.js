'use strict'

const express = require('express'),
      Router = express.Router(),
      controller = require(`${__dirname}/../controller/controller`)

Router
      .post('/example', controller.example)


module.exports = Router