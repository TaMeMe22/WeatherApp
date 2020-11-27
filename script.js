//show the date
const dateElement = document.getElementById("date");

const options = {weekday:"short", month:"short", day:"numeric" };
const today = new Date();

dateElement.innerHTML = today.toLocaleDateString("en-US", options);


//Weather starts here
const URI = 'https://api.openweathermap.org/data/2.5/weather';
const KEY = "c69e4a51350d1abe51666a11e0263eb2"
let currentCity = ['Munford'];
let currentState = ['TN'];
let units = 'imperial';

fetch(`${URI}?q=${currentCity[0]}&${currentState[0]}&units=${units}&appid=${KEY}`)
.then(response => {
        if(!response.ok) {
            return Error("City Not Found");
        }
        console.log(response);
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
