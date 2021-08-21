import React, {useState} from 'react';
import './Landing.css';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import doctorPic1 from "../assets/lifesavers.png";
import doctorPic2 from "../assets/plant.png";
import {Link} from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Grid from '@material-ui/core/Grid';
import doctor from '../assets/doctor.png'

export default function Landing() {
  return (
    <div className="main">
      {/* <div className="container">
        <h1 className='title'># Me Is Covid Free</h1>
      </div> */}

      <Navbar />

      <Grid 
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Grid item xs={6} sm={3}>
          <img src={doctor} className='img-1'/>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Link to='/booking'>
            <button className='btn-choose-1'>
              <h2 className='btn-text'>COVID TEST BOOKING</h2>
            </button>
          </Link>
        </Grid>
        <Grid item xs={6} sm={3}>
          <button className='btn-choose-2'>
            <a href ='https://portal.cvms.vic.gov.au/'>
              <h2 className='btn-text'>BOOK A VACCINATION</h2>
            </a>
          </button>
        </Grid>
        <Grid item xs={6} sm={3}>
          {/* <img src={doctorPic2} className='img-2'/> */}
        </Grid>
      </Grid>
    </div>
  )
}
