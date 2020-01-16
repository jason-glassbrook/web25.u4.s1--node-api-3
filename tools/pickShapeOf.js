/***********************************************************
  pickShapeOf
***********************************************************/

const _ = require ('lodash/fp')
// const log = require ('./log')

/***************************************
  definition
***************************************/

const pickShapeOf = (shape) => (
  _.flow ([
    // log ('- before:'),
    _.pick (shape),
    // log ('- after:'),
  ])
)

/**************************************/

module.exports = pickShapeOf
