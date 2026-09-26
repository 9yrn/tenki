export function weatherUI(weather, unit) {
  const container = document.createElement("div");

  const locationName = document.createElement("h2");
  locationName.textContent = weather.location;

  const date = document.createElement("p");
  date.textContent = weather.date;

  const temperature = document.createElement("p");
  temperature.textContent = `${weather.temperature}°${unit === "metric" ? "C" : "F"}`;

  const conditions = document.createElement("p");
  conditions.textContent = weather.conditions;

  const feelsLike = document.createElement("p");
  feelsLike.textContent = `Feels like:  ${weather.feelsLike}°${unit === "metric" ? "C" : "F"}`;

  const humidity = document.createElement("p");
  humidity.textContent = `Humidity: ${weather.humidity}%`;

  const wind = document.createElement("p");
  wind.textContent = `Wind: ${weather.windSpeed} ${unit === "metric" ? "km/h" : "mph"}`;

  container.appendChild(locationName);
  container.appendChild(date);
  container.appendChild(temperature);
  container.appendChild(conditions);
  container.appendChild(feelsLike);
  container.appendChild(humidity);
  container.appendChild(wind);

  return container;
}
