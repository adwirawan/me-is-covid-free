import React from 'react'
import { Grid } from '@material-ui/core'
import calendar from '../assets/calendar.png'
import './ReCheckBooking.css'
import {Link} from 'react-router-dom';
import bgRecheck from "../assets/bg-recheck.jpg"

export default function ReCheckBooking() {
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
          <p>Place: RMH Testing Site</p>
          <p>Time: 9:00 am</p>
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
              <Link to='/booking/confirmation'>
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
