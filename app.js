// init weather object
const storage = new Storage();
const defaultCity = storage.getLocation();
const weather = new Weather(defaultCity);

document.addEventListener('DOMContentLoaded', getWeather);

const ui = new UI();

function getWeather(){
    weather.getWeather()
        .then(res => {
            ui.paint(res);})
        .catch(err => console.log(err));
}


// Change Location
document.getElementById('save-changes').addEventListener('click', function(){
    let city = document.getElementById('city').value;
    weather.changeLocation(city);
    getWeather();
    storage.setLocation(city);
});