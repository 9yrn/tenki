export function getTodayWeather(weather) {
  const today = weather.days[0];

  return {
    location: weather.resolvedAddress,
    date: today.datetime,
    temperature: today.temp,
    feelsLike: today.feelslike,
    humidity: today.humidity,
    windSpeed: today.windspeed,
    conditions: today.conditions,
    icon: today.icon,
    tempMax: today.tempmax,
    tempMin: today.tempmin,
  };
}

export function getWeatherCondition(weather) {
  const today = weather.days[0];

  const icon = today.icon;

  if (icon.includes("rainy")) {
    return "rain";
  }

  if (icon.includes("clear")) {
    return "sunny";
  }

  if (icon.includes("cloudy") || icon.includes("partly-cloudy")) {
    return "cloudy";
  }

  if (icon.includes("snow") || icon.includes("snow-showers")) {
    return "snow";
  }

  if (icon.includes("thunder")) {
    return "storm";
  }

  return "default";
}
