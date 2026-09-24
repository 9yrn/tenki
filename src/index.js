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
import { getTodayWeather } from "./weather/weatherFilters";

const searchContainer = document.getElementById("search-container");
const weatherContainer = document.getElementById("weather-container");
const unitContainer = document.getElementById("unit-container");

function loadingScreen() {
  weatherContainer.innerHTML = "";

  const wrapper = document.createElement("div");
  wrapper.classList.add("loading-wrapper");

  const spinner = document.createElement("div");
  spinner.classList.add("kanji-spinner");
  spinner.textContent = "気";

  const text = document.createElement("p");
  text.classList.add("loading-text");
  text.textContent = "読み込み中...";

  wrapper.appendChild(spinner);
  wrapper.appendChild(text);

  weatherContainer.appendChild(wrapper);
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

    showError("Unable to retrieve weather. Please try again :).");
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

    showError("Unable to chance the temperature unit. please try again :'(");
  }
}

const searchForm = searchUI(handleSearch);

searchContainer.appendChild(searchForm);

const unitToggle = unitToggleUI(handleUnitChange);

unitContainer.appendChild(unitToggle);
