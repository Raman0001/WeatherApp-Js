const ApiKey = "46cd81a7ba1e4d389ad165913230411"
const search = document.querySelector(".search-container input");
const searchBtn = document.querySelector(".search-container button");
const weekday = ["Sun", "Mon", "Tues", "Wednes", "Thurs", "Fri", "Satur"];
const day = new Date();

async function checkWeather(City) {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${ApiKey}&q=${City}`)
    const data = await response.json();
    try {
        document.querySelector(".city-name").innerHTML = data.location.name || "New Delhi";
        document.querySelector(".country").innerHTML = data.location.country || "India";
        document.querySelector(".temperature").innerHTML = Math.round(data.current.temp_c) + "° C";
        const uv = document.querySelector(".UV").innerHTML = data.current.uv;
        document.querySelector(".sun-protection").innerHTML = uv <= 2 ? "You can safely enjoy being outside!" : uv >= 3 || uv <= 7 ? "Seek shade during midday hours! Slip on a shirt, slop on sunscreen and slap on hat!" : "Avoid being outside during midday hours! Make sure you seek shade! Shirt, sunscreen and hat are a must!";
        document.querySelector(".wind_dir").innerHTML = "Direction: " + data.current.wind_dir;
        document.querySelector(".Wind").innerHTML = "Wind: " + data.current.wind_kph + " km/h";
        document.querySelector(".Humidity").innerHTML = "Humidity: " + data.current.humidity + "%";
        document.querySelector(".description").innerHTML = data.current.condition.text + " | " + weekday[day.getDay()];
        document.getElementById("icon").src = data.current.condition.icon;
    } catch (error) {
        document.querySelector(".city-name").innerHTML = "Unavailable";
        document.querySelector(".country").innerHTML = "Unavailable";
        document.querySelector(".temperature").innerHTML = "Unavailable";
        document.querySelector(".UV").innerHTML = "Unavailable";
        document.querySelector(".wind_dir").innerHTML = "Direction: " + "Unavailable";
        document.querySelector(".Wind").innerHTML = "Wind: " + "Unavailable";
        document.querySelector(".Humidity").innerHTML = "Humidity: " + "Unavailable";
        document.querySelector(".description").innerHTML = "Unavailable";
        document.getElementById("icon").src = "Unavailable";
    }
}
searchBtn.addEventListener("click", () => {
    checkWeather(search.value);
})
checkWeather("new delhi");