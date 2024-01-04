import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import myUsers from './myUsers';

export default function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const Login = () => {
    const userFound = myUsers.find(
      (user) => user.email.toLowerCase() === email.toLowerCase() && user.password === password
    );

    if (userFound) {
      navigate('/home', { state: { username: userFound.username } });
    } else {
      window.alert('Incorrect Credentials, Try again.');
    }

    setEmail('');
    setPassword('');
  };

  const ForgotPassword = () => {
    navigate('/forgot');
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
          <input type='email' id='email' placeholder='Username or Email' className='bg-blk1 outline-none border-2 border-blk1 rounded-lg p-2 px-3 border-opacity-25'  onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className='flex flex-col gap-2'>
          <label htmlFor='password'>Password</label>
          <input
            type='password' id='password' placeholder='Password'  className='bg-blk1 outline-none border-2 border-white1 rounded-lg p-2 px-3 border-opacity-25' onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <button onClick={Login} className='w-full h-11 bg-blk1 rounded-md'>
          Login
        </button>
        
        <button onClick={ForgotPassword}>Forgot Password?</button>
      </div>
    </div>
  );
}
