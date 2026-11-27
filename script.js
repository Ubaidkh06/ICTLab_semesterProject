const fromCity = document.getElementById("fromCity");
const toCity = document.getElementById("toCity");
const timeInput = document.getElementById("timeInput");
const convertButton = document.getElementById("convertButton");
const resultText = document.getElementById("resultText");

convertButton.addEventListener("click", function () {
    console.log("click");
    
    const fromZone = fromCity.value;
    const toZone = toCity.value;
    const rawTime = timeInput.value;

    let parts = rawTime.split("T");
    const date = parts[0];
    const time = parts[1];

    parts = date.split("-");
    const year = Number(parts[0]);
    const month = Number(parts[1]);
    const day = Number(parts[2]);

    parts = time.split(":");
    const hours = Number(parts[0]);
    const minutes = Number(parts[1]);

    
    // incorrect from time -> correct/adjusted karachi time -> correct "to region" time
    let moment = new Date(year, month - 1, day, hours, minutes); // took time for from but by default its in terms of karachi (system time)

    const fromConverted = new Date(moment.toLocaleString("en-US", { timeZone: fromZone })); // this converts that karachi time into the from region equivilent

    const difference = moment - fromConverted; // we caluclate the difference between the input time in terms of karachi and the from region

    moment = new Date(Number(moment) + difference); // we add that differnce to our initial time so it becomes consistent to karachi time


    const toConverted = moment.toLocaleString("en-US", { timeZone: toZone }); // now we can saftely convert the correct karachi time to the "to region"
    

    resultText.textContent = toConverted; // replaces the result text by correct one

    
    
})