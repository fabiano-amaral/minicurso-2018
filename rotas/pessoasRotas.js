var pessoas = [{
  nome: "Luiz",
  idade: 20,
  cpf: 1,
  sobrenome: "encomp",
}, {
  nome: "Yuri",
  idade: 21,
  cpf: 2,
  sobrenome: "encomp",
}]

module.exports = (server) => {
  server.get("/pessoas", (request, response) => {
    const cpf = request.query.cpf
    if(cpf) {
      const pessoasFiltradas = pessoas.filter(pessoa => pessoa.cpf == cpf)
      response.send(pessoasFiltradas)
    }
    else {
      response.send(pessoas)
    }
  })

  server.get("/pessoas/:pos", (request, response) => {
    const posicao = request.params.pos
    if(posicao <= pessoas.length) {
      response.send(pessoas[request.params.pos - 1])
    } else {
      response.send(400, {
        error: "indice nao pode ser acessado"
      })
    }
  })

  server.post("/pessoas", (req, res) => {
    const pessoa = req.body.pessoa
    if(pessoa) {
      const tamanho = pessoas.push(pessoa)
      res.send({
        quantidadeDePessoas: tamanho,
        novoVetor: pessoas
      })
    }
    else {
      res.send({
        error: "nenhuma pessoa enviada"
      })
    }
  })
}