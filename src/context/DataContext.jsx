import axios from "axios"
import { createContext, useEffect, useState } from "react"
import { getFullCateg, getFullDisc, getFullItem } from "../services/api"

export const DATA = createContext([])

function DataContext({ children }) {
    const [categ, setCateg] = useState([])
    const [product, setProduct] = useState(null)
    const [discProduct, setDiscProduct] = useState(null)
    useEffect(() => {
        getFullCateg().then(res => setCateg(res))
        getFullItem().then(res => setProduct(res))
        getFullDisc().then(res => setDiscProduct(res))
    }, [])

    return (
        <DATA.Provider value={{ categ, product, discProduct }}>
            {children}
        </DATA.Provider>
    )
}
export default DataContext