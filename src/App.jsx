import { Route, Routes } from "react-router-dom"
import MainContainer from "./components/MainContainer/MainContainer"
import Home from "./components/Home/Home"
function App() {
  return (
   
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chat/:chat_id" element={<MainContainer />} />
    </Routes>

  )
}

export default App
