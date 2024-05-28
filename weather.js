let lat, long
function getWeather(){
    if("geolocation" in navigator){
        navigator.geolocation.getCurrentPosition((position) =>{
            lat = position.coords.latitude;
            long = position.coords.longitude;

            var api = 'https://api.open-meteo.com/v1/forecast?latitude='+lat+'&longitude=' + long + '&hourly=temperature_2m&current_weather=true';
            var req = new XMLHttpRequest();
    
            req.open('GET', api, true);
    
            req.onload = function(){
                var data = JSON.parse(this.response);
    
                var temperature = data.current_weather.temperature;
                var weatherCode = data.current_weather.weathercode;
    
                // weather codes are what im going to use for icons. Choose what's appropriate from list
                /* 
                    WMO Weather interpretation codes (WW)
                    Code	Description
                    0	Clear sky
                    1, 2, 3	Mainly clear, partly cloudy, and overcast
                    45, 48	Fog and depositing rime fog
                    51, 53, 55	Drizzle: Light, moderate, and dense intensity
                    56, 57	Freezing Drizzle: Light and dense intensity
                    61, 63, 65	Rain: Slight, moderate and heavy intensity
                    66, 67	Freezing Rain: Light and heavy intensity
                    71, 73, 75	Snow fall: Slight, moderate, and heavy intensity
                    77	Snow grains
                    80, 81, 82	Rain showers: Slight, moderate, and violent
                    85, 86	Snow showers slight and heavy
                    95 *	Thunderstorm: Slight or moderate
                    96, 99 *	Thunderstorm with slight and heavy hail
                */                
                    
                    if(weatherCode <= 2){
                        document.getElementById('icon').data = 'public/ico/weather/sun.svg';
                    }
                    else if(weatherCode <= 3){
                        document.getElementById('icon').data = 'public/ico/weather/cloud.svg';
                    }
                    else if(weatherCode >= 51 && weatherCode <= 55){
                        document.getElementById('icon').data = 'public/ico/weather/cloud-drizzle.svg';
                    }
                    else if(weatherCode >= 61 && weatherCode <= 65){
                        document.getElementById('icon').data = 'public/ico/weather/cloud-rain.svg';
                    }
                    else if(weatherCode >= 71 && weatherCode <= 75){
                        document.getElementById('icon').data = 'public/ico/weather/cloud-snow.svg';
                    }
                    else if(weatherCode >= 80 && weatherCode <= 82){
                        document.getElementById('icon').data = 'public/ico/weather/umbrella.svg';
                    }
                    else if(weatherCode >= 95){
                        document.getElementById('icon').data = 'public/ico/weather/cloud-lightning.svg';
                    }
                    document.getElementById('temp').innerHTML = temperature + '°C';
            }
            req.send();

        });
    }
    else{
        console.log('No geolocation data available, weather will be disabled');
    }
}

getWeather();