import React from 'react'
import Grid from '@material-ui/core/Grid';
import tick from '../assets/tick.png';
import './BookingConfirmation.css'
import community from '../assets/community.png'
import asset_1 from '../assets/Asset_1.png';
import asset_3 from '../assets/Asset_3.png';

export default function BookingConfirmation() {
  return (
    <div>

      {/* <img src={asset_1} />
      <img src={asset_3} /> */}

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
              {' '}
            </Grid>
            <Grid item>
              <img src={tick} className='tick'/>
            </Grid>
          </Grid>
        </Grid>

        <br/><br/>

        <Grid item xs={6} className='message'>
          <p>Congratulations! Your booking is confirmed</p>
          <p>You are booked to 9.00 AM time slot at the Royal Melbourne Hospital</p>
          <p>Please arrive 5 minutes before your booked session</p>
          <p>You should received your booking confirmation through email soon</p>
          <br/>
          <p>"here you are contributing to a better community"</p>
        </Grid>

        <Grid item>
          <img src={community} className='photo' />
        </Grid>

      </Grid>

    </div>
  )
}
