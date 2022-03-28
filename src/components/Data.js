import React from 'react'
import Time from './time/Time'

const Data = ({ weather }) => {
  return (
    <div className='actual'>
      <a href='/' >
        <svg xmlns="http://www.w3.org/2000/svg" className='actual__refresher' viewBox="0 0 24 24" width="24px" fill="#ffffff"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z" /></svg>
      </a>
      <h1 className='actual__city'>{weather.name}, {weather.sys.country}</h1>
      {/* nuevo componente data */}
      <h3 className='actual__date'>
        <Time />
      </h3>
      <div className='actual__flex-icon'>
        <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt="" className='actual__icon' />
        <p className='actual__temp'>{weather.main.temp}°C</p>
      </div>
      <div className='actual__flex'>
        <p className='actual__min'> Min: {weather.main.temp_min}°C </p>
        <p className='actual__max'>Max: {weather.main.temp_max}°C </p>
      </div>
      <p className='actual__fl'>Feels Like: {weather.main.feels_like}°C </p>
      <p className='actual__humidity'><i><svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#ffffff"><rect fill="none" height="24" width="24" /><path d="M12,2c-5.33,4.55-8,8.48-8,11.8c0,4.98,3.8,8.2,8,8.2s8-3.22,8-8.2C20,10.48,17.33,6.55,12,2z M12,20c-3.35,0-6-2.57-6-6.2 c0-2.34,1.95-5.44,6-9.14c4.05,3.7,6,6.79,6,9.14C18,17.43,15.35,20,12,20z M7.83,14c0.37,0,0.67,0.26,0.74,0.62 c0.41,2.22,2.28,2.98,3.64,2.87c0.43-0.02,0.79,0.32,0.79,0.75c0,0.4-0.32,0.73-0.72,0.75c-2.13,0.13-4.62-1.09-5.19-4.12 C7.01,14.42,7.37,14,7.83,14z" /></svg></i> {weather.main.humidity}%</p>
    </div>
  )
}

export default Data