import React, { useState } from "react";
import TimeRangeSlider from 'react-time-range-slider';
import FormLabel from "@material-ui/core/FormLabel";
import { makeStyles } from '@material-ui/core/styles';
import TimeGrid from '../components/HospitalAvailability/TimeGrid';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
  root: {
    width: 500,
    margin: 30,
  },
});

export default function HospitalAvailability() {
  const classes = useStyles();

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

  return (
    <div className={classes.root}>

      <TextField
        id="hospitalName"
        label="Hospital Name"
        value={hospitalName}
        onChange={handleHospitalNameChange}
        style={{ margin: 8 }}
        placeholder="Enter Your Instituion Name"
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />

      {/* <TextField
        id="quota"
        label="Quota/slot"
        type="number"
        style={{ margin: 8 }}
        inputProps={{ min: 0 }}
        value={quota}
        onChange={handleQuotaChange}
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      /> */}

      <br/>

      <FormLabel style={{ paddingBottom: 12 }}>
        Selected Time: {timeRange.value.start} - {timeRange.value.end}
      </FormLabel>

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

      <br/>

      <TimeGrid startTime={timeRange.value.start} endTime={timeRange.value.end} quota={quota} />

    </div>
  )
}
