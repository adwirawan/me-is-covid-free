import React from 'react';
import TextField from "@material-ui/core/TextField";

export default function DisabledTextfield() {
  return (
    <div>
      <TextField
        id="standard-number"
        label="Available Slot"
        type="number"
        
        
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{ 
          min: 0 
        }}
        variant="filled"
        disabled
      />        
    </div>
  )
}
