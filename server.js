/***********************************************************
  server /
***********************************************************/

/// tools ///
const express = require ('express')

/// routers ///
const routers = {
  users : require ('./users/userRouter'),
  posts : require ('./posts/postRouter'),
}

/***************************************
  setup server
***************************************/

const server = express ()

server.use (express.json ())
// server.use (logger)

server.use ('/api/users', routers.users)
server.use ('/api/posts', routers.posts)

server.get ('/',  (ri, ro) => {
  ro.send (`<h2>Let's write some middleware!</h2>`)
})

/***************************************
  helpers
***************************************/

function logger (ri, ro, next) {}

/**************************************/

module.exports = server
