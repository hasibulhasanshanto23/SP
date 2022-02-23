import React, { useState } from "react";
import { Grid} from "@mui/material";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import moment from "moment";
import "../flight.scss";
import DatePick from "./DatePick";
import Popover from "@mui/material/Popover";

const AddMultiCity = () => {
   
    const dayName=moment().format('dddd')
    const [fromValue, setFromValue] = useState(null);
    const [toValue, setToValue] = useState(null);
    const [adult,setAdult]=useState(1)
    const [children,setChildren]=useState(0)
    const [infant,setInfant]=useState(0)
  
    if(adult<1){
      setAdult(1)
    }
  
    if(children<0){
      setChildren(0)
    }
  
    if(infant<0){
      setInfant(0)
    }
  

  
    const from = [
      { label: "DAC" },
      { label: "DAX" },
      { label: "SLK" },
      { label: "CGP" },
      { label: "CCU" },
      { label: "CXB" },
      { label: "BKK" },
    ];



  return (
    <Grid container>
      <Grid item sm={12} md={4} sx={{ mb: 3 }}>
        <div className="inputField flyFrom">
          <span className="labelTxt">Flying From</span>

          <Autocomplete
            id="combo-box-demo1"
            options={from}
            sx={{}}
            forcePopupIcon={false}
            renderInput={(params) => (
              <TextField {...params} placeholder="DAC" />
            )}
            onChange={(event, value) => setFromValue(value)}
          />

          <div className="searchDetails">
            {fromValue !== null ? fromValue.label : "DAC"}
          </div>
        </div>
      </Grid>
      <Grid item sm={12} md={4} sx={{ mb: 3 }}>
        <div className="inputField flyTo">
          <span className="labelTxt">Flying To</span>

          <Autocomplete
            id="combo-box-demo1"
            options={from}
            sx={{}}
            forcePopupIcon={false}
            renderInput={(params) => (
              <TextField {...params} placeholder="SLK" />
            )}
            onChange={(event, value) => setToValue(value)}
          />
          <div className="searchDetails">
            {toValue !== null ? toValue.label : "SLK"}
          </div>
        </div>
      </Grid>

      
      <Grid item sm={12} md={4} sx={{ pl: 1, mb: 3 }}>
          <Grid>
            <div className="border-col">
              <div
                className="placeholder-text ptnew"
                style={{ padding: "13px 0" }}
              >
                <span
                  style={{
                    paddingLeft: "22px",
                    fontSize: "12px",
                    display: "block",
                    marginBottom: "5px",
                  }}
                >
                  Select Date
                </span>
                <div style={{ paddingLeft: "12px" }}>
                  <DatePick addDays={true} />
                </div>
                <span style={{ fontSize: "12px", paddingLeft: "20px" }}>
                  <strong>2022,</strong>
                  <span style={{ opacity: "0.6" }}>{dayName}</span>
                </span>
              </div>
            </div>
          </Grid>
        </Grid>

    
    </Grid>
  )
}

export default AddMultiCity