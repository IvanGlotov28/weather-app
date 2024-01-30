import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from 'react-accessible-accordion'
import imgSrc from '../../utils/imgSrc'
import './forecast.css'

const WEEK_DAYS = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
]

const Forecast = ({ data }) => {
  const today = new Date().getDay()

  const forecastDays = WEEK_DAYS.slice(today, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, today)
  )
  console.log(data.daily)
  return (
    <>
      <label className="title">Daily</label>
      <Accordion allowZeroExpanded>
        {data.daily.splice(0, 7).map((day, i) => {
          console.log(day)
          return (
            <AccordionItem key={i}>
              <AccordionItemHeading className="headind">
                <AccordionItemButton>
                  <div className="daily-item">
                    <img
                      alt="weather"
                      className="icon-small"
                      src={imgSrc(day.weather[0].icon)}
                    />
                    <label className="day">{forecastDays[i]} </label>
                    <label className="description">
                      {day.weather[0].description}
                    </label>
                    <label className="min-max">
                      {Math.round(day.temp.min)}°C / {Math.round(day.temp.max)}
                      °C
                    </label>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="daily-details-grid">
                  <div className="daily-details-grid-item">
                    <label>Feels like</label>
                    <label>{day.feels_like.day}°C</label>
                  </div>
                  <div className="daily-details-grid-item">
                    <label>Pressure</label>
                    <label>{day.pressure} hPa</label>
                  </div>
                  <div className="daily-details-grid-item">
                    <label>Humidity</label>
                    <label>{day.humidity}%</label>
                  </div>
                  <div className="daily-details-grid-item">
                    <label>Wind speed</label>
                    <label>{day.wind_speed}</label>
                  </div>
                  <div className="daily-details-grid-item">
                    <label>Clouds</label>
                    <label>{day.clouds}%</label>
                  </div>
                
                  <div className="daily-details-grid-item">
                    <label>Wind degree </label>
                    <label>{day.wind_deg}°</label>
                  </div>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
          )
        })}
      </Accordion>
    </>
  )
}

export default Forecast
