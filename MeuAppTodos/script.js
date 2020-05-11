var listElement = document.querySelector('#app ul')
var inputElement = document.querySelector('#app input')
var buttonElement = document.querySelector('#app button')

var todos = JSON.parse(localStorage.getItem('list_todos')) || []

function renderTodos() {
  listElement.innerHTML = ''
  for (const todo of todos) {

    var listItens = document.createElement('li')
    var textItens = document.createTextNode(todo)

    var linkElement = document.createElement('a')
    var textLink = document.createTextNode(' Excluir')
    linkElement.setAttribute('href', '#')
    
    linkElement.appendChild(textLink)

    var pos = todos.indexOf(todo)

    linkElement.setAttribute('onclick', 'deleteTodos(' + pos + ')')
    
    listItens.appendChild(textItens)
    listItens.appendChild(linkElement)
    listElement.appendChild(listItens)    
  }  
}
renderTodos()

function addTodos() {
  var newTodo = inputElement.value
  todos.push(newTodo)
  inputElement.value = ''
  renderTodos()
  saveToStorage()
}

function deleteTodos(pos) {
  todos.splice(pos, 1)
  renderTodos()
  saveToStorage()
}

function saveToStorage(){
  localStorage.setItem('list_todos', JSON.stringify(todos))
}
