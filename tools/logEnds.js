/***********************************************************
  logEnds
***********************************************************/

const _ = require ('lodash/fp')
const log = require ('./log')

/***************************************
  definition
***************************************/

const logEnds = (fun) =>
  // _.flow ([ logInit, logExit ]) (fun)
  _.flow ([
    log ('- init:'),
    fun,
    log ('- exit:'),
  ])

/**************************************/

module.exports = logEnds
