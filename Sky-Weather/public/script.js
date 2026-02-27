async function getdata() {

  const city = input.value.trim();

  if (city === "") {
    error.textContent = "Please enter a city name.";
    return;
  }

  try {

    let response = await fetch(`/api/weather?city=${encodeURIComponent(city)}`);

    if (!response.ok) {
      throw new Error("Couldn't fetch city");
    }

    let data = await response.json();

    cityname.textContent = data.name;
    temp.textContent = `${data.main.temp}°C`;
    humidity.textContent = `Humidity: ${data.main.humidity}`;
    desc.textContent = data.weather[0].description;

    const iconcode = data.weather[0].icon;

    emoji.innerHTML =
      `<img src="https://openweathermap.org/img/wn/${iconcode}@2x.png">`;

    error.textContent = "";

  } catch (err) {

    cityname.textContent = "";
    temp.textContent = "";
    humidity.textContent = "";
    emoji.innerHTML = "";

    error.textContent = err.message;
  }
}