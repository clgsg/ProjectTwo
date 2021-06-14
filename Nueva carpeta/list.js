let baseURL = 'https://api.punkapi.com/v2/beers';

const params = new URLSearchParams(window.location.search);

const beerId = params.get("id");

const randomPage = Math.round(Math.random()*320);
const randomURL = baseURL + `?id=${randomPage}`

const beerIDurl = baseURL + `?id=${beerId}`
const beerName = params.get("name");
const beerNameURL = baseURL + `?name="${beerName}"`

const beerImage = params.get("image_url")
const beerImageURL = baseURL + `?image_url=${beerImage}`

const beerTagline = params.get("tagline");
const beerTaglineURL = baseURL + `?tagline="${beerTagline}"`

const beerDescription = params.get("tagline");
const beerDescriptionURL = baseURL + `?tagline="${beerDescription}"`

const alcoholABV = params.get("abv");
const alcoholABVURL = baseURL + `?abv="${alcoholABV}"`

const bitternessIBU = params.get("ibu");
const bitternessIBUURL = baseURL + `?ibu="${bitternessIBU}"`

const yeast = params.get("yeast");
const yeastURL = baseURL + `?yeast="${yeast}"`

const hops = params.get("hops");
const hopsURL = baseURL + `?hops="${hops}"`

const malt = params.get("malt");
const maltURL = baseURL + `?malt="${malt}"`

const food = params.get("food_pairing");
const foodURL = baseURL + `?food_pairing="${food}"`

const beer = [];

const beerFetch = () =>
    fetch(`${baseURL}`)  ///${beerId}
      .then( (res) => res.json()
      .then((results) => {
        console.log(results);
        const node = document.getElementById("results");
        results.forEach((element) => {
          node.innerHTML += `<h3 id="nameOfBeer"><img src=${element.image_url} id="beerImage"><a href="../detail/detail.html</a></h3>`;
        });
        return beer;
      }));
      
beerFetch();


//Función al clicar 'Get random beer' para obtener un elemento de manera aleatoria


const randomBeer = () => fetch("https://api.punkapi.com/v2/beers/random")
    .then((res) => res.json()
    .then((randData) => {
        const node = document.getElementById("results");
        node.innerHTML= `<a href="../detail/detail.html?"></a>` //  id=${randomPage}
        return randData
    })
    .catch((err) => err('Could not find data'))
    )
document.getElementById('randomButton').addEventListener("click", randomBeer)
//randomBeer()

