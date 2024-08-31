import React from 'react'
import DailyForecast from './DailyForecast'
import HourlyForecast from './HourlyForecast'

const ForecastContainer = () => {
  return (
    <div className="flex flex-col lg:justify-center lg:flex-row xl:gap-[61px]">
    <DailyForecast />
    <HourlyForecast />
  </div>
  )
}

export default ForecastContainer