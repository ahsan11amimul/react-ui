import React from 'react';
import './login.css'

function Login() {
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
                          <input placeholder='Email' className="loginInput" />
                          <input placeholder='Password' className="loginInput" />
                          <button className='loginButton'>Log In</button>
                          <span className="forgetPassword">Forgot Password</span>
                          <button className="registerButton">Sign Up Now</button>
                      </div>
                  </div>
              </div>
          </div>
      </>
  )
}

export default Login