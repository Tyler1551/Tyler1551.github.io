function manageTime(){
    // Function to check if we should have a '0' before the time
    function checkTime(i){
        if(i < 10){
            i = "0" + i;
        }
        return i;
    }

    function startTime(){
        var d = new Date();

        var hour = d.getHours();
        var minute = d.getMinutes();
        var second = d.getSeconds();

        // Pass through to checkTime
        hour = checkTime(hour);
        minute = checkTime(minute);
        second = checkTime(second);

        document.getElementById("clock").innerHTML = hour + ":" + minute + ":" + second;

        t = setTimeout(function() {
            startTime()
        }, 1000);

        if(hour <= 11){
            document.getElementById('greeting').innerHTML = "Good morning, Tyler";
        }
        else if(hour >= 12 && hour < 17){
            document.getElementById('greeting').innerHTML = "Good afternoon, Tyler";
        }
        else if(hour >= 17){
            document.getElementById('greeting').innerHTML = "Good evening, Tyler";
        }
    }



    startTime();
}

function manageWeather(){

//  Get the users location so we can get accurate weather reading - future

    let long, lat;

    if("geolocation" in navigator){
        navigator.geolocation.getCurrentPosition((position) =>{
            lat = position.coords.latitude;
            long = position.coords.longitude;
        });
    }
    else{
        console.log('No geolocation data available, weather will be disabled');
    }

    function getWeather(){
        var api = 'https://api.open-meteo.com/v1/forecast?latitude='+lat+'&longitude=' + long + '&hourly=temperature_2m&current_weather=true';
        var req = new XMLHttpRequest();
    
        req.open('GET', api, true);
    
        req.onload = function(){
            var data = JSON.parse(this.response);
    
            // console.log(data);
    
            var temperature = data.current_weather.temperature;
            var weatherCode = data.current_weather.weathercode;
    
            // console.log(temperature);
            // console.log(weatherCode);
    
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
                    document.getElementById('weatherIcon').src = 'public/Icons/sun.svg';
                }
                else if(weatherCode <= 3){
                    document.getElementById('weatherIcon').src = 'public/Icons/cloud.svg';
                }
                else if(weatherCode >= 51 && weatherCode <= 55){
                    document.getElementById('weatherIcon').src = 'public/Icons/cloud-drizzle.svg';
                }
                else if(weatherCode >= 61 && weatherCode <= 65){
                    document.getElementById('weatherIcon').src = 'public/Icons/cloud-rain.svg';
                }
                else if(weatherCode >= 71 && weatherCode <= 75){
                    document.getElementById('weatherIcon').src = 'public/Icons/cloud-snow.svg';
                }
                else if(weatherCode >= 80 && weatherCode <= 82){
                    document.getElementById('weatherIcon').src = 'public/Icons/umbrella.svg';
                }
                else if(weatherCode >= 95){
                    document.getElementById('weatherIcon').src = 'public/Icons/cloud-lightning.svg';
                }
                document.getElementById('temperature').innerHTML = temperature + '°C';
    
        }
    
        req.send();

        t = setTimeout(function() {
            getWeather();
        }, 500);
    }

    function getDate(){
        var d = new Date();

        var day = d.getDay();
        var month = d.toLocaleString('default', {month: 'long'});

        document.getElementById('date').innerHTML = month + ', ' + day;
    }

    getDate();
    getWeather();

}

// Function calls
manageTime();
manageWeather();
