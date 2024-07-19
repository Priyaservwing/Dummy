import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Cart from './components/Cart.jsx'
import './index.css'
import UserDetails from './components/UserDetails.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Cart/>
    <UserDetails/>
  </React.StrictMode>,
)
