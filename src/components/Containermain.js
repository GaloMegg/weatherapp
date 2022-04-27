import React, { useEffect, useState } from 'react'
import Background from './Background'
import Loader from './Loader'

const Containermain = () => {
    const [loading, setLoading] = useState(true)
    const [weather, setWeather] = useState(null)
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(success, error)
    }, [])


    function success(position) {
        const { latitude, longitude } = position.coords
        request(true, latitude, longitude)
    }
    function error() {
        getWeatherIP()
    }
    const getWeatherIP = async () => {
        let req = await fetch(`https://ipgeolocation.abstractapi.com/v1/?api_key=${process.env.REACT_APP_apiKeyIP}`)
        let data = await req.json()
        const { city } = data
        request(false, city)
    }
    const request = async (a, b, c) => {
        let url
        if (a) {
            url = `https://api.openweathermap.org/data/2.5/weather?lat=${b}&lon=${c}&appid=${process.env.REACT_APP_apiKey}&units=metric`
        }
        else {
            url = `https://api.openweathermap.org/data/2.5/weather?q=${b}&appid=${process.env.REACT_APP_apiKey}&units=metric`
        }
        try {
            let req = await fetch(url)
            let data = await req.json()
            setWeather(data)
            setLoading(false)
        }
        catch {
            error()
        }
    }
    return (
        <div>
            {loading ? <Loader /> : <Background weather={weather} />}
        </div>
    )
}

export default Containermain