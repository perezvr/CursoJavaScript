//Biblioteca AJAX Promise para auxiliar chamadas assíncronas
var minhaPrimise = function () {
    //Criando a função de retorno (resolv => Será retornado quando a requisição for bem sucedida, 
    //                             reject => Será retornado quando a requisição não for bem sucedida)
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users/perezvr');
        xhr.send(null);

        //Evento para capturar o retorno da chamada
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200)
                    //Retorno para chamada bem sucedida
                    resolve(JSON.parse(xhr.responseText));
                else {
                    //Retorno para chamada mal sucedida
                    reject('Erro na requisição');
                }
            }
        }
    });
}

//Chamando a função de chamada através da promise
minhaPrimise()
    //Capturando o 'resolv' da Promise
    .then(function (response) {
        console.log(response);
    })
    //Capturando o 'reject' da Promise
    .catch(function (error) {
        console.warn(error);
    });