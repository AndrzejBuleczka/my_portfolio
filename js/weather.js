const weatherIcons = {
  0: "☀️",  // Clear sky
  1: "🌤️", // Mainly clear
  2: "⛅",  // Partly cloudy
  3: "☁️", // Overcast
  45: "🌫️", // Fog
  48: "🌫️", // Depositing rime fog
  51: "🌦️", // Drizzle: Light
  53: "🌦️", // Drizzle: Moderate
  55: "🌧️", // Drizzle: Dense
  61: "🌧️", // Rain: Slight
  63: "🌧️", // Rain: Moderate
  65: "🌧️", // Rain: Heavy
  71: "❄️", // Snow: Slight
  73: "❄️", // Snow: Moderate
  75: "❄️", // Snow: Heavy
  80: "🌦️", // Rain showers: Slight
  81: "🌧️", // Rain showers: Moderate
  82: "⛈️", // Rain showers: Violent
  95: "⛈️", // Thunderstorm: Slight or moderate
  96: "⛈️", // Thunderstorm with hail: Slight
  99: "⛈️"  // Thunderstorm with hail: Heavy
};

fetch("https://api.open-meteo.com/v1/forecast?latitude=50.06&longitude=19.94&current_weather=true&timezone=auto")
  .then(res => res.json())
  .then(data => {
    const weather = data.current_weather;
    const icon = weatherIcons[weather.weathercode] || "❔";

    document.getElementById("weather").innerHTML = `
      <span>${icon}</span>
      <span>Weather in Krakow: ${weather.temperature}°C, Wind: ${weather.windspeed} km/h</span>
    `;
  })
  .catch(err => {
    document.getElementById("weather").innerText = "Unable to load weather data.";
    console.error(err);
  });
