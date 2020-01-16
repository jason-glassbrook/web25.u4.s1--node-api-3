/***********************************************************
  requireRequestConforms
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

const requireRequestConforms = (shape, restOfErrorMessage = '', restOfError = {}) => (ri, ro, next) => {
  const requestConforms = _.conforms (shape) (ri)

  if (not (requestConforms)) {
    respondWithError (
      400,
      ` -- request must conform with <shape>` + restOfErrorMessage,
      {
        shape : 'please read the documentation',
        ...restOfError,
      },
    ) (ri, ro)
  }
  else {
    next ()
  }
}

/**************************************/

module.exports = requireRequestConforms
