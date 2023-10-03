import React from 'react'
import Savedshows from '../components/Savedshows'

const Account = () => {
  return (
    <>
    <div className='w-full text-white'>
    <img className=' w-full h-[400px] object-cover' src='https://assets.nflxext.com/ffe/siteui/vlv3/42df4e1f-bef6-499e-87ff-c990584de314/605d1dc5-94ed-4869-a2fc-e60ce35bfc5c/EG-en-20230904-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='/'/>
      <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]'></div>
      <div className='absolute top-[20%] p-4 md:p-8'>
        <h1 className='text-3xl md:text-5xl front-bold'>my shows</h1>
      </div>
      </div>
      <Savedshows />
      </>
  )
}

export default Account
