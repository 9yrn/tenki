export function unitToggleUI(onUnitChange) {
  const container = document.createElement("div");

  const button = document.createElement("button");
  button.textContent = "Switch to °C";

  button.addEventListener("click", () => {
    onUnitChange();

    if (button.textContent === "Switch to °C") {
      button.textContent = "Switch to °F";
    } else {
      button.textContent = "Switch to °C";
    }
  });

  container.appendChild(button);

  return container;
}
