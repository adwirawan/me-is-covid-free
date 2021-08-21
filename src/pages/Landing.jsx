import React, {useState} from 'react';
import './Landing.css';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import doctorPic1 from "../assets/lifesavers.png";
import doctorPic2 from "../assets/plant.png";
import {Link} from 'react-router-dom';

export default function Landing() {
  return (
    <div className="main">
      <div className="container">
        <h1 className='title'># Me Is Covid Free</h1>
      </div>

      <img src={doctorPic1} className='img-1'/>
      <img src={doctorPic2} className='img-2'/>

      <div className='buttons'>
        <Link to='/booking'>
          <button className='btn-choose-1'>
            <h2 className='btn-text'>COVID TEST BOOKING</h2>
          </button>
        </Link>

        <button className='btn-choose-2'>
          <a href ='https://portal.cvms.vic.gov.au/'>
            <h2 className='btn-text'>BOOK A VACCINATION</h2>
          </a>
        </button>

      </div>
    </div>
  )
}
