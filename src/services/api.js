import axios from "axios"
// function getFullCateg() {
//     axios.get("https://neptunbk.vercel.app/categories")
//         .then(res => setCateg(res.data))
// }

async function getFullCateg(){
    const res = await axios.get("https://neptunbk.vercel.app/categories")
    return res.data
}

async function getFullItem(){
    const res = await axios.get("https://neptunbk.vercel.app/products?limit=30")
    return res.data
}

async function getFullDisc(){
    const res = await axios.get("https://neptunbk.vercel.app/products/discounted")
    return res.data
}
export {getFullCateg, getFullItem, getFullDisc }