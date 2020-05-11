var usuario = document.getElementById('user');
var selecionaLista = document.getElementById('resultado');
var criaItemLista = document.createElement('li');

 
  var procuraGitHub = document.getElementById('buscar').addEventListener('click', function() {
    return new Promise(function(resolve, reject) {
        selecionaLista.innerHTML = '';
        mostrarCarregando();
        setTimeout(() => {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users/' + usuario.value + '/repos');
        xhr.send(null);
        xhr.onreadystatechange = function() {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              resolve(JSON.parse(xhr.responseText));
          } else {
              reject('Usuário não localizado ou não existe!');
            }
          } 
        }
      }, 3000);
    }) 
      .then(function(response) {
          selecionaLista.innerHTML = '';
          for (const respostas of response) {
            criaItemLista = document.createElement('li');
            var textoItemLista = document.createTextNode(respostas.name);
            criaItemLista.appendChild(textoItemLista);
            selecionaLista.appendChild(criaItemLista);
  
            console.log(respostas.name);
            usuario.value = ''
          }
      })
      .catch(function(error) {
        usuario.value = ''
        selecionaLista.innerHTML = '';
        selecionaLista.innerHTML = error;
        console.clear();
        console.log(error);
      });
  });

function mostrarCarregando() {
  selecionaLista.innerHTML = " ";
  criaItemLista = document.createElement('li');
  var textoItemLista = document.createTextNode('Carregando...');
  criaItemLista.appendChild(textoItemLista);
  selecionaLista.appendChild(criaItemLista);
}

