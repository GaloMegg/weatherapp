import { useContext, useEffect, useState } from "react"
import Loader from "../../Loader"
import { contx } from "../context/context"
import Actualtemp from "./Actualtemp"

const Actualcontainer = () => {
    const [loading, setloading] = useState(true)
    const [apiData, setApiData] = useState(undefined)
    const [, fetchData] = useContext(contx)
    useEffect(() => {
        if (fetchData.city) {
            const { city } = fetchData.city
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_apiKey}`
            request(url)
        }
        else {
            navigator.geolocation.getCurrentPosition(success)
        }
        //eslint-disable-next-line react-hooks/exhaustive-deps

    }, [fetchData.city])

    const success = (position) => {
        let lat = position.coords.latitude
        let lon = position.coords.longitude
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.REACT_APP_apiKey}`
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
            setloading(false)
        }
        catch (err) {
            console.error(err)
        }
    }
    return (
        <div className="actualCard__flex">
            {loading ? <Loader /> : <Actualtemp {...apiData} />}
        </div>
    )
}


export default Actualcontainer
