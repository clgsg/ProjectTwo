/*
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
const paintBeerName = () => {
    let a = document.getElementById("beerName").innerHTML;
    return a+`<p>${beerName}</p>`;
};

const paintTagline = () => {
    let b = document.getElementById("tagline").innerHTML;
    return b+`<p>${beerTagline}</p>`;
};



//Info en detailMid
const imageDiv = () => {
    let c = document.getElementById("beerImg").innerHTML;
    return c+`${image_url}`;
}

const paintHops = () => {
    let d= document.getElementById("hops").innerHTML;
    return d+`<p>${element.hops}</p>`;
}
 
const paintYeast = () => {
    let d= document.getElementById("yeast").innerHTML;
    return d+`<p>${element.yeast}</p>`
}

const paintMalt = () => {
    let d= document.getElementById("malt").innerHTML;
    return d+`<p>${element.malt}</p>`
}

//Botón 'prevBeer'



//Botón 'nextBeer'




//Info en detailBott

const detailBott = () => {
    document.getElementById("detailBott").innerHTML = `<h2>Food</h2><p>${element.food}</p>`;
}




//Popup con nombre de cerveza
const popup = L.popup()
    .setLatLng([randLatitude(), randLongitude()])
    .setContent(`${beerName} is brewed here`)
    .openOn(map);*/

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
let beerOne;
const parameters = new URLSearchParams(window.location.search);
const beerId = parameters.get("id");
const detailDetailURL = `https://api.punkapi.com/v2/beers/${beerId}`;
const node = document.getElementById("beer-detail");
const fetchDetails = () =>
    fetch(detailDetailURL)
        .then((res) => {
        return res.json();
    })
        .then((beer) => {
    beerOne=beer;
    console.log(beer);
    beer.forEach((element) => {
        console.log(element)
        node.innerHTML += `
        <div id="beer-detail">
            <div class="detail" id="detailUp">
                <h2 id="beerName">Name</h2>
                <p>${element.name}</p>
                <h2 id="tagline">Tagline</h2>
                <p>${element.tagline}</p>
            </div>
            <div class="detail" id="detailMid">
                <div class="subdetailMid" id="beerImage"></div>
                <div class="subdetailMid" id="hops"><h2>Hops</h2>
                <p>${element.hops}</p>
                </div>
                <div class="subdetailMid" id="yeast"><h2>Yeast</h2>
                <p>${element.yeast}</p>
                </div>
                <div class="subdetailMid" id="malt"><h2>Malt</h2>
                <p>${element.malt}</p>
                </div>
            </div>
            <div class="detail" id="detailBott">
                <h2>Food</h2>
                <p>${element.food}</p>
            </div>          
        </div>`;
        
    });
    return beer;
  });


fetchDetails();


//Popup con nombre de cerveza
/*const popup = L.popup()
    .setLatLng([randLatitude(), randLongitude()])
    .setContent(`${beerName} is brewed here`)
    .openOn(map)*/