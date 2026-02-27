# 🌤️ Sky Weather - Weather App Project

[![Live Demo](https://img.shields.io/badge/Live-Demo-blue?style=for-the-badge)](https://sky-weather-web-project.vercel.app/) 
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge)](https://vercel.com/) 
[![OpenWeather API](https://img.shields.io/badge/API-OpenWeatherMap-orange?style=for-the-badge)](https://openweathermap.org/)

Welcome to **Sky Weather**! 🌎✨  
A sleek weather web app that gives **real-time weather info** for any city. Fully deployed on Vercel and keeps your API key safe with serverless backend functions. 🔒

Check it live here: [Sky Weather Live](https://sky-weather-web-project.vercel.app/) 🚀

---

## 📝 Features

- 🔍 Search any city worldwide  
- 🌡️ Displays temperature in Celsius  
- 💧 Shows humidity  
- 🌥️ Weather description with dynamic emoji icon  
- ⛅ Responsive design for desktop & mobile  
- 🔒 API key securely handled in the backend  

---

## 💻 Technologies Used

- **Frontend:** HTML, CSS, JavaScript  
- **Backend:** Vercel Serverless Functions (`/api/weather`)  
- **API:** OpenWeatherMap API  
- **Deployment:** Vercel  

---

## 🚀 How It Works

1. Enter a city name in the input box.  
2. Press **Enter** or click **Search**.  
3. Frontend calls the backend API: `/api/weather`.  
4. Backend fetches data from OpenWeatherMap API 🔑  
5. Weather info displayed: temperature, humidity, description, and icon 🌦️  

---

## 📂 Project Structure


Sky-Weather/
├── public/
│ ├── index.html
│ ├── script.js
│ └── style.css
├── api/
│ └── weather.js
├── package.json
└── README.md


---

## ⚙️ Setup Locally

1. Clone the repository:

```bash
git clone https://github.com/Anketruos/Mini-Projects.git

Navigate to the project folder:

cd Sky-Weather

Install dependencies (if needed for local backend testing):

npm install

Create a .env file for local testing:

OPENWEATHER_API_KEY=YOUR_API_KEY_HERE

Start the local development server:

vercel dev