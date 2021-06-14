const beerFetch = fetch("https://api.punkapi.com/v2/")
    .then(function (res) {
      return res.json();
    })
    .then(function (beer) {
      beer.results.forEach(function (element) {
        const node = document.getElementById("myBeer");
        node.innerHTML += `<p>${element.name}</p>`;
      });
      return beer;
    });
    let beer = [];

    beerFetch.then(function (data) {
        beer = data;
    });
  
    const input = document.getElementById("searchBar");
    let beerToSearch = "";
    const node = document.getElementById("myBeer");
    
    input.addEventListener("keyup", function (e) {
        node.innerHTML = "";
        beerToSearch = e.target.value;
        const beerFiltered = beer.results.filter(function (element) {
            return element.name.includes(beerToSearch);
        });
        beerFiltered.forEach(function (element) {
            node.innerHTML += `<p>${element.name}</p>`;
        });
    });

//Función para filtrar cervezas según texto introducido en la searchBar
const getThisBeer(){

}

//Botón en página de inicio para comenzar lista de referencias
const getBeers(){

}

//Función al clicar 'Get random beer' para obtener un elemento de manera aleatoria
const randomBeer(){
    Math.floor(Math.random)
}

//Asignar automáticamente un ID a cada <div> de presentación de resultados
const idDIV() {
    document.getElementsByClassName('results').innerHTML= `id=${ID}`;
}  

//Pasar a anterior página de resultados
const prevPage(){

}

//Pasar a siguiente página de resultados
const nextPage(){

}