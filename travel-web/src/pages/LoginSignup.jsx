import React, { useState } from 'react';
import './LoginSignup.css';
import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';
import { FaFacebook, FaGoogle,FaInstagram } from "react-icons/fa";
import Footer from '../components/Footer';


const LoginSignup = () => {

   const [action,setaction] =useState("Sign Up");
    return (
          <>
          <div className='image'>
          <div>
        <h1>Travel & Explore </h1>
        <h2>|| Plan Your Next Trip,With Our Assistance ||</h2>
      </div>
      <div className='ls'>
     
          <div className="header">
            <div className='text'>{action}</div>
            <div className="underline"></div>
          </div>
          <div className="inputs">
            {action === "Login" ? <div></div> : <div classname="input">
              <img src={user_icon} alt="" />
              <input type="text" placeholder="Name" />
            </div>}




            <div classname='input'>
              <img src={email_icon} alt="" />
              <input type="email" placeholder="Email Id" />
            </div>
            <div classname='input'>
              <img src={password_icon} alt="" />
              <input type="password" placeholder="Password" />
            </div>
          </div>
          <h6>or</h6>
    <div>
      <div className='xtra'>Sign up/Login with</div>
        <FaFacebook className='icon facebook' />
        <FaGoogle className='icon google'/>
        <FaInstagram className='icon insta'/>

      </div>
          {action === "Sign Up" ? <div></div> : <div className="forgot-password">Forgot password?<span>Click Here</span></div>}
        <div className="submit-container">
          <div className="sub">
            <div classname={action === "Login" ? "submit gray" : "submit"} onClick={() => { setaction("Sign Up"); } }>Sign Up</div>
            <div classname={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => { setaction("Login"); } }>Login</div>
          </div>
        </div>
      </div>
       
    </div>
        <Footer/>
        </>
       
    )
}
export default LoginSignup