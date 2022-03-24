import React from 'react'
import Data from './Data'
import Forecast from './Forecast'
//#region 
import Thunderstorm from "../assets/bgImg/thunderstorm.jpg"
import Drizzle from "../assets/bgImg/drizzle.jpg"
import Rain from "../assets/bgImg/rain.jpg"
import Snow from "../assets/bgImg/snow.jpg"
import Mist from "../assets/bgImg/mist.jpg"
import Clear from "../assets/bgImg/clear.jpg"
import Clouds from "../assets/bgImg/fewclouds.jpg"
//#endregion


const Background = ({ weather }) => {
    let imgSrc
    if (weather.weather[0].id >= 200 && weather.weather[0].id < 300) { imgSrc = Thunderstorm }
    else if (weather.weather[0].id > 300 && weather.weather[0].id < 400) { imgSrc = Drizzle }
    else if (weather.weather[0].id >= 500 && weather.weather[0].id < 600) { imgSrc = Rain }
    else if (weather.weather[0].id >= 600 && weather.weather[0].id < 700) { imgSrc = Snow }
    else if (weather.weather[0].id >= 700 && weather.weather[0].id < 800) { imgSrc = Mist }
    else if (weather.weather[0].id === 800) { imgSrc = Clear }
    else if (weather.weather[0].id >= 801 && weather.weather[0].id < 805) { imgSrc = Clouds }
    return (
        <div className="container__bg">
            <img src={imgSrc} alt="background" className='container__bg-img' />
            <Data weather={weather} />
            <Forecast />|
        </div >
    )
}

export default Background