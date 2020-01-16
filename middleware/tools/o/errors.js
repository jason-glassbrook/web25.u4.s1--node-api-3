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
    (restOfErrorMessage = '') => (ri, ro) => (error (
      `bad request` + restOfErrorMessage,
      restOfError (ri, ro),
    )),
  '404' :
    (restOfErrorMessage = '') => (ri, ro) => (error (
      `resource not found` + restOfErrorMessage,
      restOfError (ri, ro),
    )),
  '500' :
    (restOfErrorMessage = '') => (ri, ro) => (error (
      `something bad happened` + restOfErrorMessage,
      restOfError (ri, ro),
    )),
  '501' :
    (restOfErrorMessage = '') => (ri, ro) => (error (
      `not implemented ... yet?` + restOfErrorMessage,
      restOfError (ri, ro),
    )),
}

/**************************************/

module.exports = errors
