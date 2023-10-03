import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../Context/AuthContext'

const Signup = () => {
  const[email,setEmail]= useState("")
   const[password,setPassword]= useState("");
   const{user,signUp}= UserAuth();
   const navigate = useNavigate()
  const handleSubmit =async (e) => {
   e.preventDefault();
           try{
           await signUp(email, password);
           navigate("/")
               }catch (e){
          console.log(e);
         }
   };
  
  return (
    <>
    <div className='w-full h-screen'>
      <img className='hidden sm:block absolute w-full h-full object-cover' src='https://assets.nflxext.com/ffe/siteui/vlv3/42df4e1f-bef6-499e-87ff-c990584de314/605d1dc5-94ed-4869-a2fc-e60ce35bfc5c/EG-en-20230904-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='/'/>
      <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
      <div className='fixed w-full px-4 py-24 z-50'>
        <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
          <div className='max-w-[320px] max-auto py-16 ml-9'>
            <h1 className='text-3xl font-bold'>Sign Up</h1>
            <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
              <input onChange= {(e) =>{setEmail(e.target.value); console.log(e.target.value)}}  className='p-3 m-2 bg-gray-700 rounded' type='email' placeholder='Email' autoComplete='email'  value={email}></input>
              <input onChange={(e) => {setPassword(e.target.value); console.log(e.target.value)}}  className='p-3 m-2 bg-gray-700 rounded' type='password' placeholder='password' autoComplete='current-password' value={password}></input>
              <button className='bg-red-600 py-3 my-6 rounded font-bold'>Sign Up</button>
              <div className='flex justify-between items-center text-sm text-gray-600'>
              <p><input className='me-2' type='checkbox'/>Remember me</p><p>Need Help?</p>
              </div>
              <p className='py-8'>
                <span className='text-gray-600'>Already subscribed to NETFLIX?</span>{""}
                <Link to = '/Login'>Sign In</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Signup
