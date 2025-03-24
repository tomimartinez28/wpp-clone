import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './global.css'
import { ChatsContextProvider } from './contexts/ChatsContext.jsx'
import AuthContextProvider from './contexts/AuthContext.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthContextProvider>
      <ChatsContextProvider>
        <App />
      </ChatsContextProvider>
    </AuthContextProvider>
  </BrowserRouter>,
)
