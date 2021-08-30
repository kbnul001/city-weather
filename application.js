function weatherCall() {
    document.getElementById('error').style.display = 'none';
    document.getElementById('spinner').style.display = "block";
    const searchField = document.getElementById('search-box');
    const city = searchField.value;
    searchField.value = ''
    console.log(city);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=00b2607745cd63e71aa403cbfb5d565d`)
        .then(res => res.json())
        .then(data => displayWeather(data))
        .catch(err => {
            document.getElementById('error').style.display = 'block';
        })

}
const displayWeather = data => {

    const cityField = document.getElementById('city-name');
    const tempField = document.getElementById('temp');
    const feelLikeField = document.getElementById('feel-temp');
    if (data.name) {
        cityField.innerText = data.name;
    }
    tempField.innerText = (parseFloat(data.main.temp) - 273.15).toFixed(2);
    feelLikeField.innerText = (parseFloat(data.main.feels_like) - 273.15).toFixed(2);
    document.getElementById('spinner').style.display = "none";
}
fetch(`https://api.openweathermap.org/data/2.5/weather?q=Khulna&appid=00b2607745cd63e71aa403cbfb5d565d`)
    .then(res => res.json())
    .then(data => displayWeather(data))
