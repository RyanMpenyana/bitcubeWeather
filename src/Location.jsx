import React from 'react'

const Location = () => {
  return (
    <div className='font-poppins shadow-md mb-7 rounded-[30px] pt-[30px] pb-[25px]'>
        <div className='location'>
            <h3 className='font-bold text-2xl mb-[16px]'>London</h3>
            <div>
                <h1 className='text-5xl font-bold'>time</h1>
                <p className='text-xl'>date</p>
            </div>
        </div>
        <div className='current-weather'></div>
    </div>
  )
}

export default Location