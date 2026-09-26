const API_KEY = "SFLTJZ9XNM6JCGNK5M4UCLAGU";

export async function getWeather(location, unit = "us") {
  const unitGroup = unit === "metric" ? "metric" : "us";
  const weatherUrl =
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/` +
    `${encodeURIComponent(location)}` +
    `?unitGroup=${unitGroup}&key=${API_KEY}`;

  //Await for response on API's end to assign the results to the variable
  const response = await fetch(weatherUrl);

  //Await for response to be parsed into a JS object
  const data = await response.json();

  //Temp error checks
  console.log("Status:", response.status);
  console.log("Response:", response);

  if (!response.ok) {
    throw new Error(data.error.message);
  }

  return data;
}
