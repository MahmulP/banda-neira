import { useState } from 'react';
import backgroundImage from './assets/images/backgrounds/background-login.jpg';
import './index.css';
import './Responsive.css';
import './bootstrap.min.css';
import './assets/vendors/jquery-ui/jquery-ui.css';
import './assets/vendors/fontawesome/css/all.min.css';
import './assets/vendors/wostin-icons/style.css';
import './assets/vendors/timepicker/timePicker.css';
import './assets/vendors/jquery/jquery-3.6.0.min.js';
import './assets/vendors/bootstrap/js/bootstrap.bundle.min.js';
import './assets/vendors/timepicker/timePicker.js';

export default function(){
  const [count, setCount] = useState(0);
    return (
        <>
        <style
    dangerouslySetInnerHTML={{
      __html:
        '\n      .login-container {\n        background-color: #ffffff;\n        border-radius: 10px;\n        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n        width: 350px;\n        margin: 100px auto;\n        padding: 30px;\n        text-align: center;\n      }\n\n      h1 {\n        font-size: 28px;\n        margin-bottom: 10px;\n      }\n\n      h2 {\n        font-size: 24px;\n        margin-bottom: 30px;\n      }\n\n      .login-form {\n        display: flex;\n        flex-direction: column;\n      }\n\n      input[type="text"],\n      input[type="password"] {\n        background-color: #f5f5f5;\n        border: none;\n        border-radius: 5px;\n        padding: 10px;\n        margin-bottom: 20px;\n      }\n\n      button[type="submit"] {\n        background-color: #0096ff;\n        border: none;\n        border-radius: 5px;\n        color: #ffffff;\n        cursor: pointer;\n        padding: 10px;\n        text-transform: uppercase;\n        width: 100%;\n      }\n\n      button[type="submit"]:hover {\n        background-color: #0073e6;\n      }\n\n      a {\n        color: #0096ff;\n        text-decoration: none;\n      }\n\n      a:hover {\n        text-decoration: underline;\n      }\n    '
    }}
  />  
        <div className='d-flex justify-content-center align-items-center h-100'>
          <div className="login-container" style={{ marginTop: 230 }}>
            <h1 className='fw-bold mb-2 text-center'>OLSAM</h1>
            <h2 className='fw-bold mb-2 text-center my-4'>Protect our Environment</h2>
            <form className="login-form">
        <input className='mb-4 w-100' type="text" placeholder="Username" />
        <input className='mb-4 w-100' type="text" placeholder="Email" />
        <input className='mb-4 w-100' type="text" placeholder="No. Hp" />
        <input className='mb-4 w-100' type="password" placeholder="Password" />
        <button className='justify-content-center mb-4 w-100' type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account? <a href="login.html">Login</a>
      </p>
    </div>
  </div>
</>
    )
}