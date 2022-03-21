import Actualcontainer from "./components/actual/Actualcontainer"
import Context from "./components/context/context"

import FiveHoursContainer from "./components/fivehours/FiveHoursContainer"
import Nav from "./components/nav/Nav"

const App = () => {
    return (
        <div>
            <Context>
                <Nav />
                <Actualcontainer />
                <FiveHoursContainer />
            </Context>
        </div>
    )
}

export default App
