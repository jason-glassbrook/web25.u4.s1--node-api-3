/***********************************************************
  respondWithError
------------------------------------------------------------
  -> here -X
***********************************************************/

const { errors } = require ('./tools/o')

/***************************************
  definition
***************************************/

const respondWithError = (code, restOfErrorMessage = '') => (ri, ro) => {
  ro
    .status (code)
    .json (errors[code] (restOfErrorMessage) (ri, ro))
}

/**************************************/

module.exports = respondWithError
