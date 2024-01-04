import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import myUsers from './myUsers';

function ForgotPass() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const ConfirmPasswordChange = () => {
    if (!email || !newPassword || !confirmPassword) {
      setError('Please fill in all fields.');
      return;
    }

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    const userIndex = myUsers.findIndex((user) => user.email.toLowerCase() === email.toLowerCase());

    if (userIndex === -1) {
      setError('Email not found. Please enter a valid email.');
      return;
    }myUsers[userIndex].password = newPassword;

    navigate('/');
    alert('You can now try logging in');
  };

  return (
    <div className='min-h-[100vh] flex flex-col justify-center'>
      <div className='flex flex-col gap-8 mx-auto rounded-md p-10 text-white1 bg-blk2 md:w-[500px]'>
      <img
          className='h-[60px] mx-auto'
          src="https://media.discordapp.net/attachments/934520134750580771/1192377287232979075/Group_17_1.png?ex=65a8dae2&is=659665e2&hm=fe9b41978fa9ff843dbd2c77528c245fc15a96b06bb7941d6e1213d61b14bf35&=&format=webp&quality=lossless"
          alt=""
        />
        <div className='flex flex-col gap-2'>
          <label htmlFor='email'>Email</label>
          <input type='email' id='email' placeholder='Email' value={email}
            className='bg-blk1 outline-none border-2 border-blk1 rounded-lg p-2 px-5 border-opacity-25'
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className='flex flex-col gap-2'>
          <label htmlFor='newPassword'>New Password</label>
          <input type='password' id='newPassword' placeholder='New Password' value={newPassword}
            className='bg-blk1 outline-none border-2 border-blk1 rounded-lg p-2 px-5 border-opacity-25'
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>

        <div className='flex flex-col gap-2'>
          <label htmlFor='confirmPassword'>Confirm Password</label>
          <input type='password' id='confirmPassword' placeholder='Confirm Password' value={confirmPassword}
            className='bg-blk1 outline-none border-2 border-blk1 rounded-lg p-2 px-5 border-opacity-25'
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        {error && <p className='text-red-500'>{error}</p>}

        <button onClick={ConfirmPasswordChange} className='w-full h-11 bg-blk1 rounded-md'>
          Confirm Change
        </button>
      </div>
    </div>
  );
}

export default ForgotPass;
