import React from "react";
import Container from '@mui/material/Container';
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import { createTheme,ThemeProvider } from '@mui/material/styles';
import track from "../images/flight-tracker-mono.png";
import travel from "../images/Passport-Mono.png";
import visa from "../images/Subtract.png";
import arrow from '../images/arrow.png'

const theme = createTheme({
    status: {
      danger: '#e53e3e',
    },
    palette: {
      primary: {
        main: '#2484FC',
        darker: '#053e85',
      },
      neutral: {
        main: '#64748B',
        contrastText: '#fff',
      },
    },
  });

const AboutFlight = () => {
  return (
    <Container>
      <div className="about-flight">
      <div className='content-div'>
          <div className='image-div'>
            <img src={track} alt="track-flight" className='flight-img2' />
          </div>
          <div>
            <h5 style={{
            fontWeight:'700',
            fontSize:'18px'}}>Track your Flight Status</h5>
           <ThemeProvider theme={theme}>
           <Button variant='contained' style={{fontSize:'13px',
           fontFamily:'Inter'}}>
             Track Flight
             </Button>
           </ThemeProvider>
          </div>
        </div>

      <div className='content-div'>
        <div className='image-div'>
            <img src={visa} alt="track-flight" className='flight-img' />
          </div>
          <div>
            <h5 style={{
            fontWeight:'700',
            fontSize:'18px'}}>
            Can I travel to…?</h5>
          <ThemeProvider theme={theme}>
          <Button variant='contained' style={{
              fontSize:'13px',
              fontFamily:'Inter'}}>
            Explore
             </Button>
          </ThemeProvider>
          </div>
        </div>

        <div className='content-div full-width'>
         <div className='image-div'>
            <img src={travel} alt="track-flight" className='flight-img2' />
          </div>
          <div>
            <h5 style={{
            fontWeight:'700',
            fontSize:'18px'}}>Track Visa Application Status</h5>
            <TextField id="outlined-basic" label="ST Ref.No." variant="outlined" size='small' style={{width:'200px'}} />
            <ThemeProvider theme={theme}>
           <Button variant='contained'  style={{fontSize:'13px',
           fontFamily:'Inter',
           width:'20px',
           height:'38px',
           marginLeft:'10px'}}>
             Go <img src={arrow} alt="arrow" style={{marginLeft:'15px'}}/>
             </Button>
           </ThemeProvider>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutFlight;
