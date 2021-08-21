import React from 'react'
import { Button } from '@material-ui/core';

export default function DisabledTimePicker(props) {
  const item = props.data;
  
  return (
    <div>
      <Button disabled variant="outlined" size="large" color="primary" style={{width:"200px"}}>
        {item.label}
        <br/>
        Available Slot: {item.slot}
      </Button>
    </div>
  )
}