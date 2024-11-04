import { createContext, useState } from "react"
const BASKET = createContext(null)

function BasketContext({ children }) {
    const [cart, setCart] = useState([])
    return (
        <BASKET.Provider value={{ cart, setCart }}>
            {children}
        </BASKET.Provider>
    )
}
export default BasketContext