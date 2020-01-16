/***********************************************************
  router ~/users
***********************************************************/

/// tools ///
const express = require ('express')

/***************************************
  setup router
***************************************/

const router = express.Router ()

/// wares ///

/// requests ///
router.get ('/', (req, res) => {
  // do your magic!
})

router.get ('/:id', (req, res) => {
  // do your magic!
})

router.delete ('/:id', (req, res) => {
  // do your magic!
})

router.put ('/:id', (req, res) => {
  // do your magic!
})

/***************************************
  middleware
***************************************/

function validatePostId (req, res, next) {
  // do your magic!
}

/**************************************/

module.exports = router
