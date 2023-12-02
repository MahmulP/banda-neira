import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header'
import './index.css/'
import './Responsive.css'
import AuthLogin from './AuthLogin'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <AuthLogin />
  </React.StrictMode>,
)
