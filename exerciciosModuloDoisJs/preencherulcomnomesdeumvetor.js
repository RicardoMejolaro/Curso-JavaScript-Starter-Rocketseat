var nomes = ["Diego", "Gabriel", "Lucas"];


function adicionar() {
  var novoNome = document.querySelector('#nome')
  var nomeNovo = novoNome.value
  nomes.push(nomeNovo)
  novoNome.value = ''
}

function mostrar() {
  var ul = document.querySelector('#conteudo') 
  ul.innerHTML = ''
  for (const nome of nomes) {   
    var li = document.createElement('li')
    li.innerHTML = nome
    ul.appendChild(li)
  }     
} 






