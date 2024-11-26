import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout/Layout"
import Chat from "./components/ChatWindow/Chat/Chat"
import HomeScreen from "./components/HomeScreen/HomeScreen"
import useIsDesktop from "./customHooks/useIsDesktop"
import React, {useState, useEffect} from "react"

function App() {
  const [isChatListOpen, setIsChatListOpen] = useState(true)
  const isDesktop = useIsDesktop()
  
  
  const handleToggleChatList = () => {
    if (isDesktop) return
    setIsChatListOpen(prev => !prev)
  }
  
  useEffect( () => {
    if (isDesktop) setIsChatListOpen(true)
  },[isDesktop])

  return (
   
    <Layout isChatListOpen={isChatListOpen} handleToggleChatList={handleToggleChatList}>
      <Routes>
        <Route path="/" element={<HomeScreen/>}/>
        <Route path="/chat/:chat_id" element={<Chat handleToggleChatList={handleToggleChatList} />}/>
      </Routes>
    </Layout>

  )
}

export default App
