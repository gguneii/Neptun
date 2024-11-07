import { createContext, useState } from "react"
import { Cookies } from "react-cookie";
export const BASKET = createContext(null)

function BasketContext({ children }) {
    const cookie = new Cookies()
    const [cart, setCart] = useState(cookie.get("cart") ||[])
    function addToBasket(id, img, name, price, desc, discount, count= 1, totalPrice) {
        setCart((prevCart) => {
            const itemExists = prevCart.find(item => item.id === id);

            if (itemExists) {
                return prevCart.map(item =>
                    item.id === id ? {
                        ...item,
                        count: item.count + count
                    }
                        : item
                );
            } else return [...prevCart, { id, img, name, price, desc, discount, count, totalPrice }];
        });
        cookie.set("cart", cart)
    }
    return (
        <BASKET.Provider value={{ cart, setCart, addToBasket}}>
            {children}
        </BASKET.Provider>
    )
}
export default BasketContext