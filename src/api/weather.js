const API_KEY = "JM93VQWR56N2BEE9CV9HN3J4S";

export async function getWeather(location) {
  const weatherUrl =
    `https://api.weatherapi.com/v1/current.json` +
    `?key=${API_KEY}` +
    `&q=${encodeURIComponent(location)}`;

  //Await for response on API's end to assign the results to the variable
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to retrieve weather");
  }

  //Await for response to be parsed into a JS object
  const data = await response.json();

  return data;
}
