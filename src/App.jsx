import Main from "./components/main/Main"
import { Route, Routes } from "react-router-dom"
import Layout from "./layouts/Layout"
import SelectedById from "./components/main/SelectedById"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/category/:catId/:subId" element={<SelectedById />} />
        </Route>
      </Routes>
    </>
  )
}

export default App