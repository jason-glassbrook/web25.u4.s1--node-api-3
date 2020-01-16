/// tools ///
const r = require ('../')

/***************************************
  messages
***************************************/

const messages = {
  'hello' : (path) => (r.message (
    `hello! i'm ~${path}.`
  )),
}

/***************************************
  errors
***************************************/

const errors = {
  '400' : (request, thing) => (r.error (
    `bad request to ${request} ${thing}`,
  )),
  '404' : (thing, id) => (r.error (
    `could not find ${thing} with id ${id}`,
  )),
  '500' : () => (r.error (
    `something bad happened`,
  )),
  '501' : (request, path) => (r.error (
    `${request} @ ${path} not implemented ... yet?`,
  )),
}

/**************************************/

module.exports = {
  messages,
  errors
}
