// set values for temperature in fahrenheit and wind in miles per hour to calculate windchill
let temperature = 30;
let windSpeed = 35;

// function containing math formula to calculate windchill 
// with the parameters being the previously declared set values
// returns the windchill temperator in degrees fahrenheit rounded to the nearest tenth
function calculateWindChill(temperature, windSpeed){
    let windChill = 35.74 + 0.6215 * temperature - 35.75 *
    Math.pow(windSpeed,0.16) + 0.4275 * temperature * Math.pow(windSpeed,0.16)
    return windChill.toFixed(1);
}

// declaring windchill variable for better accessibility when displaying information on html document
let windChill;

// if statement that calls the function if wind is stronger than three miles per hour 
// and temperature is lower than 50 degrees fahrenheit
// returns a not applicaple answer if conditions are not met
if (temperature < 50 && windSpeed > 3){
     windChill = calculateWindChill(temperature,windSpeed);
}
else{
     windChill = 'N/A';
}

// declaring constants for use to dynamically display weather information in html document
const displaytemperature = document.querySelector("#display-temp");
const displayConditions = document.querySelector("#display-condition");
const displayWind = document.querySelector("#display-wind");
const displayWindChill = document.querySelector("#display-windchill");

// displaying weather information
displaytemperature.innerHTML = `<span class="highlight">Temperature: ${temperature}°F</span>`;
displayConditions.innerHTML = `<span class="highlight">Conditions: Cloudy</span>`;
displayWind.innerHTML = `<span class="highlight">Wind: ${windSpeed} mp/h</span>`;

// displaying windchill if calculation conditions are met or displaying N/A if conditions are not met
if (temperature < 50 && windSpeed > 3){
    displayWindChill.innerHTML = `<span class="highlight">Windchill: ${windChill}°F</span>`;
}
else{
    displayWindChill.innerHTML = `<span class="highlight">Windchill: ${windChill}</span>`;
}

