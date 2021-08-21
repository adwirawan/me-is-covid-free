import React, { useState } from "react";
import TimeRangeSlider from 'react-time-range-slider';
import FormLabel from "@material-ui/core/FormLabel";
import { makeStyles } from '@material-ui/core/styles';
import TimeGrid from '../components/HospitalAvailability/TimeGrid';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import "./HospitalAvailability.css";
import bgHospital from '../assets/bg-pickTime.jpeg';
import { Link } from "react-router-dom";
import { Alert, AlertTitle } from '@material-ui/lab';

export default function HospitalAvailability() {
  // Time Range
  const [timeRange, setTimeRange] = useState({
    value: {
      start: "09:00",
      end: "17:00",
    },
  });

  function onTimeRangeChange(time) {
    setTimeRange({
      value: time,
    });
  };

  function changeCompleteHandler() {
    // console.log("Complete Handler Called", timeRange);
  };

  const [quota, setQuota] = useState(0);
  const handleQuotaChange = (event) => {
    setQuota(event.target.value);
  };

  const [hospitalName, setHospitalName] = React.useState('');
  const handleHospitalNameChange = (event) => {
    setHospitalName(event.target.value);
  };

  function showAlert() {
    alert("Your record has been added successfully");
  };

  return (
    <div>

      <img src={bgHospital} id="bg"/>

      <div className='hospitalName'>

        <h1>
          Slide to select the available time range!
        </h1>

      </div>
      <div className='hospitalSlideTime'>

        <TimeRangeSlider
          disabled={false}
          draggableTrack={false}
          format={24}
          maxValue={"18:00"}
          minValue={"08:00"}
          name={"timeRange"}
          onChange={onTimeRangeChange}
          onChangeComplete={changeCompleteHandler}
          step={15}
          value={timeRange.value}
        />


        <h3 className='hospitalAvailableTime'>
          {timeRange.value.start} - {timeRange.value.end}
        </h3>

      </div>

      <br/>

      <TimeGrid startTime={timeRange.value.start} endTime={timeRange.value.end} quota={quota} />

      <Link to='/hospital/login'>
        <button type='submit' className='btn-hospital-save' onClick={showAlert}>
          <h6 className='btn-hospital-save-text'>SAVE</h6>
        </button>
      </Link>

    </div>
  )
}
