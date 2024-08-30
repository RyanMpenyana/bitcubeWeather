import React from 'react'
import DailyForecast from './DailyForecast'
import HourlyForecast from './HourlyForecast'

const ForecastContainer = () => {
  return (
    <div className="md:flex md:justify-center md:gap-6 ">
    <DailyForecast />
    <HourlyForecast />
  </div>
  )
}

export default ForecastContainer