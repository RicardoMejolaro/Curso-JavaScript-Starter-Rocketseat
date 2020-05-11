var endereco = {
  rua: "Rua dos Pinheiros",
  numero: 1293,
  bairro: "Centro",
  cidade: "São Paulo",
  uf: "SP"
};

function mostraEndereco() {

  return `O usuário mora em: ${endereco.cidade} / ${endereco.uf}, no bairro: 
  ${endereco.bairro}, na rua: ${endereco.rua}, no número: ${endereco.numero}.`

}

console.log(mostraEndereco())