let baseURL = 'https://api.punkapi.com/v2/beers';

const beer = [];
const params = new URLSearchParams(window.location.search);
const searchBar = document.getElementById("searchBar");

let stringToSearch = params.get("name");
let stringIncludes = stringToSearch.includes("");
const node = document.getElementById("myBeer");


const beerId = params.get("id");

const beerIDurl = baseURL + `?id=${beerId}`
const beerName = params.get("name");
const beerNameURL = baseURL + `?name="${beerName}"`





//Función para filtrar cervezas según texto introducido en la searchBar

const filterBeers = () => {
    searchBar.addEventListener('keyup', (e) => {
        const searchString = e.target.value.toLowerCase();
        const filteredBeers = beerList.filter((filtBeer) => {
            return filtBeer.name.toLowerCase().includes(searchString)
            });
        displayBeers(filteredBeers);
    });
filterBeers();

document.getElementById('search').addEventListener('click', getThisBeer)

const getThisBeer = () => fetch(`${baseURL}?beer_name=${beerToSearch}`)
    .then((res) => res.json())
    .then((inputBeer) => {
        console.log(data);
        const node = document.getElementById('myBeer');
        inputBeer.forEach = element => {
            node.innerHTML += `<h3 id="nameOfBeer"><a href="/detail/detail.html">${element.name}</a></h3>`
            //node.innerHTML += `<h3 id="nameOfBeer">${element.name}</h3>`}; 
        return beer;
    };

const getBeer = async (id) => {
    [beer] = await getData(`https://api.punkapi.com/v2/beers/${id}`);
    const detail = document.getElementById('beer-detail');
    detail.innerHTML= `${beer.name} | ${beer.tagline} | ${beer.image_url}`;
        };
    getBeer();



//Lista de referencias

document.getElementById('getBeers').addEventListener('click', getBeers)
const getBeers = () => fetch(`${baseURL}`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        const node = document.getElementById('myBeer');
        data.forEach((element) => {
           node.innerHTML += `<h3 id="nameOfBeer">${element.name}</h3>`
        }); 
        return beer;
    });

//Función al clicar 'Get random beer' para obtener un elemento de manera aleatoria
document.getElementById('getBeers').addEventListener('click', randomBeer)
const randomBeer = () => {
    fetch("https://api.punkapi.com/v2/beers/random")
    .then((res) => res.json())

    .then((randBeer) => {
        document.getElementById('randomBeer') = randBeer;
        return randBeer.innerHTML= `<a href="/detail/detail.html"></a>`
    }
