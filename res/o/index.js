/// tools ///
const r = require ('../')

/***************************************
  messages
***************************************/

const messages = {
  'hello' :
    () => (ri, ro) => (r.message (
      `hello! i'm ~${ri.path}.`
    )),
}

/***************************************
  errors
***************************************/

const errors = {
  '400' :
    (thing) => (ri, ro) => (r.error (
      `bad request to ${request} ${thing}`,
    )),
  '404' :
    (thing, id) => (ri, ro) => (r.error (
      `could not find ${thing} with id ${id}`,
    )),
  '500' :
    () => (ri, ro) => (r.error (
      `something bad happened`,
    )),
  '501' :
    () => (ri, ro) => (r.error (
      `${ri.method} @ ${ri.path} not implemented ... yet?`,
    )),
}

/**************************************/

module.exports = {
  messages,
  errors
}
