let baseURL = 'https://api.punkapi.com/v2/beers';
const params = new URLSearchParams(window.location.search);
const beerId = params.get("id");
const beerName = params.get("name");
const beerImage = params.get("image_url")
const beerTagline = params.get("tagline");
const beerDescription = params.get("description");
const alcoholABV = params.get("abv");
const bitternessIBU = params.get("ibu");
const yeast = params.get("yeast");
const hops = params.get("hops");
const malt = params.get("malt");
const food = params.get("food_pairing");
const beer = [];





//DATOS

//https://api.punkapi.com/v2/beers?page=3&per_page=25

const node = document.getElementById("dataTable");

const getDetails = () => {
    fetch(baseURL)
        .then(res => res.json())
        .then(beer => 
            beer = params.get.name,
                node.innerHTML =`
                  <tr>
                <td colspan="2", rowspan="4"><img src="${beer.image_url} alt="Picture of ${beerName}"></img></td>  
                    <th colspan="2">Name</th>
                    <th colspan="2">Tagline</th></tr>
                    <td colspan="2">${beer.name}</td>
                    <td colspan="2">${beer.tagline}</td>
                <tr>
                    <th colspan="4">Description</th></tr>
                    <td colspan="4">${beer.description}</td>
                <tr>
                    <th colspan="2">Hops</th>
                    <th colspan="2">Yeast</th>
                    <th colspan="2">Malt</th>
                </tr>
                <tr>
                    <td colspan="2">${beer.hops}</td>
                    <td colspan="2">${beer.yeast}</td>
                    <td colspan="2">${beer.malt}</td>
                </tr>
                <tr>
                    <th colspan="3">Alc.%</th>
                    <th colspan="3">IBU bitterness</th>
                </tr>
                <tr>
                    <td colspan="3">${beer.abv}</td>
                    <td colspan="3">${beer.ibu}</td>
                </tr>
                <tr>
                <th colspan="6">Food suggestions</th>
                </tr>
                <tr>
                <td colspan="6">${beer.food_pairing}</td>
                </tr>
                `     
        );
        return getDetails();
}


const searchBeer = () =>{
    const search = document.getElementById('search').addEventListener("click", searchBeer())
    search.innerHTML= `<a href="detail.html?"></a>`
}


//MAPA

/*const randLatitude =  (max) => {
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
      'Map data & copy; OpenStreetMap contributors, Imagery © Mapbox',
    maxZoom: 18,
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
    accessToken: MAPBOX_TOKEN,
  }
).addTo(map);


const popup = L.popup() 
    .setLatLng([randLatitude(), randLongitude()])
    .setContent(`<h3>${params.name}</h3> is brewed here`)
    .openOn(map);
*/
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

const randomBeer = () => fetch("https://api.punkapi.com/v2/beers/random")
    .then((res) => res.json()
    .then((randData) => {
        const node = document.getElementById("results");
        node.innerHTML= `<a href="detail.html"></a>`
        return randData
    })
    .catch((err) => err('Could not find data'))
    )
document.getElementById('randomButton').addEventListener("click", randomBeer)