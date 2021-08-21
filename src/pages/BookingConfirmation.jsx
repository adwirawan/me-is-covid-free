import React from 'react'
import Grid from '@material-ui/core/Grid';
import tick from '../assets/tick.png';
import './BookingConfirmation.css'
import community from '../assets/community.png'
import bgConfirm from "../assets/bg-confirm.jpg"
import {Link, useParams} from 'react-router-dom';

export default function BookingConfirmation() {
  const { time } = useParams();

  const { siteName } = useParams();

  const { day } = useParams();

  function checkDate() {
    if(day === 'Today') {
      return '22 August 2021'
    } else {
      return '23 August 2021'
    }
  }

  return (
    <div>

      {/* <img src={asset_1} />
      <img src={asset_3} /> */}
      <img src={bgConfirm} id="bg"/>

      <Grid
        container
        direction="column"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item className='title'>

          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="flex-end"
          >
            <Grid item>
              <h2>
                Booking Confirmed
              </h2>
            </Grid>
            <Grid item>
              <img src={tick} className='tick'/>
            </Grid>
          </Grid>
        </Grid>

        <br/><br/>

        <Grid item xs={6} className='message'>
          <p>Congratulations! Your booking is confirmed</p>
          <p>You are booked to {checkDate()} ({day.toUpperCase()}) {time} time slot at {siteName}</p>
          <p>Please arrive 5 minutes before your booked session</p>
          <p>You should received your booking confirmation through email soon</p>
          <br/>
          <p>"here you are contributing to a better community"</p>
        </Grid>
      </Grid>

      <div>
      <img
        src={community}
        width="30%"
      />
      </div>

      <div>
      <Link to='/'>
        <button className='btn-choose-1'>
          <h2 className='btn-text'>BACK TO HOME</h2>
        </button>
      </Link>
      </div>

    </div>
  )
}
