//show the date
//const dateElement = document.getElementById("date");
const date = (new Date()).toDateString();
//const options = { weekday: "short", month: "short", day: "numeric" };

//dateElement.innerHTML = today.toLocaleDateString("en-US", options);


//Weather starts here
const URI = 'https://api.openweathermap.org/data/2.5/weather';
const KEY = "c69e4a51350d1abe51666a11e0263eb2"
let city = ['Munford'];
let state = ['TN'];
let units = 'imperial';



document.querySelectorAll('.search')[0].addEventListener('keydown', (e) => {
  if (e.code == "Enter") {
    console.log(e.code)
    let city = e.target.value
    //let ste = document.getElementById("statelist")
    //let state = ste.value
    fetch(`${URI}?q=${city},${state}&units=${units}&appid=${KEY}`)
      .then(response => {
        if (!response.ok) {
          return Error("City Not Found");
           
        }
        //console.log(response);
        return response.json();
      })
      .then(data => {
        //console.log(data);
        document.getElementById("current").innerHTML = `
                                    <div id="date">${date}</div>
                                    <div class="temp">${Math.round(data.main.temp)}<span>°F</span></div>
                                    <div class="hi-low">${Math.round(data.main.temp_max)}°F / ${Math.round(data.main.temp_min)}°F</div>
                                    <div class="weather">${data.weather[0].main}</div>
        `
        
      })
  }
});

