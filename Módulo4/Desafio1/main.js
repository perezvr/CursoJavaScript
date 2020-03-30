var promise = function (idade) {
    return new Promise(function (resolve, reject) {

        //Setando timeout (wait) para retorno na requisição
        setTimeout(() => {
            if (idade >= 18)
                resolve('Maior de idade');
            else
                reject('Menor de idade');
        }, 2000);
    })
}

promise(18)
    .then(function (response) {
        console.log(response);
    })
    .catch(function (warn) {
        console.warn(warn);
    });