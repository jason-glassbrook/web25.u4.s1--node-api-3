const reso = require ('../res/o')

const respondWithError = (code, ...args) => (ri, ro) => {
  ro
    .status (code)
    .json (reso.errors[code] (...args) (ri, ro))
}

module.exports = respondWithError
