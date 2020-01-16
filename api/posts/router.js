/***********************************************************
  router ~/users
***********************************************************/

/// tools ///
const express = require ('express')
const { respondWithError } = require ('../../middleware')

/***************************************
  setup router
***************************************/

const router = express.Router ()

/// wares ///

/// requests ///
router.route ('/')
  .get ([
    respondWithError (501),
    (ri, ro) => {},
  ])

router.route ('/:post_id')
  .get ([
    respondWithError (501),
    (ri, ro) => {},
  ])
  .put ([
    respondWithError (501),
    (ri, ro) => {},
  ])
  .delete ([
    respondWithError (501),
    (ri, ro) => {},
  ])

/***************************************
  middleware
***************************************/

function validatePostId (req, res, next) {
  // do your magic!
}

/**************************************/

module.exports = router
