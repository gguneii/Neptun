import Main from "./components/main/Main"
import { Route, Routes, useLocation } from "react-router-dom"
import Layout from "./layouts/Layout"
import SelectedById from "./components/main/SelectedById"
import ProductDetails from "./components/main/ProductDetails"
import { useEffect } from "react"

function App() {
  const {pathname} = useLocation()
  useEffect(()=>{
    window.scrollTo(0,0)
  },[pathname])
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/:catName/:subName/:subId" element={<SelectedById />} />
          <Route path="/details/:id" element={<ProductDetails />} />
        </Route>
      </Routes>
    </>
  )
}

export default App