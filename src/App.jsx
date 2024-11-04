import Main from "./components/main/Main"
import { Route, Routes } from "react-router-dom"
import Layout from "./layouts/Layout"
import SelectedById from "./components/main/SelectedById"
import Details from "./components/main/Details"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/:catname/:subname/:subId" element={<SelectedById />} />
          <Route path="/:catname/:subname/:subId/:prodId" element={<Details />} />
          <Route path="/:prodId" element={<Details />} />
        </Route>
      </Routes>
    </>
  )
}

export default App