module.exports = (server) => {
  server.get("/", (request, response) => {
    response.send(200, {
      msg: "Bem vindo ao meu site"
    })
  })
}