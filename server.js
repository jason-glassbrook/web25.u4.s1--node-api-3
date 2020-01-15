/***********************************************************
  server /
***********************************************************/

/// tools ///
const express = require ('express')
const helmet = require ('helmet')

/// routers ///
const routers = {
  api : require ('./api/router'),
}

/***************************************
  setup server
***************************************/

const server = express ()

server.use (helmet ())
server.use (express.json ())
// server.use (logger)

server.use ('/api', routers.api)

server.get ('/',  (ri, ro) => {
  ro.send (`<h2>Let's write some middleware!</h2>`)
})

/***************************************
  helpers
***************************************/

function logger (ri, ro, next) {}

/**************************************/

module.exports = server
