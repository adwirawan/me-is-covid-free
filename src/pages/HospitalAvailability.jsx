import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TimeSlider from '../components/HospitalAvailability/TimeSlider';
import TimeGrid from '../components/HospitalAvailability/TimeGrid';

const useStyles = makeStyles({
  root: {
    width: 500,
    margin: 30,
  },
});

export default function HospitalAvailability() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TimeSlider />
      <br/>
      <TimeGrid />
    </div>
  )
}
