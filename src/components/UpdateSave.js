import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider, makeStyles } from "@mui/material/styles";
import group from "../images/Group.png";
import close from "../images/Close-Mono.png";
import { margin } from "@mui/system";

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
          <div className="box">
            <div className="d-flex justify-content-end">
              <div style={{cursor:'pointer'}}>
                <img src={close} alt="close" />
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-between test">
              <div
                className="d-flex align-items-center"
                style={{ padding: "0px 5px 20px 20px" }}
              >
                <div style={{ padding: "0px 20px 0px 0px" }}>
                  <img src={group} alt="group" />
                </div>
                <div>
                  <h5>Want to save up to 50% when you travel?</h5>
                  <p>
                    Yes! i'd like to save up to 50% on travel!Please send me
                    <br />
                    exclusive deals and updates.
                  </p>
                </div>
              </div>

              <div className="d-flex align-items-center justify-content-between test2">
                <div>
                  <TextField
                    id="outlined-basic"
                    label="Enter your email"
                    variant="outlined"
                    className="email-input"
                  />
                </div>

                <div>
                  <ThemeProvider theme={theme}>
                    <Button
                      variant="contained"
                      style={{
                        fontFamily: "Inter",
                        padding: "12px 20px",
                        margin: "0px 10px",
                      }}
                      className="subs-button"
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
