/***************************************
  tools
***************************************/

const kvPairs = (pairs, rest = {}) => ({
  ...rest,
  ...Object.fromEntries (pairs),
})

const message = (text, rest = {}) => kvPairs (
  [[ 'message', text ]], rest
)

const error = (text, rest = {}) => kvPairs (
  [[ 'error', message (text, rest) ]]
)

/**************************************/

module.exports = {
  kvPairs,
  message,
  error,
}
