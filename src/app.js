let currentDate = new Date();
let time = document.querySelector("#current-time");
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[currentDate.getDay()];
let hours = currentDate.getHours();
let minutes = String(currentDate.getMinutes()).padStart(2, "0");

time.innerHTML = `${day} ${hours}:${minutes}`;

function displayWeather(response) {
  let location = document.querySelector("#current-city");
  location.innerHTML = response.data.name;

  let temp = document.querySelector("#temperature");
  temp.innerHTML = Math.round(response.data.main.temp);

  let humidityElement = document.querySelector("#humid");
  humidityElement.innerHTML = response.data.main.humidity;

  let windElement = document.querySelector("#wind");
  windElement.innerHTML = Math.round(response.data.wind.speed);

  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.weather[0].description;
}

function showCity(event) {
  event.preventDefault();
  let apiKey = "2b6fdad0cbd018949c50c70f72250726";
  let city = document.querySelector("#city-input").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
}

let citySearch = document.querySelector("#search-city-bar");
citySearch.addEventListener("submit", showCity);
