let baseURL = 'https://api.punkapi.com/v2/beers';

const parameters = new URLSearchParameters(window.location.search);

const beerId = parameters.get("id");



const beerIDurl = baseURL + `?ids=${beerID}`
const beerName = parameters.get("name");
const beerNameURL = baseURL + `?beer_name=${beerName}`

const beerImage = parameters.get("image_url")

const beerTagline = parameters.get("tagline");

const alcoholABV = parameters.get("abv");

const bitternessIBU = parameters.get("ibu");

const yeast = parameters.get("yeast");

const hops = parameters.get("hops");

const malt = parameters.get("malt");

const beerImg = parameters.get("")

const food = parameters.get("food");

beerFetch() = fetch(baseURL + `?${BeerId}`)
    .then(function(res) {
        return res.json();
    })
    .then(function(){
        beer.results.forEach(function(element) {
            const node = beerName;
            node.innerHTML += `<p>${element.name}`
        });
    return beer;
    });
    let beer = [];
    beerFetch.then(function(data) {
        beer = data;
    });
    const input = document.getElementById("searchBar").value;  //
    let beerToSearch = "";
    const node = document.getElementById("beerName").value;
    
    input.addEventListener("keyup", function(e) {
        node.innerHTML = "";
        beerToSearch = e.target.value;
        const beerFiltered = beer.results.filter(function (element) {
            return element.name.includes(beerToSearch);
        });
        beerFiltered.forEach(function(element) {
            node.innerHTML += `<p>${element.name}</p>`;
        });
    });

/*const beerFetch = fetch(baseURL)
    .then(function (res) {
      return res.json();
    })
    .then(function (beer) {
      beer.results.forEach(function(element) {
        const node = document.getElementById("myBeer");
        node.innerHTML += `<p>${element.name}</p>`;
      });
      return beer;
    });
    let beer = [];

    beerFetch.then(function(data) {
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
const getThisBeer = {
    return input;
}
*/
//Botón en página de inicio para comenzar lista de referencias
const getBeers = document.getElementById().addEventListener("click", beerFetch());

}

//Función al clicar 'Get random beer' para obtener un elemento de manera aleatoria
const randomBeer() {
    const a = Math.floor(Math.random) * 325;
    return beerFetch(a)}


//Asignar automáticamente un ID a cada <div> de presentación de resultados
const idDIV() {
    document.getElementsByClassName('results').innerHTML= `id=${ID}`;
}  

//Pasar a anterior página de resultados
const prevPage(){
    const pageNoMinus = page--;
    beerFetch = innerHTML= `beers?page=${pageNoMinus}&per_page=15`
}

//Pasar a siguiente página de resultados
const nextPage(){
    const pageNoPlus = page++;
    beerFetch = innerHTML= `beers?page=${pageNoPlus}&per_page=15`
}

