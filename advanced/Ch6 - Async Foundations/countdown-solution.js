function countDown(seconds) {
    var interval = setInterval(function () {
        seconds -= 1;
        if (seconds > 0) {
            console.log("Timer: ", seconds);
        } else {
            console.log("Ring Ring Ring!!!");
            clearInterval(interval);
        }
    }, 1000);
}

countDown(4);