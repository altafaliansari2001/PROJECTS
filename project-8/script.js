var stop = document.querySelector(".stop");
var start = document.querySelector(".start");
var reset = document.querySelector(".reset");
var timerwatch = document.querySelector(".timerwatch");

var count = 0; // Count in milliseconds
var int; // Interval variable

reset.addEventListener("click", function() {
    clearInterval(int); // Stop any running interval
    count = 0; // Reset count
    updateDisplay(); // Update display to show 00:00:00
});

start.addEventListener("click", function() {
    clearInterval(int); // Stop any previous interval
    int = setInterval(function() {
        count+= 10; // Increment count by 10 milliseconds
        updateDisplay(); // Update display
    }, 10); // Update every 10 milliseconds
});

stop.addEventListener("click", function() {
    clearInterval(int); // Stop the interval
});

// Function to update the display
function updateDisplay() {
    var minutes = Math.floor((count / 60000) % 60);
    var seconds = Math.floor((count / 1000) % 60);
    var milliseconds = Math.floor((count % 1000) / 10);

    // Format time as MM:SS:MS
    timerwatch.textContent = 
        String(minutes).padStart(2, '0') + ":" +
        String(seconds).padStart(2, '0') + ":" +
        String(milliseconds).padStart(2, '0');
}
