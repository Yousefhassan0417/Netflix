import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../Context/AuthContext';

const Navbar = () => {
  const{user, logOut} =UserAuth()
  const navigate = useNavigate();
  // console.log(user.email)
  const handleLogOut =async () => {
    try {
      await logOut()
      navigate("/");
    } catch (error) {
    console.log(error)
    }
  }
  return (
    <div className='flex items-center justify-between p-4 z-(100) w-full relative'>
    <Link to="/">
    <h1 className='text-red-600 text-4xl font-bold cursor-pointer '>NETFLIX</h1>
    </Link>
    {user?.email ?      <div>
    <Link to ="/account">
      <button className='text-white pr-4 cursor-pointer'>Account</button>
      </Link>
      <button onClick={handleLogOut} className='bg-red-600 px-6 py-3 rounded cursor-pointer text-white'>Logout</button>
      </div> :<div>
    <Link to ="/login">
      <button className='text-white pr-4 cursor-pointer'>sign in</button>
      </Link>
      <Link to ="/signup">
      <button className='bg-red-600 px-6 py-3 rounded cursor-pointer text-white'>sign up</button>
      </Link>
      </div>}
    </div>
    
  );
};

export default Navbar
