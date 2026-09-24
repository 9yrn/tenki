import "./style.css";

import { searchUI } from "./ui/searchUI";
import { getWeather } from "./api/weather";
import { weatherUI } from "./ui/weatherUI";
import { unitToggleUI } from "./ui/unitToggleUI";
import {
  setWeather,
  getWeatherData,
  setUnit,
  getUnit,
} from "./weather/weatherData";
import { getTodayWeather, getWeatherCondition } from "./weather/weatherFilters";
import { loadingUI } from "./ui/loadingUI";

const searchContainer = document.getElementById("search-container");
const weatherContainer = document.getElementById("weather-container");
const unitContainer = document.getElementById("unit-container");

function loadingScreen() {
  weatherContainer.innerHTML = "";

  const currentWeather = getWeatherData();

  let condition = "default";

  if (currentWeather) {
    condition = getWeatherCondition(currentWeather);
  }

  const loading = loadingUI(condition);

  weatherContainer.appendChild(loading);
}

function showError(message) {
  weatherContainer.innerHTML = "";

  const errorWrapper = document.createElement("div");
  errorWrapper.classList.add("error-wrapper");

  const errorKanji = document.createElement("div");
  errorKanji.classList.add("error-kanji");
  errorKanji.textContent = "無";

  const error = document.createElement("p");
  error.textContent = message;

  errorWrapper.appendChild(errorKanji);
  errorWrapper.appendChild(error);
  weatherContainer.appendChild(errorWrapper);
}

function renderWeather() {
  const weather = getWeatherData();
  const unit = getUnit();

  if (!weather) {
    return;
  }

  const today = getTodayWeather(weather);
  const display = weatherUI(today, unit);

  document.body.style.backgroundImage = "";

  weatherContainer.innerHTML = "";

  weatherContainer.appendChild(display);
}

async function handleSearch(location) {
  try {
    loadingScreen();

    const unit = getUnit();

    const weather = await getWeather(location, unit);

    setWeather(weather);

    renderWeather();
  } catch (error) {
    console.error(error);

    showError("Unable to retrieve weather. Please try again...¯\_(๑❛ᴗ❛๑)_/¯");
  }
}

async function handleUnitChange() {
  const weather = getWeatherData();

  if (!weather) {
    return;
  }

  const location = weather.resolvedAddress;

  const newUnit = getUnit() === "us" ? "metric" : "us";

  try {
    loadingScreen();

    const updatedWeather = await getWeather(location, newUnit);

    setWeather(updatedWeather);

    setUnit(newUnit);

    renderWeather();
  } catch (error) {
    console.log(error);

    showError(
      "Unable to chance the temperature unit. please try again...ლ(ﾟдﾟლ)",
    );
  }
}

const searchForm = searchUI(handleSearch);

searchContainer.appendChild(searchForm);

const unitToggle = unitToggleUI(handleUnitChange);

unitContainer.appendChild(unitToggle);
