const URI = "https://api.openweathermap.org/data/2.5/weather"
const KEY = "c69e4a51350d1abe51666a11e0263eb2"
fetch(`${URI}?q=Memphis&appid=${KEY}`).then((res)=>{
  console.log(res)
  return res.json()
}).then((data)=>{
  console.log(data)
})


const dateElement = document.getElementById("date");

//show the date
const options = {weekday:"short", month:"short", day:"numeric" };
const today = new Date();

dateElement.innerHTML = today.toLocaleDateString("en-US", options);
