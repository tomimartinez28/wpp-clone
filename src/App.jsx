import { Route, Routes } from "react-router-dom"
import MainContainer from "./components/MainContainer/MainContainer"

function App() {
  return (
   
    <Routes>
      <Route path="/:chat_id" element={<MainContainer />} />
    </Routes>

  )
}

export default App
