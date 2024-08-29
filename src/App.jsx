import { useEffect } from 'react'
import './App.css'
import { useState } from 'react'
import Location from './Location'
import CurrentWeather from './CurrentWeather'
import DailyForecast from './DailyForecast'
import HourlyForecast from './HourlyForecast'
import searchIcon from './assets/WeatherWhiteIcons/search.png'

const API_KEY ='c39dcb6fbf59d39634cb90bb49d9e560'
function App() {
    const [search, setSearch] = useState('')

    const handleSearch = () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search},&appid=${API_KEY}`).then((res) => {
            return res.json()
        }).then(data => {
            console.log(data)
        })
    }

  return (
    <div className='text-center text-white bg-primary py-8 px-[42px]'>
        <div className='flex justify-center items-center'>
            <div onClick={handleSearch} className='w-4'>
                <img src={searchIcon} alt="searchIcon" />
            </div>
            <input className='bg-transparent shadow-sm h-8' type='text' placeholder='Search for your preferred city...' onChange={(e) => setSearch(e.target.value)} />
        </div>
        <Location/>
        <CurrentWeather/>
        <DailyForecast/>
        <HourlyForecast/>
    </div>
  )
}

export default App
