export function loadingUI(condition) {
  const container = document.createElement("div");

  container.classList.add("loading");

  const icon = document.createElement("div");
  icon.classList.add("loading-icon");

  const message = document.createElement("p");

  if (condition === "rainy") {
    icon.textContent = "🌧️";
    message.textContent = "Kinda rainy around there...(╯•﹏•╰)";
    container.classList.add("rainy-loader");
  } else if (condition === "sunny") {
    icon.textContent = "☀️";
    message.textContent = "I think its sunny around there...╰(▔∀▔)╯";
    container.classList.add("sunny-loader");
  } else if (condition === "cloudy") {
    icon.textContent = "☁️";
    message.textContent = "Kinda gloomy around there...╥﹏╥";
    container.classList.add("cloudy-loader");
  } else {
    icon.textContent = "⛅️";
    message.textContent = "Tenki Loading...(〃∀〃)ゞ";
    container.classList.add("default-loader");
  }

  container.appendChild(icon);
  container.appendChild(message);

  return container;
}
