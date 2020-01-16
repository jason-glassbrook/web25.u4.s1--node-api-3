/***********************************************************
  requireRequestMatches
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

const requireRequestMatches = (source, restOfErrorMessage = '', restOfError = {}) => (ri, ro, next) => {
  const requestMatches = _.isMatch (source) (ri)

  if (not (requestMatches)) {
    respondWithError (
      400,
      ` -- request must match <source>` + restOfErrorMessage,
      { source , ...restOfError },
    ) (ri, ro)
  }
  else {
    next ()
  }
}

/**************************************/

module.exports = requireRequestMatches
