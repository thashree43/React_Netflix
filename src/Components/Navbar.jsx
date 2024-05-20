import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { userAuth } from '../context/AuthContext';

function Navbar() {
  const { user, Logout } = userAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await Logout();
      navigate('/'); 
    } catch (error) {
      console.error("Failed to logout:", error);
    }
  };

  return (
    <div className='absolute w-full p-4 flex items-center justify-between z-50'>
      <Link to="/">
        <h1 className='uppercase text-red-600 font-nsans-bold cursor-pointer text-5xl'>Netflix</h1>
      </Link>

      {user?.email ? (
        <div className="flex">
          <Link to="/profile" className="ml-auto">
            <button className='capitalize pr-4'>Profile</button>
          </Link>
          <button
            onClick={handleLogout}
            className='capitalize pr-4 bg-red-600 px-6 py-2 rounded cursor-pointer'
          >
            Sign Out
          </button>
        </div>
      ) : (
        <div className="flex">
          <Link to="/login" className="ml-auto">
            <button className='capitalize pr-4'>Login</button>
          </Link>
          <Link to="/signup">
            <button className='capitalize pr-4 bg-red-600 px-6 py-2 rounded cursor-pointer'>Sign Up</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
