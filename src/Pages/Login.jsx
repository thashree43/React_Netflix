import React, { useState } from 'react';
import { Link, useNavigate }  from "react-router-dom"
import { userAuth } from '../context/AuthContext';
import {loginUpValidate} from '../utilities/login'


function Login() {
  const [rememberLogin,setRememberLogin] = useState(true)
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [error,setError] = useState('')
  const {user,Login} = userAuth()
  const navigate = useNavigate()
  const handlesubmit= async (e)=>{
    e.preventDefault()
    const validationError = loginUpValidate(email,password)
    if (validationError) {
      setError(validationError)
      return
    }
    try {
      await Login(email,password)
      navigate('/')
    } catch (error) {
      console.log(error);
    }
  
  }
  return (
    <>
      <div className='w-full h-screen relative'>
        <img 
          className='hidden sm:block absolute w-full h-full object-cover'
          src='https://assets.nflxext.com/ffe/siteui/vlv3/41c789f0-7df5-4219-94c6-c66fe500590a/3149e5eb-4660-4e3d-9e65-b1e615229c64/IN-en-20240513-popsignuptwoweeks-perspective_alpha_website_large.jpg'
          alt='Signup Background'
        />
        <div className='bg-black/70 fixed top-0 left-0 w-full h-screen' />

        <div className='fixed w-full px-4 py-24 z-20'>
          <div className='max-w-[450px] h-[600px] mx-auto bg-black/80 rounded-lg'>
            <div className='max-w-[320px] mx-auto py-16'>
              <h1 className='text-3xl font-bold text-white'>Login</h1>
              <form onSubmit={handlesubmit}
              className='w-full flex flex-col py-4'>
                <input
                  type='email'
                  placeholder='Email'
                  autoComplete='email'
                  className='p-3 my-2 bg-gray-700 rounded'
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                />
                <input
                  type='password'
                  placeholder='Password'
                  autoComplete='current-password'
                  className='p-3 my-2 bg-gray-700 rounded'
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                />
                 <p className='pt-6 text-center text-red-600'>{error}</p>
                <button className='bg-red-600 py-3 my-6 rounded font-nsans-bold text-white'>Login</button>
                <div className='flex justify-between items-center text-sm text-gray-600'>
                  <p><input type='checkbox' checked={rememberLogin}
                  onChange={()=>setPassword(!rememberLogin)} /> Remember me</p>
                  <p>Need help?</p>
                </div>
                <p className='py-8'>
                  <span className='text-gray-600'>New to Netflix?</span> {' '}
                 <Link to="/signup" className='text-white'>Sign Up</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login
