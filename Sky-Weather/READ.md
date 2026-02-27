# 🌤️ Sky Weather - Weather App Project

Welcome to **Sky Weather**! A simple and sleek weather web app that lets you check real-time weather information for any city around the world. Powered by OpenWeatherMap API and fully deployed on Vercel. 🌎✨

Check it live here: [Sky Weather Live](https://sky-weather-web-project.vercel.app/) 🚀

---

## 📝 Features

- 🔍 **Search for any city** and get weather information instantly.
- 🌡️ **Temperature in Celsius** displayed clearly.
- 💧 **Humidity information** for better weather understanding.
- 🌥️ **Weather description** with a matching emoji icon.
- ⛅ **Responsive design**, works on desktop and mobile.
- 🔒 **API key securely handled** using a backend proxy (no key exposed to users).

---

## 💻 Technologies Used

- **Frontend:** HTML, CSS, JavaScript  
- **Backend:** Vercel Serverless Functions (`/api/weather`)  
- **API:** OpenWeatherMap API  
- **Deployment:** Vercel  

---

## 🚀 How It Works

1. Enter a city name in the input box.  
2. Press **Enter** or click the **Search** button.  
3. The frontend sends a request to the **serverless backend** (`/api/weather`).  
4. Backend fetches data from **OpenWeatherMap API** securely.  
5. Weather info is displayed: temperature, humidity, description, and weather icon. 🌦️  

This setup keeps your API key **safe** and prevents it from being exposed in the frontend. 🔐

---

## 📂 Project Structure
