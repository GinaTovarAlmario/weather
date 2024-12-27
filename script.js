
// test connection
console.log('Js ok!');

const apiKey = "cec881978f505d7affe238e8969b488d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// how to get input field
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const weatherIcon = document.querySelector(".weather-icon");

// The function makes an HTTP request to the weather API.
// It waits for the response from the API (thanks to await).
// After the response is received, the data can be processed further 

async function checkWeather(city) {

    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    // Waits for the response and converts it to a JavaScript object 
    let data = await response.json();

    // Logs the parsed data
    console.log(data);

    // now I'm going to select city temp humidity and other parameters from HTML and syn c values
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    // now I need a condition to change image with the weather data received
    switch (data.weather[0].main) {
        case "Clouds":
            weatherIcon.src = "img/clouds.png";
            break;
        case "Rain":
            weatherIcon.src = "img/rain.png";
            break;
        case "Clear":
            weatherIcon.src = "img/clear.png";
            break;
        case "Snow":
            weatherIcon.src = "img/snow.png";
            break;
        case "Drizzle":
            weatherIcon.src = "img/drizzle.png";
            break;
        case "Mist":
            weatherIcon.src = "img/mist.png";
            break;
    }

}
searchBtn.addEventListener("click", () => {
    // call the function now! and get the city typed 
    checkWeather(searchBox.value);
})
