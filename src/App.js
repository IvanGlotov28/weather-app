import { useState } from 'react'
import './App.css'
import Search from './components/search/search'
import CurrentWeather from './components/current-weather/current-weather'
import Forecast from './components/forecast/forecast'
import { WEATHER_API_KEY, WEATHER_API_URL } from './components/api'

function App() {
  const [currentWeather, setCurrentWeather] = useState(null)
  const [forecast, setForecast] = useState(null)

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(' ')

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    )

    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    )

    Promise.all([currentWeatherFetch, forecastFetch]).then(async (response) => {
      const weatherResponse = await response[0].json()
      const forecastResponse = await response[1].json()
      setCurrentWeather({ city: searchData.label, ...weatherResponse })
      setForecast({ city: searchData.label, ...forecastResponse })
    })

    //     Promise.all([currentWeatherFetch, forecastFetch])
    //       .then(async (responses) => {
    //         const [currentWeatherResponse, forecastResponse] = responses
    //         const weatherData = await currentWeatherResponse.json()
    //         const forecastData = await forecastResponse.json()
    //
    //         setCurrentWeather({ city: searchData.label, ...weatherData })
    //         setForecast({ city: searchData.label, ...forecastData })
    //       })
    //       .catch((error) => {
    //         console.error(error)
    //       })

    console.log(currentWeather)
    console.log(forecast)
  }

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />

      {currentWeather && <CurrentWeather data={currentWeather} />}

      {forecast && <Forecast data={forecast} />}
    </div>
  )
}

export default App
