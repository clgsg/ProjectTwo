let baseURL = 'https://api.punkapi.com/v2/beers';
let beer = []
const searchBar = document.getElementById("searchBar");
let beerToSearch = "";
let beerList = [];
const node = document.getElementById("myBeer");
  
searchBar.addEventListener("keyup", (e) => {
    const searchString = e.target.value;
    const filteredBeers = beerList.filter((beer) => {
        return beer.name.includes(searchString);
    });
    console.log(filteredBeers);
});

node.innerHTML = "";
const beerFiltered = beer.filter(element => {
    return element.name.includes(beerToSearch);
});

beerFiltered.forEach((element) => {
    node.innerHTML += `<p>${element.name}</p>`;
        });

//Función para filtrar cervezas según texto introducido en la searchBar
const getThisBeer = () => fetch(`${baseURL}?beer_name=${beerToSearch}`)
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        console.log(data);
        const node = document.getElementById('results');
        data.forEach = element => {
           node.innerHTML += `<h3 id="nameOfBeer"><a href="/detail/detail.html">${element.name}</a></h3>`
        }; 
        return beer;
    });

getThisBeer();
//Botón en página de inicio para comenzar lista de referencias

const getBeers = () => fetch(`${baseURL}?page=${page}&per_page=15`)
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        console.log(data);
        const node = document.getElementById('myBeer');
        data.forEach((element) => {
           node.innerHTML += `<h3 id="nameOfBeer">${element.name}</h3>`
        }); 
        return beer;
    });

//Función al clicar 'Get random beer' para obtener un elemento de manera aleatoria
const randomBeer = () => fetch("https://api.punkapi.com/v2/beers/random")
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        const node = document.getElementById('myBeer');
        return node.innerHTML= `<a href="/detail/detail.html"></a>`
    })
    



/*Cambiar propiedad de etiqueta html (para cambiar destino de enlace/botón)
var b = document.querySelector("button");//En html hay una etiqueta 'button'
b.setAttribute("name", "helloButton");
b.setAttribute("disabled", "");
*/
