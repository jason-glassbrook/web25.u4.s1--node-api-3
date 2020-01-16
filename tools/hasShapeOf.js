/***********************************************************
  hasShapeOf
***********************************************************/

const _ = require ('lodash/fp')
// const log = require ('./log')

/***************************************
  definition
***************************************/

const hasShapeOf = (shape) => (
  _.flow ([
    // log ('- :'),
    _.keys,
    // log ('- :'),
    _.difference (shape),
    // log ('- :'),
    _.isEmpty,
    // log ('- :'),
  ])
)

/**************************************/

module.exports = hasShapeOf
