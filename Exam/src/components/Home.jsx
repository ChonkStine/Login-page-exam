import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Home() {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;

  const Lougout = () => {
    navigate('/'); 
  };

  return (
    <div className='flex flex-col justify-center place-items-center min-h-[100vh] min-w-screen bg-blk2'>
      {state && state.username && <p className='font-black text-4xl text-white1'>Welcome, {state.username}!</p>}
      
      <button onClick={Lougout} 
      className='mt-5 w-40 h-11 bg-white1 rounded-md font-black'>
        Log out
      </button>
    </div>
  );
}

export default Home;
