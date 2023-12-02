import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header'
import './index.css/'
import './Responsive.css'
import AuthRegister from './AuthRegister'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <AuthRegister />
  </React.StrictMode>,
)
