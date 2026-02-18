import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from '../utils'
import './LoginSignup.css';
import Footer from '../components/Footer';

function SignUp() {


    const [action] =useState("Sign Up");

    
    const [signupInfo, setSignupInfo] = useState({
        name: '',
        email: '',
        password: ''
    })

    const navigate = useNavigate();
    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        const copySignupInfo = { ...signupInfo };
        copySignupInfo[name] = value;
        setSignupInfo(copySignupInfo);
    }

    const handleSignup = async (e) => {
  e.preventDefault();
  const { name, email, password } = signupInfo;

  if (!name || !email || !password) {
    return handleError("All fields are required");
  }

  try {
    const response = await fetch(
      "http://localhost:7000/api/auth/signup",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, password })
      }
    );

    const result = await response.json();

    if (!response.ok) {
      return handleError(result.message || "Signup failed");
    }

    handleSuccess("Signup successful. Please login.");

    setTimeout(() => {
      navigate("/login");
    }, 1000);

  } catch (err) {
    handleError("Server error");
  }
};


  return (

    <div className='image'>
      <div>
        <h1>Travel & Explore </h1>
        <h2>|| Plan Your Next Trip,With Our Assistance ||</h2>
      </div>
    <div className='container-logsign'>
    <div className='text'>{action}</div>
            <form onSubmit={handleSignup}>
                <div>
                    <label htmlFor='name'>Name*</label>
                    <input
                        onChange={handleChange}
                        type='text'
                        name='name'
                        autoFocus
                        placeholder='Enter your name...'
                        value={signupInfo.name}
                    />
                </div>
                <div>
                    <label htmlFor='email'>Email ID*</label>
                    <input
                        onChange={handleChange}
                        type='email'
                        name='email'
                        placeholder='Enter your email...'
                        value={signupInfo.email}
                    />
                </div>
                <div>
                    <label htmlFor='password'>Password*</label>
                    <input
                        onChange={handleChange}
                        type='password'
                        name='password'
                        placeholder='Enter your password...'
                        value={signupInfo.password}
                    />
                </div>
                <button className='submit'>Signup</button>
                <span className='LogSign'>Already have an account ?
                    <Link to="/login">Login</Link>
                </span>
            </form>
            <ToastContainer />
        </div>
        <Footer/>
        </div>
        
  )
}

export default SignUp