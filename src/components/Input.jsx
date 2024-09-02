import searchIcon from '../assets/WeatherWhiteIcons/search.png'
const Input = ({onClick, onChange, options}) => {
    
  return (
    <>
    <div className='flex justify-center items-center px-8 h-16 gap-2 shadow-sm lg:w-[500px] xl:w-[803px] xl:h-[62px] rounded-[40px] xl:px-[33px] xl:gap-[29px]'>
        <div onClick={onClick} className='w-4 xl:w-11'>
            <img src={searchIcon} alt="searchIcon" />
        </div>
        <input className='bg-transparent w-full outline-none h-full' type='text' placeholder='Search for your preferred city...' onChange={onChange} />
    
    </div>
    <div className=''>
    {options && options.map((item ,index) => (
        <div key={index}>{item.name}, {item.country}</div>
    ))}
    </div>
    </>
  )
}

export default Input