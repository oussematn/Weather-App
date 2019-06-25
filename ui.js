class UI {
    constructor() {
        this.location = document.getElementById('location');
        this.desc = document.getElementById('desc');
        this.string = document.getElementById('string');
        this.icon = document.getElementById('icon');
        this.details = document.getElementById('details');
        this.humidity = document.getElementById('humidity');
        this.visibility = document.getElementById('visibility');
        this.wind = document.getElementById('wind');
    }

    paint(weather) {
        this.location.textContent = `${weather.name}, ${weather.sys.country}`;
        this.desc.textContent = weather.weather[0].description;
        this.string.textContent = `${parseFloat(weather.main.temp).toFixed(1)} C (${convertToF(parseFloat(weather.main.temp)).toFixed(1)} F)`;
        this.icon.setAttribute('src',`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`);
        this.humidity.textContent = `Humidity : ${weather.main.humidity}%`;
        /* conversion from miles to km */
        const visKM = weather.visibility *1.609;
        const windKM = weather.wind.speed *1.609;
        const vision = ((visKM)/1000).toFixed(1);
        console.log(vision);
        this.visibility.textContent = `Visibility : ${vision} Km (${(weather.visibility/1000).toFixed(1)} Miles)`;
        this.wind.textContent = `Wind : ${windKM.toFixed(1)} KPH (${weather.wind.speed} MPH)`;
    }

}

function convertToF(celsius) { 
     let fahrenheit = celsius * 9/5 + 32;
     return fahrenheit; 
}