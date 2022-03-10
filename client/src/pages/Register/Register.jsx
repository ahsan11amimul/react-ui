import React from 'react';
import './login.css'

function Register() {
  return (
      <>
          <div className="login">
              <div className="loginWrapper">
                  <div className="loginLeft">
                      <h3 className="loginLogo">Social Media</h3>
                      <span className="loginDesc">
                          Connect With Friends and the world around you.
                      </span>
                  </div>
                  <div className="loginRight">
                      <div className="loginBox">
                          <input placeholder='Username' className="loginInput" />
                          <input placeholder='Email' className="loginInput" />
                          <input placeholder='Password' className="loginInput" />
                          <button className='loginButton'>Register</button>
                         
                          <button className="registerButton">Login</button>
                      </div>
                  </div>
              </div>
          </div>
      </>
  )
}

export default Register