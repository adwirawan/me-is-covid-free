import React, {useState} from 'react';
import './Landing.css';
import {Link} from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Grid from '@material-ui/core/Grid';

export default function Landing() {
  return (
    <div className="main">

      <Navbar />

      <Grid 
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        
        <Grid item xs={6} sm={3}>
          <Link to='/booking'>
            <button className='btn-choose-1-landing'>
              <h2 className='btn-text'>COVID TEST BOOKING</h2>
            </button>
          </Link>
        </Grid>
        <Grid item xs={6} sm={3}>
          <button className='btn-choose-2-landing'>
            <a href ='https://portal.cvms.vic.gov.au/'>
              <h2 className='btn-text'>BOOK A VACCINATION</h2>
            </a>
          </button>
        </Grid>
        
      </Grid>
    </div>
  )
}
