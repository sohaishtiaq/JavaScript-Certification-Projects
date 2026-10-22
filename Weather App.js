async function getWeather(city) {
  try {
    const response = await fetch(
      `https://weather-proxy.freecodecamp.rocks/api/city/${city}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch weather data");
    }

    return await response.json();
  } catch (error) {
    console.log(error);
    return undefined;
  }
}

async function showWeather(city) {
  const data = await getWeather(city);

  if (!data) {
    alert("Something went wrong, please try again later");
    return;
  }

  const weather = data.weather?.[0];
  const main = data.main;
  const wind = data.wind;

  document.getElementById("location").textContent =
    data.name ?? "N/A";

  document.getElementById("main-temperature").textContent =
    main?.temp ?? "N/A";

  document.getElementById("feels-like").textContent =
    main?.feels_like ?? "N/A";

  document.getElementById("humidity").textContent =
    main?.humidity ?? "N/A";

  document.getElementById("wind").textContent =
    wind?.speed ?? "N/A";

  document.getElementById("wind-gust").textContent =
    wind?.gust ?? "N/A";

  document.getElementById("weather-main").textContent =
    weather?.main ?? "N/A";

  const icon = document.getElementById("weather-icon");
  icon.src = weather?.icon ?? "";
  icon.alt = weather?.description ?? "Weather icon";
}

document
  .getElementById("get-weather-btn")
  .addEventListener("click", () => {
    const city = document.getElementById("city-select").value;

    if (!city) {
      return;
    }

    showWeather(city);
  });
