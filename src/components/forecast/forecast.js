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
  const dayInAWeek = new Date().getDay()

  const forecastDays = WEEK_DAYS.slice(dayInAWeek,WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek))

  return (
    <>
      <label className="title">Daily</label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((day, i) => (
          <AccordionItem key={i}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                  <img
                    alt="weather"
                    className="icon-small"
                    src={imgSrc(day.weather[0].icon)}
                  />
                  <label className="day">
                  {forecastDays[i]}
                  </label>
                  <label className="description"> 
                  
                  {day.weather[0].main}
                  ------------
                  humidity:
                  {day.main.humidity}
                  ------------
                  {day.weather[0].icon}
                  -------------
                  wind:
                  {day.wind.speed}
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>i</AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  )
}

export default Forecast
