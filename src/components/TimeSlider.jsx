import React, { useState } from "react";
import TimeRangeSlider from 'react-time-range-slider';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from "@material-ui/core/FormLabel";

const useStyles = makeStyles({
  root: {
    width: 500,
    margin: 30,
  },
});

export default function TimeSlider() {
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
  }

  function changeCompleteHandler(time) {
    console.log("Complete Handler Called", time);
  }

  return (
    <div className={classes.root}>

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
      
    </div>
  )
}
