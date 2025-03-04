const apiKey ='https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}'; 


function getWeather() {
    const city = document.getElementById('city').value;
    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            if (data.cod === "404") {
                alert("City not found!");
                return;
            }

            // Display weather data
            document.getElementById('city-name').innerText = `Weather in ${data.name}`;
            document.getElementById('temperature').innerText = `Temperature: ${data.main.temp}°C`;
            document.getElementById('description').innerText = `Condition: ${data.weather[0].description}`;
            document.getElementById('humidity').innerText = `Humidity: ${data.main.humidity}%`;
            document.getElementById('wind').innerText = `Wind Speed: ${data.wind.speed} m/s`;
        })
        .catch(error => {
            console.error('Error fetching the weather data', error);
            alert('An error occurred while fetching weather data.');
        });
}
