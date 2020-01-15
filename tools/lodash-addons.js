// const shapeOf = {
//   post : ['title', 'contents'],
//   comment : ['post_id', 'text'],
// }

const pickShapeOf = (shape) => (
  _.flow ([
    // _.tap ((x) => console.log ('- before:', x)),
    _.pick (shape),
    // _.tap ((x) => console.log ('- after:', x)),
  ])
)

const hasShapeOf = (shape) => (
  _.flow ([
    // _.tap ((x) => console.log ('- :', x)),
    _.keys,
    // _.tap ((x) => console.log ('- :', x)),
    _.difference (shape),
    // _.tap ((x) => console.log ('- :', x)),
    _.isEmpty,
    // _.tap ((x) => console.log ('- :', x)),
  ])
)

const log = (message) =>
  _.tap ((x) => console.log (message, x))

const logInit = (fun) =>
  _.flow ([
    log ('- init:'),
    fun,
  ])

const logExit = (fun) =>
  _.flow ([
    fun,
    log ('- exit:'),
  ])

const logEnds = (fun) =>
  // _.flow ([ logInit, logExit ]) (fun)
  _.flow ([
    log ('- init:'),
    fun,
    log ('- exit:'),
  ])
