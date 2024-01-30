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
      `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&appid=a120d227b105aa9b6888ff0b3fbc86a5&exclude=hourly,minutely,alerts,current`
    )

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (responses) => {
        const [currentWeatherResponse, forecastResponse] = responses
        const weatherData = await currentWeatherResponse.json()
        const forecastData = await forecastResponse.json()

        setCurrentWeather({ city: searchData.label, ...weatherData })
        setForecast({ city: searchData.label, ...forecastData })
      })
      .catch((error) => {
        console.error(error)
      })

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
