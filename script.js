// Create a function to update the clock
function updateClock() {
    // Get the current time
    var currentTime = new Date();

    // Format the time into hours, minutes, and seconds
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Display the formatted time in the div element
    let clockDiv = document.getElementById('clock');
    clockDiv.textContent = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
}

// Calling the function once to initialize the clock
updateClock();

// Using setInterval() to update the clock every second
setInterval(updateClock, 1000);
