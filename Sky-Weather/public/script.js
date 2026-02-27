
let input=document.getElementById("input");
let cityname=document.getElementById("cityname");
let temp=document.getElementById("temprature");
let humidity=document.getElementById("humidity");
let desc=document.getElementById("description");
let emoji=document.getElementById("emoji");
let error=document.getElementById("error");
let btn=document.getElementById("btn");

btn.addEventListener("click" , getdata);

input.addEventListener("keydown" , (event)=>
{
   if(event.key=="Enter")
        getdata();
});

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