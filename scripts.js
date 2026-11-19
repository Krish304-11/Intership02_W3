
// Enter your OpenWeatherMap API key
const apiKey = "f91d82cae43085c9301e319de4b4b14d";

async function getWeather() {

    // Get city name
    let city = document.getElementById("city").value;

    // Check empty input
    if (city === "") {
        document.getElementById("error").innerHTML =
            "Please enter a city name";
        return;
    }

    // API URL
    const url =
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=${apiKey}`;

    try {

        // Fetch weather data
        const response = await fetch(url);

        // Check API response
        if (!response.ok) {
            throw new Error("City not found or API error");
        }

        // Convert response into JSON
        const data = await response.json();

        // Display weather information
        document.getElementById("cityName").innerHTML =
            "City: " + data.name;

        document.getElementById("temperature").innerHTML =
            "Temperature: " + data.main.temp + " °C";

        document.getElementById("humidity").innerHTML =
            "Humidity: " + data.main.humidity + "%";

        document.getElementById("condition").innerHTML =
            "Condition: " + data.weather[0].description;

        document.getElementById("error").innerHTML = "";

    }
    catch (error) {

        document.getElementById("error").innerHTML =
            error.message;

    }
}
