import { createContext, useState } from "react"

export const BASKET = createContext(null)
function BasketContext({children}) {
    const [sebet, setSebet] = useState([])
  return (
    <BASKET.Provider value={{sebet, setSebet}}>
        {children}
    </BASKET.Provider>
  )
}

export default BasketContext