/***********************************************************
  requireRequestHasBody
------------------------------------------------------------
  -> here -> next
  -> here -X
***********************************************************/

const _ = require ('lodash/fp')
const { not } = require ('../tools')
const respondWithError = require ('./respondWithError')

/***************************************
  definition
***************************************/

const requireRequestHasBody = (thing) => (ri, ro, next) => {
  const isValid = _.conforms ({
    'body' : _.isObject,
  })

  if (not (isValid (ri))) {
    respondWithError (400,
      `${thing} -- request must contain { body : object }`
    ) (ri, ro)
  }
  else {
    next ()
  }
}

/**************************************/

module.exports = requireRequestHasBody
