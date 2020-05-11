var div;

function criar() {
  //cria o elemento
  div = document.createElement('div')
  //applica os estilos no elemento
  div.style.width = '100px'
  div.style.height = '100px'
  div.style.backgroundColor = '#f00'
  div.style.margin = '10px' 
  //adiciona uma classe ao elemento (opcional)
  div.classList.add('quadrado')
  //adiciona um atributo no elemento
  div.setAttribute('onmouseenter', 'getRandomColor()')
  //adiciona o elemento na página
  document.body.appendChild(div)
}

function getRandomColor() {
  var letters = "0123456789ABCDEF"
  var color = "#"
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return div.style.backgroundColor = color
 }

 
 

