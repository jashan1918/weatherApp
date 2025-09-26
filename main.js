async function getWeatherData (city) {

const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=SGMPGHFBVYTDNA2DT2FEVDQFB&contentType=json`)

const data = await response.json();
console.log(data);

const heading = document.querySelector("h1");
heading.textContent = data.currentConditions.icon

const condition = data.currentConditions.icon
getGif(condition);
}

async function getGif(gifName) {
    const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=9IMEPOdTe6ckZOL3PGlB8AYx5kDFUgao&s=${gifName}`)
    
    const image = document.querySelector("img");
    const gif = await response.json();
    console.log(gif);

    image.src = gif.data.images.original.url;
}

const inp = document.querySelector("input");

const btn = document.querySelector("button");

btn.addEventListener("click", (e) => {

    e.preventDefault();

    const city = inp.value.trim();
console.log(city);
    if(city) {
        getWeatherData(city);
    }
})



