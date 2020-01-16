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
  .post ([
    respondWithError (501),
    (ri, ro) => {},
  ])

router.route ('/:user_id')
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

router.route ('/:user_id/posts')
  .get ([
    respondWithError (501),
    (ri, ro) => {},
  ])
  .post ([
    respondWithError (501),
    (ri, ro) => {},
  ])

/***************************************
  middleware
***************************************/

function validateUserId (req, res, next) {
  // do your magic!
}

function validateUser (req, res, next) {
  // do your magic!
}

function validatePost (req, res, next) {
  // do your magic!
}

/**************************************/

module.exports = router
