//mapa:
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
      'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
    accessToken: MAPBOX_TOKEN,
  }
).addTo(map);





//DATA FETCH
const baseURL = "https://api.punkapi.com/v2/beers";
const parameters = new URLSearchParams(window.location.search);
const beerID = parameters.get("id");
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


//Info en detailUp
const detailUp = {
    document.getElementById("detailUp").innerHTML = `<h2>Name</h2><p>${beerName}</p><h2>Tagline</h2><p>${beerTagline}</p>`
}


//Info en detailMid
/*const imageDiv = {
    document.getElementById("beerImg").innerHTML = `${beerImg()}`
}

const hopsYeastMaltDiv = {
    document.getElementById("HopsYeastMalt").innerHTML = `<h2>Hops</h2><p>${hops}</p><h2>Yeast</h2><p>${yeast}</p><h2>Malt</h2><p>${malt}</p>`
}

*/

//Info en detailBott

const detailUp = {
    let detail= document.getElementById("detailBott");
    document.getElementById("detailBott").innerHTML = `<h2>Food</h2><p>${food}</p>`,
}




//Popup con nombre de cerveza
const popup = L.popup()
    .setLatLng([randLatitude(), randLongitude()])
    .setContent(`${beerName} is brewed here`)
    .openOn(map);