import React from 'react'
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

export default function NormalTimePicker(props) {
  const item = props.data;

  const siteName = props.siteName;
  
  return (
    <div>
      <Link to={`/booking/${siteName}/${item.label}/recheck`}>
        <Button 
          variant="outlined" 
          size="large" 
          color="primary" 
          style={{width:"200px"}}
        >
          {item.label}
          <br/>
          Available Slot: {item.slot}
        </Button>
      </Link>
    </div>
  )
}