import { useContext, useEffect, useState } from 'react';
import { contx } from '../context/context';
import FiveHours from './Fivehours';

const FiveDaysContainer = () => {

    const [apiData, setApiData] = useState(undefined)
    const [, fetchData] = useContext(contx)
    useEffect(() => {
        if (fetchData.city) {
            const { city } = fetchData.city
            let url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=5&units=metric&appid=${process.env.REACT_APP_apiKey}`
            request(url)
        }
        else {
            navigator.geolocation.getCurrentPosition(success)
        }
    }, [fetchData.city])
    const success = (position) => {
        let lat = position.coords.latitude
        let lon = position.coords.longitude
        let url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=5&units=metric&appid=${process.env.REACT_APP_apiKey}`
        request(url)
    }
    const request = async (url) => {
        try {

            const resp = await fetch(url)
            const data = await resp.json()
            if (data.cod === "404") {
                return
            }
            setApiData(data)
        }
        catch (err) {
            console.error(err)
        }
    }
    return (
        <div className='fiveHours__flex'>
            <div className='fiveHours__gradient'>
                {apiData && <FiveHours {...apiData} />}
            </div>
        </div>
    )
};

export default FiveDaysContainer;
