const getIpAPI = async () => {
  const response = await fetch(`https://ipinfo.io/json?token=${process.env.TOKEN}`)
  if (response.status == 200) {
    const data = await response.json()
    const {country,region,city} = data
    return {country,region,city}
  }
  else {
    throw new Error('Unable to fetch ip Info')
  }
}

const getCountryAPI = async (code) => { 
 const response = await fetch(`https://restcountries.eu/rest/v2/alpha/${code}`)
  if (response.status == 200) {
    const data = await response.json()
    const {name,capital} = data
    return {name,capital}
  }
  else {
    throw new Error('Unable to fetch countries data')
  }
}
const getWeatherAPI = async (city) => {
const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_KEY}`)
  if (response.status == 200) {
    const data = await response.json()
    const {main, weather} = data
    return {main,weather}
  }
  else {
    throw new Error('Unable to fetch weather data')
  }
}
const getData = async () => {
  const ip = await getIpAPI()
  const {country,region,city} = ip
  const countries = await getCountryAPI(country)
  const {name,capital} = countries
  const weather = await getWeatherAPI(city.toLowerCase())
  return {name,capital,region,city,weather}
}