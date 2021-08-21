import React, { useState } from 'react';
import TextField from "@material-ui/core/TextField";

export default function NormalTextfield(props) {

  const quotaFromParent = props.quotaParent;

  const [slot, setSlot] = useState((quotaFromParent!==0) ? quotaFromParent : 0);
  const handleSlotChange = (event) => {    
    let editedData = existing_data; // eslint-disable-next-line
    editedData.map(object => {
      if(object.label === id) {
        object.slot = event.target.value;
      }
    })

    setSlot(event.target.value);
    props.onChange(editedData);
  };

  const id = props.identifier;

  const existing_data = props.data;

  console.log(props.data);

  return (
    <div>
      <TextField
        id={id}
        label="Available Slot"
        type="number"

        value={slot || quotaFromParent} 
        onChange={handleSlotChange}

        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{ 
          min: 0 
        }}
        variant="filled"
      />
    </div>
  )
}
