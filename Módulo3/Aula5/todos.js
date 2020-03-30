var listElements = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = [
    'Fazer café',
    'Estudar JavaScript',
    'Acessar Comunidade Rocketseat'
];

renderTodos();
inputElement.focus();

function renderTodos() {

    listElements.innerHTML = '';

    for (todo of todos) {
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a');

        linkElement.setAttribute('href', '#');

        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onClick', 'deleteTodo(' + pos + ')')

        var linkText = document.createTextNode('Exlcuir');

        linkElement.appendChild(linkText);

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);

        listElements.appendChild(todoElement);
    }
}

function addTodo() {
    var todoText = inputElement.value;

    if (todoText != '') {
        todos.push(todoText);
        inputElement.value = '';
        renderTodos();
        inputElement.focus();
    }
}

buttonElement.onclick = addTodo;
inputElement.addEventListener('keyup', function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        addTodo();
    }
});

function deleteTodo(pos) {
    todos.splice(pos, 1);
    renderTodos();
}