import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './global.css'
import { ChatsContextProvider } from './contexts/ChatsContext.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ChatsContextProvider>
      <App />
    </ChatsContextProvider>
  </BrowserRouter>,
)
