var listElements = document.getElementById('listRepos');
var inputElement = document.getElementById('nameInput');
var buttonElement = document.getElementById('btnSearch');

function search() {
    //Pegando texto do input
    var todoText = inputElement.value;
    //Resentando a UL
    listElements.innerHTML ='';

    //Axios funciona como um encapsulamento do XMLHttpRequest
    axios.get(`https://api.github.com/users/${todoText}/repos`)
        //Capturando o 'resolv' da Promise
        .then(function (response) {
            for (const repo of response.data) {
                var itemListElement = document.createElement('li');
                var itemListText = document.createTextNode(repo.name);

                itemListElement.appendChild(itemListText);
                listRepos.appendChild(itemListElement);
            }


            console.log(response.data[0].id);
        })
        //Capturando o 'reject' da Promise
        .catch(function (error) {
            console.warn(error);
        });
}




buttonElement.onclick = search;
