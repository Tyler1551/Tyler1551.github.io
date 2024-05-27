
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
            document.getElementById('greeting').innerHTML = "Good morning";
        }
        else if(hour >= 12 && hour < 17){
            document.getElementById('greeting').innerHTML = "Good afternoon";
        }
        else if(hour >= 17){
            document.getElementById('greeting').innerHTML = "Good evening";
        }
    }



    startTime();