//DATA FETCH
let baseURL = 'https://api.punkapi.com/v2/beers';
let beerOne;
const params = new URLSearchParams(window.location.search);
const beerId = params.get("id");

const beerIDurl = baseURL + `?id=${beerId}`
const beerName = params.get("name");
const beerNameURL = baseURL + `?name="${beerName}"`

const beerImage = params.get("image_url")
const beerImageURL = baseURL + `?image_url=${beerImage}`

const beerTagline = params.get("tagline");
const beerTaglineURL = baseURL + `?tagline="${beerTagline}"`

const beerDescription = params.get("description");
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



const node = document.getElementById("dataTable");

//document.getElementById('beer-detail') = beerDetail;

/* ----------- IMAGEN EN TABLA DE DETALLES -----------
function loadImage(src, parent, callback) {
    let img = document.getElementById('beerImage');
    img.src= beerImage
}
*/



/*
const getBeer = () => {
    const cervezas = fetch('https://api.punkapi.com/v2/beers/random')
        .then(function(response) {
            return response.json()
        }).then(function(beer) {
            beer.forEach(element => {
                const node = document.getElementById("container")
                node.innerHTML += createDiv(element)
            });
            return beer
        })
    return cervezas;
}
*/

const getDetails = () => {
    fetch(baseURL+`/${beerId}`)
        .then(res => res.json())
        .then(element => 
            URLSearchParams.forEach(){
                node.innerHTML =`
                  <tr>
                <td colspan="2", rowspan="4"><img src="${element.image_url} alt="Picture of ${beerName}"></img></td>  
                    <th colspan="2">Name</th>
                    <th colspan="2">Tagline</th></tr>
                    <td colspan="2">${element.name}</td>
                    <td colspan="2">${element.tagline}</td>
                <tr>
                    <th colspan="4">Description</th></tr>
                    <td colspan="4">${element.description}</td>
                <tr>
                    <th colspan="2">Hops</th>
                    <th colspan="2">Yeast</th>
                    <th colspan="2">Malt</th>
                </tr>
                <tr>
                    <td colspan="2">${element.hops}</td>
                    <td colspan="2">${element.yeast}</td>
                    <td colspan="2">${element.malt}</td>
                </tr>
                <tr>
                    <th colspan="3">Alc.%</th>
                    <th colspan="3">IBU bitterness</th>
                </tr>
                <tr>
                    <td colspan="3">${element.abv}</td>
                    <td colspan="3">${element.ibu}</td>
                </tr>
                <tr>
                <th colspan="6">Food suggestions</th>
                </tr>
                <tr>
                <td colspan="6">${element.food_pairing}</td>
                </tr>
                `     
        );
        
}
getDetails();

/*
const prevBeer = () => {
    let beerId = beerId-1;
    fetch(detailURL)
    .then(res => res.json())
    .then(id2 => id2.forEach(element => 
        node.innerHTML += `${element.beerId}`))
    return prevBeer();
};


const nextBeer = () => {
    let beerId = beerId+1;
    fetch(detailURL)
    .then(res => res.json())
    .then(data => data.forEach(element => 
        node.innerHTML += `${element.beerId}`))
    return nextBeer();
};
*/


//MAPA

const randLatitude =  (max) => {
    let rand = Math.random() * (90) + 1;
    let num = Math.round(Math.random()) ? 1 : -1;
    return rand*num
}

const randLongitude= (max) => {
    let rand = Math.random() * (180) + 1;
    let num = Math.round(Math.random()) ? 1 : -1;
    return rand*num
}

const map = L.map('mapid').setView([randLatitude(), randLongitude()], 3);
    
const MAPBOX_TOKEN = 'pk.eyJ1IjoiZ2lyZ2V0dG8iLCJhIjoiY2pqeTN3Z3p0MnZ4eDNybWF6NjFyeTJybCJ9.EpIVsQVachGWPiHwCijVOg';

L.tileLayer(
  `https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}`,
  {
    attribution:
      'Map data &copy; OpenStreetMap contributors, Imagery © Mapbox',
    maxZoom: 18,
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
    accessToken: MAPBOX_TOKEN,
  }
).addTo(map);


const popup = L.popup() 
    .setLatLng([randLatitude(), randLongitude()])
    .setContent(`${element.name} is brewed here`)
    .openOn(map);