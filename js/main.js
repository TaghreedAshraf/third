let oneDay = document.getElementById('oneDay');
let dayMonth = document.getElementById('dayMonth');
let nextDay = document.getElementById('nextDay');
let thirdDay = document.getElementById('thirdDay');
let imgIcon = document.getElementById('imgIcon');
let dayTemp = document.getElementById('dayTemp');
let textWeatherDay = document.getElementById('textWeatherDay');
let locationInput = document.getElementById('location');
let country = document.getElementById('country');
let searchBtn = document.getElementById('searchBtn')
let nameCountry = "";

let maxTempDayTwo = document.getElementById('maxTempDayTwo');
let minTempDayTwo = document.getElementById('minTempDayTwo');
let textWeatherDayTwo = document.getElementById('textWeatherDayTwo');
let imgTwo = document.getElementById('imgTwo');

let maxTempDaythree = document.getElementById('maxTempDaythree')
let minTempDaythree = document.getElementById('minTempDaythree')
let textWeatherDayThree = document.getElementById('textWeatherDayThree');
let imgThree = document.getElementById('imgThree')

let currentIndexDay =0;
let date = new Date ();
let days = ['Sunday','Monday','Tuesday','Wendesday','Thursday','Friday','Saturday'];
let Months = ['January','February','March','April','May','June','July','August','September','October','November','December'];


function getDay ()
{
  oneDay.innerHTML = days[date.getDay()];
  currentIndexDay = date.getDay(); 
  dayMonth.innerHTML = date.getDate() + Months[date.getMonth()];
}
getDay ()

function getNextDay ()
{
  currentIndexDay = date.getDay()+1;
  if(currentIndexDay == days.length)
  {
    currentIndexDay = 0;
  }
  nextDay.innerHTML = days[currentIndexDay];
  return currentIndexDay;
}
getNextDay ()

function getThirdDay ()
{
  currentIndexDay++;
  if(currentIndexDay == days.length)
  {
    currentIndexDay = 0;
  }
  thirdDay.innerHTML = days[currentIndexDay];
}
getThirdDay ()


// function get data weather One Day
async function getDataWeather (country)
{
  let response =await fetch(`https://api.weatherapi.com/v1/current.json?key=fec52d7028b14c7ea25222659220206&q=${country}`)
  let result =await response.json();

  let temp = result.current.temp_c;
  let textWeather = result.current.condition.text;

  dayTemp.innerHTML = temp + "<sup>o</sup>C";
  textWeatherDay.innerHTML = textWeather;

  if(textWeather == 'Clear')
  {
    imgIcon.src = 'image/moon.png';
    imgIcon.style.width = "90px"
  }
  else if (textWeather == "Sunny")
  {
    imgIcon.src = 'image/sun.png';
    imgIcon.style.width = "50px"
  }
  else if (textWeather == "Mist")
  {
    imgIcon.src = 'image/cloud.png';
    imgIcon.style.width = "40px"
  }
  else if (textWeather == "Partly cloudy")
  {
    imgIcon.src = 'image/cloudy.png';
    imgIcon.style.width = "40px"
  }
  else if (textWeather == "Moderate rain" || textWeather == "Light rain")
  {
    imgIcon.src = 'image/rain.png';
    imgIcon.style.width = "50px"
  }
  
}
getDataWeather ("cairo")

// function search Location
searchBtn.addEventListener('click' , getDateLocation)
locationInput.addEventListener('keyup' , getDateLocation)
function getDateLocation ()
{
  country.innerHTML = locationInput.value;

  if(locationInput.value == "")
  {
    country.innerHTML = "Cairo"
  }
  
  if(locationInput.value == "")
  {
    getDataWeather ("cairo")
    getWeatherNextDays ("cairo")
  }
  else if(locationInput.value != "")
  {
    nameCountry = locationInput.value;
    getDataWeather (nameCountry)
    getWeatherNextDays (nameCountry)
  }
}
getDateLocation ()

// function get data weather second Day & Third Day
async function getWeatherNextDays (country)
{
  let response =await fetch(`https://api.weatherapi.com/v1/forecast.json?key=fec52d7028b14c7ea25222659220206&q=${country}&days=3`)
  let result =await response.json();

  let maxTempTwo = result.forecast.forecastday[1].day.maxtemp_c;
  maxTempDayTwo.innerHTML = maxTempTwo + '<sup>o</sup>C';

  let minTempTwo = result.forecast.forecastday[1].day.mintemp_c;
  minTempDayTwo.innerHTML = minTempTwo + '<sup>o</sup>C';

  let textDayTwo = result.forecast.forecastday[1].day.condition.text;
  textWeatherDayTwo.innerHTML = textDayTwo;

  if(textDayTwo == 'Clear')
  {
    imgTwo.src = 'image/moon.png';
    imgTwo.style.width = "90px"
  }
  else if (textDayTwo == "Sunny")
  {
    imgTwo.src = 'image/sun.png';
    imgTwo.style.width = "50px"
  }
  else if (textDayTwo == "Mist")
  {
    imgTwo.src = 'image/cloud.png';
    imgTwo.style.width = "40px"
  }
  else if (textDayTwo == "Partly cloudy")
  {
    imgTwo.src = 'image/cloudy.png';
    imgTwo.style.width = "40px"
  }
  else if (textDayTwo == "Moderate rain")
  {
    imgTwo.src = 'image/rain.png';
    imgTwo.style.width = "50px"
  }
  else if (textDayTwo == "Patchy rain possible")
  {
    imgTwo.src = 'image/rainsun.png';
    imgTwo.style.width = "50px"
  }


  let maxTempThree = result.forecast.forecastday[2].day.maxtemp_c;
  maxTempDaythree.innerHTML = maxTempThree + '<sup>o</sup>C';

  let minTempThree = result.forecast.forecastday[2].day.mintemp_c;
  minTempDaythree = minTempThree + '<sup>o</sup>C';

  let textDayThree = result.forecast.forecastday[2].day.condition.text;
  textWeatherDayThree.innerHTML = textDayThree


  if(textDayThree == 'Clear')
  {
    imgThree.src = 'image/moon.png';
    imgThree.style.width = "90px"
  }
  else if (textDayThree == "Sunny")
  {
    imgThree.src = 'image/sun.png';
    imgThree.style.width = "50px"
  }
  else if (textDayThree == "Mist")
  {
    imgThree.src = 'image/cloud.png';
    imgThree.style.width = "40px"
  }
  else if (textDayThree == "Partly cloudy")
  {
    imgThree.src = 'image/cloudy.png';
    imgThree.style.width = "40px"
  }
  else if (textDayThree == "Moderate rain")
  {
    imgThree.src = 'image/rain.png';
    imgThree.style.width = "50px"
  }
  else if (textDayThree == "Patchy rain possible")
  {
    imgThree.src = 'image/rainsun.png';
    imgThree.style.width = "50px"
  }
  
}
getWeatherNextDays ("cairo")
