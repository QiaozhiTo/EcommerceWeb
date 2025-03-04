import React from 'react'
import './signin.css'

export default function SignIn() {
  return (
    <div className='sign-in-content'>
        
        <div className="content-area">
            <div className="auth-undefined">
                <div className="auth-main"></div>
                <div className="auth-divider">
                    <h6>OR</h6>
                </div>
                <div className="auth-provider"></div>
            </div>
            <div className="auth-message">
                <div className="auth-info"></div>
                <button className="button button-small button-border button-border-gray button-icon" type="button">Sign Up</button>

            </div>

        </div>


    </div>
  )
}
