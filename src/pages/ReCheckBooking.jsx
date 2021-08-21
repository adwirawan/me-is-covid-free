import React from 'react'
import emailjs from "emailjs-com"
import { Grid,TextField,IconButton } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send'
import calendar from '../assets/calendar.png'
import './ReCheckBooking.css'
import {Link, useParams} from 'react-router-dom';
import bgRecheck from "../assets/bg-recheck.jpg"

export default function ReCheckBooking() {
  const { time } = useParams();

  const { siteName } = useParams();

  function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_lr7lvnn', e.target, 'user_ikn7Qer3PrE2SitEeELAH')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset();
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

        <Grid item className='message'>
          <p>You are allocated to</p>
          <p>Place: {siteName} </p>
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
              <img src={calendar} className='photo'/>
            </Grid>
            <Grid item>
              <form onSubmit={sendEmail} noValidate autoComplete="off">
                <TextField id='standard-basic' label='Your Name' name='name' size='small'/>
                <br />
                <TextField id='standard-basic' label='Your Email' name='email' size='small'/>
                <IconButton type='submit' aria-label="delete" color="primary">
                  <SendIcon />
                </IconButton>
              </form>
              <Link to={`/booking/${siteName}/${time}/confirmation`}>
                <button className='btn-choose-1'>
                  <h2 className='btn-text'>CONFIRM</h2>
                </button>
              </Link>
            </Grid>
          </Grid>
        </Grid>


      </Grid>
      </div>

    </div>
  )
}
