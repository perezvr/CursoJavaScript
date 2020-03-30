var listElements = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

//Definindo a lista a partir do storage
var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

renderTodos();
inputElement.focus();

function renderTodos() {

    listElements.innerHTML = '';

    for (todo of todos) {
        //Criar o item da lista
        var todoElement = document.createElement('li');
        //Definindo o texto 
        var todoText = document.createTextNode(todo);
        //Criando o link
        var linkElement = document.createElement('a');

        //Definindo como link
        linkElement.setAttribute('href', '#');

        //Pegando a posição para poder ser deletado
        var pos = todos.indexOf(todo);
        //Definindo o evento de click
        linkElement.setAttribute('onClick', 'deleteTodo(' + pos + ')')

        //Definindo um texto para o link
        var linkText = document.createTextNode('Exlcuir');

        //Incluindo o texto no link
        linkElement.appendChild(linkText);

        //incluindo os componentes dentro do item da lista
        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);

        //Incluindo o item na própria lista
        listElements.appendChild(todoElement);
    }
}

function addTodo() {
    //Pegando texto do input
    var todoText = inputElement.value;

    //Verificando se há algo digitado
    if (todoText != '') {
        //Incluindo o texto dentro do vetor de todos
        todos.push(todoText);
        //Resetando o input
        inputElement.value = '';
        //Listando novamente
        renderTodos();
        //Definindo foco
        inputElement.focus();
        //Salvando todos no storage
        saveToStorage();
    }
}
//Definindo evento de click do botão
buttonElement.onclick = addTodo;
//Definindo key up do input
inputElement.addEventListener('keyup', function (event) {
    //Verificando se pressionou Enter
    if (event.keyCode === 13) {
        event.preventDefault();
        //Adicionando item na lista
        addTodo();
    }
});

function deleteTodo(pos) {
    //Deleta um item do vetor (posição, quantidade a partir da posição)
    todos.splice(pos, 1);
    //Listando novamente
    renderTodos();
    //Salvando no storage
    saveToStorage();
}

function saveToStorage() {
    //Grava a lista no storage como JSON
    localStorage.setItem('list_todos', JSON.stringify(todos));
}