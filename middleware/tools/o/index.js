/// tools ///
const r = require ('../')

/***************************************
  messages
***************************************/

const messages = {
  'hello' :
    () => (ri, ro) => (r.message (
      `hello! i'm ~${ri.originalUrl}.`
    )),
}

/***************************************
  errors
***************************************/

const restOfError = (ri, ro) => ({
  method : ri.method,
  route : ri.originalUrl,
})

const errors = {
  '400' :
    (thing) => (ri, ro) => (r.error (
      `bad request to ${ri.method} ${thing}`,
      restOfError (ri, ro),
    )),
  '404' :
    (thing, id) => (ri, ro) => (r.error (
      `could not find ${thing} with id=${id}`,
      restOfError (ri, ro),
    )),
  '500' :
    () => (ri, ro) => (r.error (
      `something bad happened`,
      restOfError (ri, ro),
    )),
  '501' :
    () => (ri, ro) => (r.error (
      `not implemented ... yet?`,
      restOfError (ri, ro),
    )),
}

/**************************************/

module.exports = {
  messages,
  errors
}
