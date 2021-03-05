Const key = '682500PcukwQUtq1UDd6XimUFAmBA5HL';

// get weather info
const getWeather = async (id) => {

const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
const query = ${id}?apikey=${key};

const response = await fetch(base + query);
const data = await response.json();

return data[0];

};


const cityForm = document.querySelector('form');

const updateCity= async (city) => {

const cityDets = await getCity(city);
const weather = await getWeather(cityDets.Key);

return {
cityDets: cityDets,
weather: weather
};

};

cityForm.addEventListener('submit', e => {
// prevent default action 
e.preventDefault();

//get city value 
const city = cityFrorm.city.value.trim();
cityForm.reset();

//update the ui with new city
updateCity(city)
.then(data => console.log(data))
.catch(err => console.log(err));
});
