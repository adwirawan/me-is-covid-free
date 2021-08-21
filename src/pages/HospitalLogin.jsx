import React, { useState } from 'react';
import bgLogin from '../assets/bg-login.jpeg';
import Paper from '@material-ui/core/Paper';
import './HospitalLogin.css'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

export default function HospitalLogin() {
  const [Username, setUsername] = React.useState('');
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const [Password, setPassword] = React.useState('');
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div>
      <img src={bgLogin} id="bg"/>

      <div className='loginTitle'>
        <h1>Testing Centre Login</h1>
      </div>

      <div className="Login">
        <form>

          <TextField
            id="outlined-username"
            label="Username"
            value={Username}
            onChange={handleUsernameChange}
            variant="outlined"
          />
          <br/>
          <br/>
          <TextField
            id="outlined-password"
            label="Password"
            value={Password}
            onChange={handlePasswordChange}
            variant="outlined"
            type='Password'
          />

          <br/>
          <Link to='/hospital/availability'>
            <button type='submit' className='btn-hospital-login'>
              <h6 className='btn-hospital-login-text'>LOGIN</h6>
            </button>
          </Link>
        </form>
      </div>

    </div>
  )
}
