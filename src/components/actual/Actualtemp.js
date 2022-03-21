import Citycontainer from "../nav/Citycontainer"

const Actualtemp = ({ name, main, weather, sys }) => {
    let weatherCapitalized = weather[0].description.split("")
    weatherCapitalized[0] = weather[0].description[0].toUpperCase()
    return (
        <div className="actualCard">
            <div className="location">
                <Citycontainer />
                <p>{name}, {sys.country}</p>
            </div>
            <img src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png `} alt="" />
            <p className=" actualCard__main">{weather[0].main}</p>
            <p className="actualCard__description">Description: {weatherCapitalized}</p>
            <h2 className="actualCard__temp">Temperature: {main.temp}°C</h2>
            <h3 className="actualCard__temp">Feels like: {main.feels_like}°C</h3>
        </div>
    )
}

export default Actualtemp
