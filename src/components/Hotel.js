import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';
import '../Hotel.css'
import Autocomplete from 'react-autocomplete';

const Hotel = () => {
    const [data,setData]=useState('')
    const hotelName=[{ label: 'Hotel Sea', year: 1994 },
                     { label: 'New Hotel', year: 1972 }]
  return (
    <>
       
       {/* <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={hotelName}
        sx={{ width: 300}}
        renderInput={(params) => <TextField {...params} label="Search Hotels" />}
    /> */}
     

     <Autocomplete
  getItemValue={(item) => item.label}
  items={[
    { label: 'apple' },
    { label: 'banana' },
    { label: 'pear' }
  ]}
  renderItem={(item, isHighlighted) =>
    <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
      {item.label}
    </div>
  }
   value={data}
   onChange={(e) => setData(e.target.value)}
   
/> 
    </>
  )
}

export default Hotel