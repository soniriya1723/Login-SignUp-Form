import React, { useState } from 'react'
import './LoginSignup.css';
import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';

const LoginSignup = () => {

    const [action, setAction] = useState("Sign Up");
  return (
    <div className='container'>
    <div className='header'>
    <div className='text'>{action}</div>
    <div className='underline'></div>
    </div>
    <div className='inputs'>

    {action === "Login"? <div></div>:
    <div className='input'>
    <img src={user_icon} />
    <input type='text' placeholder='Name' alt=''/>
    </div>
    }

   
    <div className='input'>
    <img src= {email_icon} />
    <input type='email' placeholder='Email' alt=''/>
    </div>
    <div className='input'>
    <img src={password_icon} />
    <input type='password' placeholder='Password' alt=''/>
    </div>
    </div>

    {action === "Sign Up"? <div></div>:
    <div className='forgot-password'>Lost Password? <span>Click Here</span></div>

    }
    <div className='submit-container'>
    <div className={action === "Login"?"submit gray": "submit"} onClick={() => {setAction("Sign Up")}}>Sign Up</div>
    <div className={action === "Sign Up"?"submit gray": "submit"} onClick={()=> {setAction("Login")}}>Login</div>
    </div>



    </div>
  )
}

export default LoginSignup