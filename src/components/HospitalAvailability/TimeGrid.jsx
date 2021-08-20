import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
import Grid from '@material-ui/core/Grid';
import { TimeSlot } from './TimeSlot';


const useStyles = makeStyles((theme) => ({
  root: {
    width: 1200
  },
  table: {
    minWidth: 650,
  },
}));

export default function TimeGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
      <Grid container spacing={1} direction="row">
  
        {TimeSlot.map((item, index) => 
          <div id={index}>  
            <Grid item xs={12}>
              <fieldset> 
                <legend>
                  {item.label}
                </legend>
                
                <TextField
                  id="standard-number"
                  label="Slot"
                  type="number"
                  // helperText="08.30-08.45"
                  defaultValue="0"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  inputProps={{ 
                    min: 0 
                  }}
                  variant="filled"
                />               
              </fieldset>
            </Grid>                  
          </div>
        )}
      </Grid>
    </div>
  );
}