import React from 'react'
import emailjs from "emailjs-com"
import { Grid,TextField,IconButton } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send'
import calendar from '../assets/calendar.png'
import './ReCheckBooking.css'
import {Link, useParams} from 'react-router-dom';
import bgRecheck from "../assets/bg-recheck.jpg"

export default function ReCheckBooking(props) {
  const { time } = useParams();

  const { siteName } = useParams();

  const { day } = useParams();

  function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_lr7lvnn', e.target, 'user_ikn7Qer3PrE2SitEeELAH')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset();
    window.location.href = `/booking/${siteName}/${day}/${time}/confirmation`
  }

  function checkDate() {
    if(day === 'Today') {
      return '22 August 2021'
    } else {
      return '23 August 2021'
    }
  }

  return (
    <div className="main-recheck">
      <img src={bgRecheck} id="bg"/>

      <div className="recheck-content">
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item className='title'>
          <h2>
            Re-check Your Booking
          </h2>
        </Grid>

        <Grid item className='message-small'>
          <p>You are allocated to</p>
        </Grid>
        <Grid item className='message'>
          <p>Place: {siteName} </p>
          <p>Date: {checkDate()} ({day})</p>
          <p>Time: {time} </p>
        </Grid>

        <Grid item>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="flex-end"
          >

            <Grid item>
              <form autoComplete="off" onSubmit={sendEmail} >
                <div className='inputs'>
                  <Grid item className='message-small'>
                    <p>Please check that you have the </p>
                    <p>correct booking and fill out your details</p>
                    <p>as follows to get a reminder email</p>
                  </Grid>
                  <ul>
                    <li><TextField id='standard-basic' label='Name' name='name' size='small'/></li>
                    <li><TextField id='standard-basic' label='Email' name='email' size='small'/></li>
                    <li><TextField id='standard-basic' label='Phone Number' name='phone' size='small'/></li>
                    <input hidden name="siteName" value={siteName} />
                  </ul>
                </div>
                <button type='submit' className='btn-choose-1'>
                  <h2 className='btn-text'>CONFIRM</h2>
                </button>
              </form>

            </Grid>
          </Grid>
        </Grid>


      </Grid>
      </div>

    </div>
  )
}
