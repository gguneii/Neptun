import { createContext, useState } from "react"
export const BASKET = createContext(null)

function BasketContext({ children }) {
    const [cart, setCart] = useState([])
    function addToBasket(id, img, name, price, discount,count){
        setCart([...cart, {
            id, img, name, price, discount, count
        }])
    }
     function deleteProd(id){
      setCart(cart.filter(item => item.id !== id))
     }
    return (
        <BASKET.Provider value={{ cart, setCart, addToBasket, deleteProd}}>
            {children}
        </BASKET.Provider>
    )
}
export default BasketContext