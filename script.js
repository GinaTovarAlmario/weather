
// test connection
console.log('Js ok!');

const apiKey= "cec881978f505d7affe238e8969b488d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=genoa";

// The function makes an HTTP request to the weather API.
// It waits for the response from the API (thanks to await).
// After the response is received, the data can be processed further 

async function checkWeather() {

    const response = await fetch(apiUrl + `&appid=${apiKey}`);  

    // Waits for the response and converts it to a JavaScript object 
    let data = await response.json();

    // Logs the parsed data
    console.log(data);
}
// call the function now!
checkWeather();