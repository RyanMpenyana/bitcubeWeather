import searchIcon from '../assets/WeatherWhiteIcons/search.png'
import { AsyncPaginate } from 'react-select-async-paginate';
const Input = (props) => {

  return (
    <div className='flex justify-center items-center shadow-sm xl:w-[803px] xl:h-[62px] rounded-[40px] xl:px-[33px] xl:gap-[29px]'>
        <div onClick={props.onClick} className='w-4 xl:w-11'>
            <img src={searchIcon} alt="searchIcon" />
        </div>
    <input className='bg-transparent w-full outline-none h-full' type='text' placeholder='Search for your preferred city...' onChange={props.onChange} />
</div>

  )
}

export default Input