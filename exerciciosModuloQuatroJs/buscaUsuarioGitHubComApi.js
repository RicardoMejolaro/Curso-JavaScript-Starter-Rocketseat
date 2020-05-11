var usuario = document.getElementById('user');
var resultado = document.getElementById('resultado');

function buscar() {  
  resultado.innerHTML = '';
  console.clear();
  var minhaPromisse = function() {
    return new Promise(function(resolve, reject) {
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
    });
  }  
      minhaPromisse()
      .then(function(response) {
        for (const respostas of response) {
          var selecionaLista = document.getElementById('resultado');
          var criaItemLista = document.createElement('li');
          var textoItemLista = document.createTextNode(respostas.name);
          criaItemLista.appendChild(textoItemLista);
          selecionaLista.appendChild(criaItemLista);

          console.log(respostas.name);
        }
      })
      .catch(function(error) {
        resultado.innerHTML = error;
        console.log(error);
      })

      usuario.value = ''
};

