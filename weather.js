class Weather {
    constructor(city){
        this.apiKey = 'e376a6698d5c5406835633b23c5a489f';
        this.city=city;
    }

    // Fetch weather from API
    async getWeather(){
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=${this.apiKey}`);
        const responseData = await response.json();

        return responseData;
    }

    // Change Location
    changeLocation(city){
        this.city = city;
        document.getElementById('city').value='';
    }
}