import React, { useState } from "react";
import { Grid} from "@mui/material";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import moment from "moment";
import "../flight.scss";
import DatePick from "./DatePick";
import Popover from "@mui/material/Popover";
import AddMultiCity from "./AddMultiCity";

const MultiCity = () => {

    const dayName=moment().format('dddd')

    const [anchorEl, setAnchorEl] = useState(null);
    const [fromValue, setFromValue] = useState(null);
    const [toValue, setToValue] = useState(null);
    const [economy, setEconomy] = useState(true);
    const [business, setBusiness] = useState(false);
    const [firstClass, setFirstClass] = useState(false);
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
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;
  
    const from = [
      { label: "DAC" },
      { label: "DAX" },
      { label: "SLK" },
      { label: "CGP" },
      { label: "CCU" },
      { label: "CXB" },
      { label: "BKK" },
      { label: "IND" },
    ];

    

  return (
    <><form>
    <Grid container className="dateplaceholder">
      <Grid item sm={12} xs={12} md={6} lg={3} sx={{ mb: 3 }}>
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
      <Grid item sm={12} xs={12} md={6} lg={3} sx={{ mb: 3 }}>
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

      <Grid item sm={12} xs={12} md={6} lg={3} sx={{ pl: 1, mb: 3 }}>
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
                <DatePick />
              </div>
              <span style={{ fontSize: "12px", paddingLeft: "20px" }}>
                <strong>2022,</strong>
                <span style={{ opacity: "0.6" }}>{dayName}</span>
              </span>
            </div>
          </div>
        </Grid>
      </Grid>

      <Grid item sm={12} xs={12} md={6} lg={3} sx={{ pl: 1, mb: 3 }}>
        <div className="border-col">
          <div style={{ padding: "8px 16px" }}>
            <label style={{ paddingLeft: "8px", fontSize: "12px" }}>
              Passengers & Cabin Class
            </label>
            <div className="autocomplete" style={{ width: "300px" }}>
              <h6
                aria-describedby={id}
                onClick={handleClick}
                style={{
                  paddingLeft: "7px",
                  margin: "0",
                  cursor: "pointer",
                  fontWeight: "600",
                  fontSize:'18px'
                }}
              >
                {adult} Person
              </h6>
            </div>

            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
            >
              <div>
                <div style={{ padding: "25px" }}>
                  <div>
                    <span style={{ fontSize: "14px", fontWeight: "600" }}>
                      Passengers
                    </span>
                  </div>
                  <div
                    className="d-flex justify-content-between align-items-center"
                    style={{ padding: "8px 16px" }}
                  >
                    <div>
                      <span>{adult}</span>
                    </div>
                    <div>
                      <p>Adult</p>
                      <span style={{ fontSize: "12px", color: "#4c4c4c" }}>
                        12-12+ yrs
                      </span>
                    </div>
                    <div className="passenger">
                      <span className="dec" style={{marginRight:'4px'}} onClick={()=>setAdult(adult-1)}>
                        <i className="mdi mdi-minus"></i>
                      </span>
                      <span className="inc" onClick={()=>setAdult(adult+1)}>
                        <i className="mdi mdi-plus"></i>
                      </span>
                    </div>
                  </div>

                  <div
                    className="d-flex justify-content-between align-items-center"
                    style={{ padding: "8px 16px" }}
                  >
                    <div>
                      <span>{children}</span>
                    </div>
                    <div style={{ paddingLeft: "30px" }}>
                      <p>Children</p>
                      <span style={{ fontSize: "12px", color: "#4c4c4c" }}>
                        2-Less then 12 yrs
                      </span>
                    </div>
                    <div className="passenger">
                      <span className="dec" style={{marginRight:'4px'}} onClick={()=>setChildren(children-1)}>
                        <i className="mdi mdi-minus"></i>
                      </span>
                      <span className="inc" onClick={()=>setChildren(children+1)}>
                        <i className="mdi mdi-plus"></i>
                      </span>
                    </div>
                  </div>

                  <div
                    className="d-flex justify-content-between align-items-center"
                    style={{
                      padding: "8px 16px",
                      borderBottom: "1px solid #C7C7CC",
                    }}
                  >
                    <div>
                      <span>{infant}</span>
                    </div>
                    <div style={{ paddingLeft: "14px" }}>
                      <p>Infant</p>
                      <span style={{ fontSize: "12px", color: "#4c4c4c" }}>
                        Less then 2 yrs
                      </span>
                    </div>
                    <div className="passenger">
                      <span className="dec" style={{marginRight:'4px'}} onClick={()=>setInfant(infant-1)}>
                        <i className="mdi mdi-minus"></i>
                      </span>
                      <span className="inc" onClick={()=>setInfant(infant+1)}>
                        <i className="mdi mdi-plus"></i>
                      </span>
                    </div>
                  </div>

                  <div style={{ marginTop: "10px" }}>
                    <span
                      style={{
                        fontSize: "14px",
                        fontWeight: "600",
                        marginTop: "20px",
                      }}
                    >
                      Cabin Class
                    </span>
                  </div>

                  <div
                   className={`d-flex justify-content-between align-items-center cabin-class ${economy && 'cabin-class-text'} `}
                    style={{
                      padding: "8px 8px",
                      borderRadius: "4px",
                    }}
                    onClick={() => {
                      setBusiness(false);
                      setFirstClass(false);
                      setEconomy(true)
                    }}
                  >
                    <div>Economy</div>
                     {economy && (<div>
                      <span>
                        <i className="mdi mdi-check"></i>
                      </span>
                    </div>)}
                  </div>

                  <div
                   className={`d-flex justify-content-between align-items-center cabin-class ${business && 'cabin-class-text'} `}
                    style={{
                      padding: "8px 8px",
                      borderRadius: "4px",
                    }}
                    onClick={() => {
                      setBusiness(true);
                      setFirstClass(false);
                      setEconomy(false)
                    }}
                  >
                    <div>Business</div>
                   {business && ( <div>
                      <span>
                        <i className="mdi mdi-check"></i>
                      </span>
                    </div>)}
                  </div>

                  <div
                    className={`d-flex justify-content-between align-items-center cabin-class ${firstClass && 'cabin-class-text'} `}
                    style={{
                      padding: "8px 8px",
                      borderRadius: "4px",
                    }}

                    onClick={() => {
                      setBusiness(false);
                      setFirstClass(true);
                      setEconomy(false)
                    }}
                  >
                    <div>First Class</div>
                   { firstClass && (
                    <div>
                      <span>
                        <i className="mdi mdi-check"></i>
                      </span>
                    </div>
                   )}
                  </div>
                </div>
              </div>
            </Popover>

            <div>
              <small
                style={{
                  paddingLeft: "8px",
                  fontSize: "12px",
                  fontWeight: "500",
                }}
              >
                <strong>Economy Class</strong>
              </small>
            </div>
          </div>
        </div>
      </Grid>
    </Grid>
   
     <Grid container className="dateplaceholder">
         <Grid item xs={12} sm={12} md={12} lg={9} >
          <AddMultiCity/>
         </Grid>

         <Grid item  xs={12} sm={12} md={3} sx={{pl:2}}>
          <div className="d-flex align-items-center" style={{minHeight:'85px'}}>
              <div>
                  <a href="#hh" className="add-city-btn"> <i className="mdi mdi-plus"></i> ADD CITY</a>
              </div>
          </div>
         </Grid>

     </Grid>

     <div className="d-flex justify-content-center search-btn-div">
      <a className="search-hotel-btn" href="./home">
        Search Flights
      </a>
    </div>

  </form></>
  )
}

export default MultiCity