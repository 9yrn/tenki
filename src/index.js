import "./style.css";
import { searchUI } from "./ui/searchUI";
import { getWeather } from "./api/weather";
import { weatherUI } from "./ui/weatherUI";

const searchContainer = document.getElementById("search-container");
const weatherContainer = document.getElementById("weather-container");

async function handleSearch(location) {
  try {
    loadingScreen();

    const weather = await getWeather(location);

    console.log(weather);

    const display = weatherUI(weather);

    weatherContainer.innerHTML = "";

    weatherContainer.appendChild(display);
  } catch (error) {
    console.error(error);

    weatherContainer.textContent = "Unable to find weather for that location.";
  }
}

function loadingScreen() {
  weatherContainer.innerHTML = "";

  const loading = document.createElement("p");
  loading.textContent = "Tenki loading..:)";

  weatherContainer.appendChild(loading);
}

const searchForm = searchUI(handleSearch);

searchContainer.appendChild(searchForm);
