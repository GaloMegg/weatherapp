import React, { useEffect, useState } from 'react'
import Background from './Background'

const Containermain = () => {
    const [loading, setLoading] = useState(true)
    const [weather, setWeather] = useState(null)
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(success)
    }, [])
    const success = (position) => {
        const { latitude, longitude } = position.coords
        req(latitude, longitude)
    }
    const req = async (lat, lon) => {
        let req = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_apiKey}&units=metric`)
        let data = await req.json()
        setWeather(data)
        setLoading(false)
    }
    return (
        <div>
            {loading || <Background weather={weather} />}
        </div>
    )
}

export default Containermain