import { useState } from "react"
import { useContext } from "react"
import { contx } from "../context/context"
import cityLocation from "./images/location.png"

const Citycontainer = () => {
    const [lookin, setLookin] = useState(false)
    const [city, setCity] = useState()
    const [citySelector] = useContext(contx)
    const lookFor = () => { setLookin(!lookin) }
    function citySearcher(e) {
        setCity({
            [e.target.name]: e.target.value
        })
    }
    function formEvent(e) {
        e.preventDefault()
        citySelector(city)
        lookFor()
    }

    return (<div className="actualCard__city">
        <img className="city" src={cityLocation} onClick={lookFor} alt="" />
        {lookin && <form action="" onSubmit={formEvent} ><input className="slide-right" type="text" name="city" onChange={citySearcher}></input></form>}
    </div>)
}

export default Citycontainer
