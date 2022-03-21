import React from 'react';

const Hour = ({ timeHour, icon, temp, min, max }) => {
    let hour = timeHour.split(" ").reverse().join(" ")
    return (
        <div className='hour'>
            <img src={`https://openweathermap.org/img/wn/${icon}@2x.png `} alt="" className='hour__icon' />
            <p className='hour__time'>{hour}</p>
            <p className='hour__temp'>Temperature: {temp}°C</p>
            <p className='hour__min'>Min: {min}°C</p>
            <p className='hour__max'>Max: {max}°C</p>
        </div>
    );
};

export default Hour;
