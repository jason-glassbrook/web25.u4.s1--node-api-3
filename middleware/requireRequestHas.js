/***********************************************************
  requireRequestHas
------------------------------------------------------------
  -> here -> next
  -> here -X
***********************************************************/

const _ = require ('lodash/fp')
const { not, hasPaths } = require ('../tools')
const respondWithError = require ('./respondWithError')

/***************************************
  definition
***************************************/

const requireRequestHas = (paths) => (ri, ro, next) => {
  const condition = hasPaths (paths)

  if (not (condition (ri))) {
    respondWithError (400,
      `-- request must have paths: ${_.join ('\n- ') (['', ...paths])}`
    ) (ri, ro)
  }
  else {
    next ()
  }
}

/**************************************/

module.exports = requireRequestHas
