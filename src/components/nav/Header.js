import { useContext } from "react"
import { contx } from "../context/context"

const Header = () => {
    const [, ,locationSelector] = useContext(contx)
    return (
        <h1 className="header" onClick={locationSelector}>Weather</h1>
    )
}

export default Header 
