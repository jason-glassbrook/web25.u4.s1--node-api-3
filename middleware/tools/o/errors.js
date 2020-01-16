/***********************************************************
  errors
***********************************************************/

const { error } = require ('../')

/***************************************
  definition
***************************************/

const restOfError = (ri, ro) => ({
  method : ri.method,
  route : ri.originalUrl,
})

const errors = {
  '400' :
    (thing) => (ri, ro) => (error (
      `bad request to ${ri.method} ${thing}`,
      restOfError (ri, ro),
    )),
  '404' :
    (thing, id) => (ri, ro) => (error (
      `could not find ${thing} with id=${id}`,
      restOfError (ri, ro),
    )),
  '500' :
    () => (ri, ro) => (error (
      `something bad happened`,
      restOfError (ri, ro),
    )),
  '501' :
    () => (ri, ro) => (error (
      `not implemented ... yet?`,
      restOfError (ri, ro),
    )),
}

/**************************************/

module.exports = errors
