export function weatherUI(weather) {
  const container = document.createElement("div");

  const locationName = document.createElement("h2");
  locationName.textContent = weather.resolvedAddress;

  const today = weather.days[0];

  const temperature = document.createElement("p");
  temperature.textContent = `${today.temp}°C`;

  const conditions = document.createElement("p");
  conditions.textContent = today.conditions;

  const feelsLike = document.createElement("p");
  feelsLike.textContent = `Feels like:  ${today.feelslike}°C`;

  const humidity = document.createElement("p");
  humidity.textContent = `Humidity: ${today.humidity}%`;

  const wind = document.createElement("p");
  wind.textContent = `Wind: ${today.windspeed} km/h`;

  container.appendChild(locationName);
  container.appendChild(temperature);
  container.appendChild(conditions);
  container.appendChild(feelsLike);
  container.appendChild(humidity);
  container.appendChild(wind);

  return container;
}
