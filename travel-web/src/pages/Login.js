import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from '../utils';
import './LoginSignup.css';
import Footer from '../components/Footer';


function Login() {


    const [action] =useState("Login");

    const [loginInfo, setLoginInfo] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        const copyLoginInfo = { ...loginInfo };
        copyLoginInfo[name] = value;
        setLoginInfo(copyLoginInfo);
    }

    const handleLogin = async (e) => {
  e.preventDefault();
  const { email, password } = loginInfo;

  if (!email || !password) {
    return handleError("Email and password are required");
  }

  try {
    const response = await fetch(
      "http://localhost:7000/api/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      }
    );

    const result = await response.json();

    if (!response.ok) {
      return handleError(result.message || "Login failed");
    }

    localStorage.setItem("token", result.token);
    localStorage.setItem("loggedInUser", result.user.name);

    handleSuccess("Login successful");

    setTimeout(() => {
      navigate("/home"); 
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
        <form onSubmit={handleLogin}>
            <div>
                <label htmlFor='email'>Email ID*</label>
                <input
                    onChange={handleChange}
                    type='email'
                    name='email'
                    autoFocus
                    placeholder='Enter your email'
                    value={loginInfo.email}
                />
            </div>
            <div>
                <label htmlFor='password'>Password*</label>
                <input
                    onChange={handleChange}
                    type='password'
                    name='password'
                    autoFocus
                    placeholder='Enter your password'
                    value={loginInfo.password}
                />
            </div>
            <button className='submit'>Login</button>
            <span className='LogSign'>Does't have an account ?
                    <Link to="/signup">Signup</Link>
            </span>
        </form>
        <ToastContainer />
    </div>
    <Footer/>
</div>
  )
}

export default Login
