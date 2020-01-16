/***********************************************************
  requireRequestMatchesWith
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

const requireRequestMatchesWith = (source, customizer, restOfErrorMessage = '', restOfError = {}) => (ri, ro, next) => {
  const requestMatchesWith = _.isMatchWith (customizer) (source) (ri)

  if (not (requestMatchesWith)) {
    respondWithError (
      400,
      ` -- request must match with <source>` + restOfErrorMessage,
      { source , ...restOfError },
    ) (ri, ro)
  }
  else {
    next ()
  }
}

/**************************************/

module.exports = requireRequestMatchesWith
