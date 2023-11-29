import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header.jsx'
import App from './App.jsx'
import Footer from './Footer.jsx'
import './index.css'
import './Responsive.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <App />
    <Footer />
  </React.StrictMode>,
)
