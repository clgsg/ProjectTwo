let baseURL = 'https://api.punkapi.com/v2/beers';

const parameters = new URLSearchParams(window.location.search);

const beerId = parameters.get("id");



const beerIDurl = baseURL + `?ids=${beerId}`
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
const beer = [];
/*const beerFetch = () => fetch(`${baseURL}?${beerId}`)
    .then(function(res) {
        return res.json();
    })
    .then(function(results){
        console.log(results);
        const node = document.getElementById('results');
        results.forEach(function(element) {
           node.innerHTML += `<h3 id="nameOfBeer"><a href="/detail/detail.html">${element.name}</a></h3>`
        }); 
    return beer;
    });
    let beerList = [];*/
const beerFetch = () =>
    fetch(`${baseURL}`)  ///${beerId}
      .then( (res) => {
        return res.json();
      })
      .then((results) => {
        console.log(results);
        const node = document.getElementById("results");
        results.forEach( (element) => {
          node.innerHTML += `<h3 id="nameOfBeer"><img src=${element.image_url} id="beerImage"><a href="../detail/detail.html?id=${element.id}">${element.name}</a></h3>`;
        });
        return beer;
      });
beerFetch();


//Función al clicar 'Get random beer' para obtener un elemento de manera aleatoria
const randomBeer = () => fetch("https://api.punkapi.com/v2/beers/random")
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        const node = document.getElementById('results');
        return node.innerHTML= `<a href="/detail/detail.html"></a>`
    })


//Pasar a anterior página de resultados
const prevPage = () => {
    let b = document.querySelector('#button')
    beerFetch = innerHTML= `beers?page=${pageNoMinus}&per_page=15`
}

//Pasar a siguiente página de resultados
const nextPage = () => {
    beerFetch = innerHTML= `beers?page=${pageNoPlus}&per_page=15`
}

