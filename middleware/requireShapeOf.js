/***********************************************************
  requireShapeOf
------------------------------------------------------------
  -> () -> next
  -> () -X
------------------------------------------------------------
  ## summary ##

  - middleware that checks that a `request` has a `shape` at a `path` (possibly multiple)
  - `request` "has" the shape of `shape` at `path` if all fields in `shape` exist within `request[...path]` (this is shallow comparison)
  - responds with error 400 on the _first_ failure of a `path`-`shape` comparison
  - calls `next` when all `path`-`shape` comparisons pass

  ## parameters ##

  - `listOfPathsAndShapes` - a list of "paths" and "shapes"
    - is like `[ aPathAndShape {0,} ]`
    - where `aPathAndShape` is like `[ path, shape ]`
    - where `path` is a valid lodash-style path
    - where `shape` is a collection (object, array, etc.)
***********************************************************/

const _ = require ('lodash/fp')
const { hasShapeOf, pickShapeOf } = require ('../tools')
const { respondWithError } = require ('./respondWithError')

/***************************************
  definition
***************************************/

const requireShapeOf = (listOfPathsAndShapes) => (ri, ro, next) => {
  _.forEach (([ path, shape ]) => {

  }) (listOfPathsAndShapes)
}

/**************************************/

module.exports = requireShapeOf
