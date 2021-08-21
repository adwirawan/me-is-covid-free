import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { TimeSlot } from './TimeSlot';
import NormalTextfield from "./NormalTextfield";
import DisabledTextfield from "./DisabledTextfield";
import ScrollableFeed from 'react-scrollable-feed';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 1200
  },
  table: {
    minWidth: 650,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '400px',
    width: '1000px',
    margin: 'auto',
  },
}));

export default function TimeGrid(props) {
  const classes = useStyles();

  const startTime = props.startTime.split(":");
  const endTime = props.endTime.split(":")

  function checkTime(startTime, endTime, item) {
    if (item.startHour > parseInt(startTime[0])) {
      if (item.endHour < parseInt(endTime[0])) {
        return true;
      }
      if ((parseInt(endTime[0]) === item.endHour) && (item.endMinute <= parseInt(endTime[1]))) {
        return true;
      }
    } 
    if ((parseInt(startTime[0]) === item.startHour) && (item.startMinute >= parseInt(startTime[1]))) {
      if (item.endHour < parseInt(endTime[0])) {
        return true;
      }
      if ((parseInt(endTime[0]) === item.endHour) && (item.endMinute <= parseInt(endTime[1]))) {
        return true;
      }
    }
  }

  const [availableTimeSlot, setAvailableTimeSlot] = useState(TimeSlot)
    
  return (

    <div>

      <Paper className={classes.paper}>
        <ScrollableFeed>
          <Grid container container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            {availableTimeSlot.map((item, index) => (checkTime(startTime, endTime, item)) ?
              (<div key={index}>

                <Grid item xs={11}>
                  <fieldset> 
                    <legend>
                      {item.label}
                    </legend>
                    
                    <NormalTextfield 
                      identifier={item.label} 
                      data={availableTimeSlot} 
                      onChange={ new_data => setAvailableTimeSlot(new_data) }
                      quotaParent = {props.quota}
                    />

                  </fieldset>
                </Grid>                  
              </div>) :
              (<div key={index}>

                <Grid item xs={11}>
                  <fieldset disabled> 
                    <legend>
                      {item.label}
                    </legend>

                    <DisabledTextfield key={index} />
                    
                          
                  </fieldset>
                </Grid>                  
              </div>)
            )}
          </Grid>

        </ScrollableFeed>
      </Paper>

    </div>
  );
}
