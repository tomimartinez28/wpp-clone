import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout/Layout"
import Chat from "./components/ChatWindow/Chat/Chat"
import HomeScreen from "./components/HomeScreen/HomeScreen"

function App() {
  return (
   
    <Layout>
      <Routes>
        <Route path="/" element={<HomeScreen/>}/>
        <Route path="/chat/:chat_id" element={<Chat/>}/>
      </Routes>
    </Layout>

  )
}

export default App
