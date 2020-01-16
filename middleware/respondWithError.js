/***********************************************************
  respondWithError
------------------------------------------------------------
  -> here -X
***********************************************************/

const { errors } = require ('./tools/o')

/***************************************
  definition
***************************************/

const respondWithError = (code, ...args) => (ri, ro) => {
  ro
    .status (code)
    .json (errors[code] (...args) (ri, ro))
}

/**************************************/

module.exports = respondWithError
