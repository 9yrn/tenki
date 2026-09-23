let currentWeather = null;

let currentUnit = "us";

export function setWeather(weather) {
  currentWeather = weather;
}

export function getWeatherData() {
  return currentWeather;
}

export function setUnit(unit) {
  currentUnit = unit;
}

export function getUnit() {
  return currentUnit;
}
