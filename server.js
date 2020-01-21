/***********************************************************
  server
***********************************************************/

/// tools ///
const express = require ('express')
const helmet = require ('helmet')
const {
  timestamper,
  logger,
  respondWithError,
} = require ('./middleware')

/// routers ///
const routers = {
  api : require ('./api/router'),
}

/***************************************
  setup server
***************************************/

const server = express ()

/// wares ///
server.use ([
  helmet (),
  timestamper,
  logger,
])

/// routers ///
server.use ('/api', routers.api)

/// requests ///
server.route ('/')
  .get ((ri, ro) => {
    ro
      .status (200)
      .send (`<h2>Let's write some middleware!</h2>`)
  })

server.route ('*')
  .all (respondWithError (501))

/**************************************/

module.exports = server
