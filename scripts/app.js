const weather = document.querySelector('.weather')
weather.innerHTML = `<h2>'Loading...'</h2>`

let cityInfo

const getCityData = async () => {
  await getCityInfo()
  const data = `<h3>City: ${cityInfo.city}</h3>
    <h3>Region: ${cityInfo.region}</h3>
    <h3>Country: ${cityInfo.country}</h3>
    <h3>Capital: ${cityInfo.capital}</h3>
    <h3>Temperature: ${cityInfo.temperature}</h3>
    <h3>Weather description: ${cityInfo.humidity}</h3>`
  weather.innerHTML = data
}
getCityData()

