/***********************************************************
  router ~/users
***********************************************************/

/// tools ///
const _ = require ('lodash/fp')
const express = require ('express')
const {
  requireRequestHasBody,
  requireRequestConforms,
  respondWithError,
} = require ('../../middleware')

/***************************************
  setup router
***************************************/

const router = express.Router ()
const db = require ('./db')

/// wares ///

/// requests ///
router.route ('/')
  .get ([
    respondWithError (501),
    (ri, ro) => {},
  ])
  .post ([
    requireRequestHasBody (),
    validateUser (),
    respondWithError (501),
    (ri, ro) => {},
  ])

router.route ('/:user_id')
  .get ([
    respondWithError (501),
    (ri, ro) => {},
  ])
  .put ([
    requireRequestHasBody (),
    validateUser (),
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
    requireRequestHasBody (),
    validatePost (),
    respondWithError (501),
    (ri, ro) => {},
  ])

/***************************************
  middleware
***************************************/

function validateUserId (ri, ro, next) {
  // do your magic!
}

function validateUser (ri, ro, next) {
  return requireRequestConforms (
    {
      'body' : {
        'name' : _.isString,
      }
    },
    ' -- { body : { name : string } }',
  )
}

function validatePost (ri, ro, next) {
  return requireRequestConforms (
    {
      'body' : {
        'text' : _.isString,
      }
    },
    ' -- { body : { text : string } }',
  )
}

/**************************************/

module.exports = router
