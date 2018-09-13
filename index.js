const restify = require('restify')

const server = restify.createServer()

const msgServidorOn = () => {
  console.log('servidor rodando...')
}

server.listen(3000, msgServidorOn)

