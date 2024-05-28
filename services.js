const ApiKey = "46cd81a7ba1e4d389ad165913230411"
const search = document.querySelector(".search-container input");
const searchBtn = document.querySelector(".search-container button");
async function checkWeather(City) {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${ApiKey}&q=${City}`)
    const data = await response.json();

    document.querySelector(".temperature").innerHTML = Math.round(data.current.temp_c) + "° C";
    document.querySelector(".city-name").innerHTML = data.location.name || "New Delhi";
    document.querySelector(".Wind").innerHTML = "Wind: " + data.current.wind_kph + " km/h";
    document.querySelector(".Humidity").innerHTML = "Humidity: " + data.current.humidity + "%";
    document.querySelector(".description").innerHTML = data.current.condition.text;
    const a = document.getElementById("icon").src = data.current.condition.icon;
    console.log(a);
}
searchBtn.addEventListener("click",()=>{
    checkWeather(search.value);
})
checkWeather("new delhi");