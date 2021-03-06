/***********************************************************
  respondWithError
------------------------------------------------------------
  -> here -X
***********************************************************/

const { errors } = require ('./tools/o')

/***************************************
  definition
***************************************/

const respondWithError = (code, ...rest) => (ri, ro) => {
  ro
    .status (code)
    .json (errors[code] (...rest) (ri, ro))
}

/**************************************/

module.exports = respondWithError
