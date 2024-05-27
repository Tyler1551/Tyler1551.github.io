
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
            document.getElementById('greeting').innerHTML = "Good Morning";
        }
        else if(hour >= 12 && hour < 17){
            document.getElementById('greeting').innerHTML = "Good Afternoon";
        }
        else if(hour >= 17){
            document.getElementById('greeting').innerHTML = "Good Evening";
        }
    }



    startTime();

    function getDate(){
        var d = new Date();
        var day = d.getDate();

        var months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

        var month = d.getMonth();

        var date = day + ', ' + months[month];

        document.getElementById('date').innerHTML = date;
    }

    getDate();
