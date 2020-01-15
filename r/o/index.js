/// tools ///
const r = require ('../')

/***************************************
  messages
***************************************/

const message = {
  'hello' : (path) => (r.message (
    `hello! i'm ~${path}.`
  )),
}

/***************************************
  errors
***************************************/

const error = {
  '400' : (request, thing) => (r.error (
    `bad request to ${request} ${thing}`,
  )),
  '404' : (thing, id) => (r.error (
    `could not find ${thing} with id ${id}`,
  )),
  '500' : () => (r.error (
    `something bad happened`,
  )),
}

/**************************************/

module.exports = {
  message,
  error
}
