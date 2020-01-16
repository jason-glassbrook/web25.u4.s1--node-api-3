const _ = require ('lodash/fp')

const logger = (ri, ro, next) => {
  const terms = _.remove (_.isNil) ([ ri.method, ri.originalUrl, ri.timestamp ])

  console.log (`--- ${_.join (' - ') (terms)} ---`)

  next ()
}

module.exports = logger
