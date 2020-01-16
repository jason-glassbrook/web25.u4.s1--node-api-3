/***********************************************************
  router ~/api
***********************************************************/

/// tools ///
const express = require ('express')
const { respondWithError } = require ('../middleware')

/// routers ///
const routers = {
  users : require ('./users/router'),
  posts : require ('./posts/router'),
}

/***************************************
  setup router
***************************************/

const router = express.Router ()

router.use ('/users', routers.users)
router.use ('/posts', routers.posts)

router.route ('*')
  .all (respondWithError (501))

/**************************************/

module.exports = router
