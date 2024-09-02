import React from 'react'
import Input from './Input'
import currentLocationIcon from '../assets/WeatherWhiteIcons/currentlocationIcon.png'
import { useContext } from 'react'
import { AppContext } from '../Context/Context'
const Header = (props) => {
    const data = useContext(AppContext)
  return (
    <div className='flex items-center  py-[20px]  px-8 justify-between xl:mb-[49px] xl:px-[77px]'>
    <div className=''>
    <div className='xl:w-[100px] bg-[#D9D9D9] rounded-[40px] py-1 px-[10px]'>
            <div className='w-full'>
                <div className='bg-black h-[30px] w-[30px] rounded-full'></div>
            </div>
        </div>
            <h4 className='hidden lg:block lg xl:font-extrabold xl:text-lg'>
                Dark mode
            </h4>
    </div>
        <div>
            <Input onChange={props.onChange} onClick={props.onClick} options={props.options}/>
        </div>
        <div className='flex items-center lg:h-[62px]'>
            <button className='flex items-center bg-light rounded-[40px] h-full lg:px-7 lg:py-4'><span><img src={currentLocationIcon} alt="currentLocationIcon" /></span><span className='hidden lg:block'>Current Location</span></button>
        </div>
    </div>
  )
}

export default Header