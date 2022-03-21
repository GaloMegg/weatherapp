import { createContext } from "react"
import { useState } from "react"


const Context = ({ children }) => {
    const { Provider } = contx
    const [city, setCity] = useState(null)
    function citySelector(x) {
        setCity(x)
    }
    function locationSelector() {
        setCity(null)
    }
    const fetchData = {
        city
    }
    const fullContext = [citySelector, fetchData,locationSelector]
    return (
        <Provider value={fullContext}>
            {children}
        </Provider>
    )
}

export default Context
export const contx = createContext()
