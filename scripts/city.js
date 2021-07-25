class CityInfo {
  constructor(cityInfo) {
    this.cityInfo = cityInfo
  }
  get city() {
    return this.cityInfo.city
  }
  get region() {
    return this.cityInfo.region
  }
  get country() {
    return this.cityInfo.name
  }
  get capital() {
    return this.cityInfo.capital
  }
  get temperature() {
    const weather = this.cityInfo.weather
    const {
      main
    } = weather
    const {
      temp
    } = main
    const temperature = (temp - 273).toFixed(1)
    return temperature + '&#8451';
  }
  get humidity() {
    const main = this.cityInfo.weather
    const {
      weather
    } = main
    const {
      description
    } = weather[0]
    return description
  }
}


const getCityInfo = async () => {
  await getData().then((data) => {
    cityInfo = new CityInfo(data)
  }).catch(error => {
    weather.innerHTML = `<h2>Unable to fetch the data</h2>`
  })
}