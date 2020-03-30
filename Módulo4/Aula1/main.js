//Criando o objeto para requisições Ajax assíncronas
var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.github.com/users/perezvr');
xhr.send(null);

//Evento para capturar o retorno da chamada assíncrona
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4)
        console.log(JSON.parse(xhr.responseText));
}