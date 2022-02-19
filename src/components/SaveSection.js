import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider,makeStyles } from "@mui/material/styles";
import group from "../images/Group.png";
import close from "../images/Close-Mono.png";

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: "#2484FC",
      darker: "#053e85",
    },
    neutral: {
      main: "#64748B",
      contrastText: "#fff",
    },
  },
});
const SaveSection = () => {
  return (
 
    <Container style={{ marginTop: "30px" }}>
      <Grid>
        <Grid xs={12}>
          <div className="save-flex">
            <div className="image-content">
              <div className="group-image">
                <img src={group} alt="group" />
              </div>
              <div className='save-p'>
                <h5 className="save-heading">
                  Want to save up to 50% when you travel?
                </h5>
                <p className="save-paragraph">
                  Yes! i'd like to save up to 50% on travel!Please send me
                  <br />
                  exclusive deals and updates.
                </p>
              </div>
            </div>
            <div className="input-button-group">
              <div className="close-button">
                <img src={close} alt="close" />
              </div>
              <div className="input-button">
                <div>
                  <TextField
                    id="outlined-basic"
                    label="Enter your email"
                    variant="outlined"
                    className='email-input'
                  />
                </div>
                <div className="button-margin">
                  <ThemeProvider theme={theme}>
                    <Button
                      
                      variant="contained"
                      style={{
                        fontFamily: "Inter",
                      }}
                      className='subs-button'
                    >
                      SUBSCRIBE
                    </Button>
                  </ThemeProvider>
                </div>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SaveSection;
