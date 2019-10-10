// JavaScript source code
function calculateTip() {
    let billAmount = document.getElementById("billAmount").value;
    let serviceQuality = document.getElementById("serviceQuality").value;
    let numberOfPeople = document.getElementById("numberOfPeople").value;

    // Check for a value in billAmount and serviceQuality
    if (billAmount === "" || serviceQuality == 0) {
        alert("Please enter values");
        return;
    }

    // Checks if there is more than one person in numberOfPeople
    if (numberOfPeople === "" || numberOfPeople <= 1) {
        numberOfPeople = 1;
        document.getElementById("each").style.display = "none";
    } else {
        document.getElementById("each").style.display = "block";
    }

    // Calculates the tip amount
    let total = (billAmount * serviceQuality) / numberOfPeople;

    // Rounds total down to two decimal places
    total = Math.round(total * 100) / 100;

    // Keeps the total to two decimal places at all times
    total = total.toFixed(2);

    document.getElementById("tipTotal").style.display = "block";
    document.getElementById("tip").innerHTML = total;
}

// Hides each on load
document.getElementById("each").style.display = "none";

// Call the function when button is clicked
document.getElementById("calculate").onclick = function() {
    calculateTip();
};