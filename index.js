/**********************************************************/

const server = require ('./server.js')
const port = 5555

server.listen (port, () => {
  console.log (`it's alive!`)
  console.log (`\n>>> listening on port ${port} <<<\n`)
})
