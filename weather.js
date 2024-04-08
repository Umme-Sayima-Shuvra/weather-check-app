const apiKey = "c2465390ac120a9978c6c4928b853a1b";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const temp = document.querySelector(".temp");
const country = document.querySelector(".city");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const search = document.querySelector(".citySearch");
const button = document.querySelector(".button");
const icon = document.querySelector(".icon");

async function getTemp(city){
    const temparature = await fetch(apiURL + city + `&appid=${apiKey}`);
    const result = await temparature.json();
    if(temparature.status == 404){
        document.getElementById("error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
        console.log(result);
    } else{
        document.querySelector(".weather").style.display = "block";
        document.getElementById("error").style.display = "none";
        temp.innerHTML = Math.round(result.list[0].main.temp) + "°c";
    country.innerHTML = result.city.name;
    humidity.innerHTML = result.list[0].main.humidity + "%";
    wind.innerHTML = result.list[0].wind.speed + "km/h";
    console.log(result);
    if(result.list[0].weather[0].main == "Clouds"){
        icon.src = "images/clouds.png";
    } else if(result.list[0].weather[0].main == "Rain"){
        icon.src = "images/rain.png";
    } else if(result.list[0].weather[0].main == "Clear"){
        icon.src = "images/clear.png";
    } else if(result.list[0].weather[0].main == "Mist"){
        icon.src = "images/mist.png";
    } else if(result.list[0].weather[0].main == "Drizzle"){
        icon.src = "images/drizzle.png";
    } else if(result.list[0].weather[0].main == "Snow"){
        icon.src = "images/snow.png";}
    }
    
}
button.addEventListener("click", () => {
    getTemp(search.value);
});
