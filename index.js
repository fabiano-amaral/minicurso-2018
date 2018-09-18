const restify = require('restify')
const homeRota = require('./rotas/homeRota')
const pessoasRota = require('./rotas/pessoasRotas')
const server = restify.createServer()

server.use(restify.plugins.queryParser())

server.use(restify.plugins.bodyParser()
)

restify1 = {
  plugins: {
    queryParser: () => console.log('faca algo')
  }
}


homeRota(server)
pessoasRota(server)



const msgServidorOn = () => {
  console.log('servidor rodando...')
}

server.listen(3000, msgServidorOn)

