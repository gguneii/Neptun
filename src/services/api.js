import axios from "axios"

async function getAllCategories(){
  const res = await axios.get("https://neptunbk.vercel.app/categories")
  return res.data
  }

async function getAllProducts(){
    const res = await axios.get("https://neptunbk.vercel.app/products")
    return res.data
  }

async function getDiscounted(){
    const res = await axios.get('https://neptunbk.vercel.app/products/discounted')
    return res.data
}

export{getAllCategories, getAllProducts, getDiscounted}
