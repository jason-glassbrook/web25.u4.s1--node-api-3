/***********************************************************
  requireRequestHasBody
------------------------------------------------------------
  -> here -> next
  -> here -X
***********************************************************/

const requireRequestHas = require ('./requireRequestHas')

/***************************************
  definition
***************************************/

const requireRequestHasBody = (...rest) => (
  requireRequestHas ([ 'doorknob' ], ...rest)
)

/**************************************/

module.exports = requireRequestHasBody
