import { Navigate, Route, Routes } from "react-router-dom"
import ChatLayout from "./hocs/ChatLayout/ChatLayout"
import Chat from "./components/ChatWindow/Chat/Chat"
import HomeScreen from "./screens/HomeScreen/HomeScreen"
import React from "react"
import LoginScreen from "./screens/LoginScreen/LoginScreen"
import RewritePasswordScreen from "./screens/RewritePasswordScreen/RewritePasswordScreen"
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen"
import ResetPasswordScreen from "./screens/ResetPasswordScreen/ResetPasswordScreen"
import AuthLayout from "./hocs/AuthLayout/AuthLayout"
import NewChatScreen from "./screens/NewChatScreen/NewChatScreen"
import ProtectedRoute from "./components/ProtectedRoute"
import ProfileScreen from "./screens/ProfileScreen/ProfileScreen"

function App() {



  return (


    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/reset-password" element={<ResetPasswordScreen />} />
        <Route path="/rewrite-password" element={<RewritePasswordScreen />} />
      </Route>


      <Route element={<ProtectedRoute />}>
        <Route element={<ChatLayout />}>

          <Route path="/home" element={<HomeScreen />} />
          <Route path="/chat/:chat_id" element={<Chat />} />
          <Route path="/new-chat/:user_id" element={<NewChatScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
        </Route>
      </Route>

      {/* Redirigir cualquier otra ruta a login */}
      <Route path="*" element={<Navigate to={'/'} />} /> 

    </Routes>


  )
}

export default App
