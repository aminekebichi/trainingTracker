//define vars to hold time values
let seconds = 0;
let minutes = 0;
let hours = 0;

let interval = null;
let watch_status = "stopped";

//stopwatch function (logic to determine when to increment next time-val)
function stopWatch(){
    seconds++;
    if(seconds == 60){
        seconds = 0;
        minutes++;

        if(minutes == 60){
            minutes = 0;
            hours++;
        }
    }

    //display updated time values
    document.getElementById("display").innerHTML = ((hours<10) ? "0"+hours : hours) + ':' + ((minutes<10) ? "0"+minutes : minutes) + ':' + ((seconds<10) ? "0"+seconds : seconds);

}

// window.setInterval(stopWatch, null);

function startStop(){
    if (watch_status === "stopped"){
        interval = window.setInterval(stopWatch, 1000);
        document.getElementById("startStop").innerHTML = "Stop";
        watch_status = "started";
    }
    else {
        window.clearInterval(interval);
        document.getElementById("startStop").innerHTML = "Start";
        watch_status = "stopped";
    }
}

function resetTimer(){
    window.clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById("display").innerHTML = "00:00:00";
    document.getElementById("startStop").innerHTML = "Start";
}