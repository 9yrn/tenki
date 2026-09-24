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
