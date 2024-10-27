let card = document.querySelector("div.empty");
function getWeather(){
let apiKey = 'b20b4e4617b87f7cfe46ad189a3bc0e3';
let city = document.querySelector("#city");



if(city.value === '' || city.value === undefined){

    city.classList.add("error");
    let errormsg = document.querySelector("p#errormsg");
    errormsg.classList.add("error");
    errormsg.innerHTML = "Please enter your city"; 
}

else{
    errormsg.classList.remove("error");
    city.classList.remove("error");
    errormsg.innerHTML = "";
}

let  WeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${apiKey}`; 

fetch(WeatherUrl)
.then(respone => respone.json())
.then(data => {
    displayWeather(data);
    console.log(data);
})


// .catch(error => {
//     console.error('Error fetching current weather data:', error);
//     alert('Error fetching weather data. Please try again '); 

// });




}

function displayWeather(data){

let tempInfo = document.querySelector("div.temp");
let weatherInfo = document.querySelector("p.weather");
let icon = document.querySelector("div.icon");

tempInfo.innerHTML = "";
weatherInfo.innerHTML = "";
icon.innerHTML = "";

if (data.cod === '404'){
    card.classList.add("empty");
    weatherInfo.innerHTML = `${data.message}`; 
}
else{

    let cityName = data.name;
    let temperature = Math.round(data.main.temp - 273.15);
    let description = data.weather[0].description;
    let iconCode = data.weather[0].icon;
    let iconURL = `https://openweathermap.org/img/wn/${iconCode}@4x.png`; 

    let temperatureHTML =

    `${cityName}
    <br> 
    ${temperature}°C`

    let weatherHTML = 

    `
    ${description}
    `;

    tempInfo.innerHTML = temperatureHTML;
    weatherInfo.innerHTML = weatherHTML;


    // icon.innerHTML = iconURL;
    icon.alt = description;
    
    
    card.classList.remove("empty");
    
    // let icon = document.querySelector("div.icon");
    let image = document.createElement("img");
    icon.appendChild(image);
    image.src=""; 
    image.src = `${iconURL}`;
    console.log("Hellow, World!")
    

}

// function showImage(){

//     let icon = document.querySelector("div.icon");
//     let image = document.createElement("img");
//     icon.appendChild(image);
//     image.src = "https://openweathermap.org/img/wn/${iconCode}@4x.png";
//     console.log("Hellow, World!")
    
// }

}