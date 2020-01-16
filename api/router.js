/***********************************************************
  router ~/api
***********************************************************/

/// tools ///
const express = require ('express')

/// routers ///
const routers = {
  users : require ('./users/router'),
  posts : require ('./posts/router'),
}

/// wares ///
const respondWithError = require ('../middleware/respondWithError')

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
