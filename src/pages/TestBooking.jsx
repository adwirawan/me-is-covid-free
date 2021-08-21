import React from 'react';
import './TestBooking.css';
import desk from "../assets/desk-1.png";
import gradient from "../assets/bg-top.png";
import { Link } from 'react-router-dom';

export default function TestBooking() {
  return (
    <div className="main-booking">
      <div className="container-booking">
        <h1 className='title-booking'>COVID TEST BOOKING</h1>
        <div className='booking-text'>
          <p>Thank you for your interest in booking your Covid test appointment.</p>
          <p>By booking, there will be less waiting time and you are reducing your chance of exposure due to wait times.</p>
          <p>Click on the button below to see your nearest testing site along with its appointment availabilities.</p>
        </div>
      </div>

      <img src={gradient} className="gradient-1"/>
      <img src={gradient} className="gradient-2"/>

      <img src={desk} className="img-3" />

      <div>
        <Link to='/booking/map'>
          <button className="btn-booking">
            <p className="small">Book Here</p>
          </button>
        </Link>
      </div>
    </div>
  )
}
