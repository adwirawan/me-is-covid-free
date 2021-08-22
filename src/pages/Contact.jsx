import React, { useState } from 'react'
import './Contact.css'
import bgAbout from "../assets/bg-top.png";
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { Link } from "react-router-dom";

export default function Contact() {
  const [name, setName] = React.useState('');
  const handleChange = (event) => {
    setName(event.target.value);
  };

  const [email, setEmail] = React.useState('');
  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  function showAlert() {
    alert("Thankyou for your message! Your message has been sent successfully");
  };


  return (
    <div>
      <img src={bgAbout} id="bg"/>

      <Paper elevation={3} className='contact'>
        <div className='contact-us'>
          Contact Us
        </div>
        <div className='inside-paper'>

          <div className='text-field'>
            <TextField
              id="filled-name"
              label="Name"
              value={name}
              onChange={handleChange}
              fullWidth
              variant="outlined"
            />
          </div>
          <div className='text-field'>
          <TextField
            id="filled-name"
            label="Email"
            type='email'
            value={email}
            onChange={handleChangeEmail}
            fullWidth
            variant="outlined"
          />
          </div>
          <div className='text-field'>  
          <TextField
            id="outlined-multiline-static"
            label="Message"
            multiline
            rows={6}
            variant="outlined"
            fullWidth
          />
          </div>

          <div className='text-field'>
            <Link to='/'>
              <button type='submit' className='btn-send-message' onClick={showAlert}>
                <h6 className='btn-send-message-text'>SEND MESSAGE</h6>
              </button>
            </Link>
          </div>
          <br/>
        </div>

        <div>

        </div>
      </Paper>

    </div>
  )
}
