import React from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const FlightSchedule = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  return (
    <div className='flightSchedule'>
     <div className='flightSchedule__container'>
     <Tabs value={value} onChange={handleChange} centered TabIndicatorProps={{style:{display:'none'}}}>
        <Tab label="Departure" />
        <Tab label="Arrival" />
      </Tabs>
     </div>
    </div>
  )
}

export default FlightSchedule