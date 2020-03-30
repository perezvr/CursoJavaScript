//Axios funciona como um encapsulamento do XMLHttpRequest
axios.get('https://api.github.com/users/perezvr')
    //Capturando o 'resolv' da Promise
    .then(function (response) {
        console.log(response);
    })
    //Capturando o 'reject' da Promise
    .catch(function (error) {
        console.warn(error);
    });
