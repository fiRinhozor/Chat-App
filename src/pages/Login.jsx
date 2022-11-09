import React from 'react'
import Add from "../img/addAvatar.png"
const Login = () => {
  return (
    <div className='formContainer'>
        
        <div className='formWrapper'>
            <span className='logo'>FiveSec</span>
            <span className='title'>Register</span>
            <form>
                <input type="email" placeholder='Email'/>
                <input type="password" placeholder='Password' />
                <button>Sign In</button>

            </form>
            <p>You don't have an account? Please Register</p>
        </div>
    </div>
  )
};

export default Login;
