var listElements = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = [
    'Fazer café',
    'Estudar JavaScript',
    'Acessar Comunidade Rocketseat'
];

function renderTodos() {

    listElements.innerHTML = '';

    for (todo of todos) {
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        todoElement.appendChild(todoText);
        listElements.appendChild(todoElement);
    }
}

renderTodos();

function addTodo() {
    var todoText = inputElement.value;

    if (todoText != '') {
        todos.push(todoText);
        inputElement.value = '';
        renderTodos();
    }
}

buttonElement.onclick = addTodo;