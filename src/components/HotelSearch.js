import React, { useState } from "react";
import moment from "moment";
import DatePick from "./DatePick";
import Popover from "@mui/material/Popover";

const dayName = moment().format("dddd");

const HotelSearch = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [adult,setAdult]=useState(1)
  const [child,setChild]=useState(0)

  if(adult<1){
    setAdult(1)
  }
  if(child<0){
    setChild(0)
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <div>
        <div className="row">
          <div className="col-md-4">
            <div className="border-col">
              <div style={{ padding: "8px 16px" }}>
                <label style={{ paddingLeft: "12px", fontSize: "12px" }}>
                  Enter City or Property
                </label>
                <div className="autocomplete" style={{ width: "300px" }}>
                  <input
                    id="myInput"
                    className="myInput"
                    type="text"
                    name="myCountry"
                    placeholder="Search Hotels"
                  />
                </div>
                <div>
                  <span style={{ fontSize: "12px", paddingLeft: "10px" }}>
                    <strong>Cox's Bazar,</strong>Bangaldesh
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="border-col">
              <div className="d-flex">
                <div
                  className="placeholder-text"
                  style={{
                    padding: "13px 0",
                    width: "50%",
                    borderRight: "1px solid #E2E2E8",
                  }}
                >
                  <span
                    style={{
                      paddingLeft: "22px",
                      fontSize: "12px",
                      display: "block",
                    }}
                  >
                    Check-In Date
                  </span>
                  <div style={{ paddingLeft: "12px" }}>
                    <DatePick />
                  </div>
                  <span style={{ fontSize: "12px", paddingLeft: "20px" }}>
                    <strong>2022,</strong>
                    <span style={{ opacity: "0.6" }}>{dayName}</span>
                  </span>
                </div>
                <div>
                  <div
                    className="placeholder-text"
                    style={{ padding: "13px 0" }}
                  >
                    <span
                      style={{
                        paddingLeft: "22px",
                        fontSize: "12px",
                        display: "block",
                      }}
                    >
                      Check-Out Date
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
              </div>
            </div>
          </div>

          
          <div className="col-md-4">
            <div className="border-col">
              <div style={{ padding: "11px 16px" }}>
                <label style={{ paddingLeft: "12px", fontSize: "12px" }}>
                  Guest(s) & Room(s)
                </label>
                <div className="autocomplete" style={{ width: "300px" }}>
                  <h6
                    aria-describedby={id}
                    onClick={handleClick}
                    style={{
                      paddingLeft: "10px",
                      margin: "0",
                      cursor: "pointer",
                    }}
                  >
                    3 Guest
                  </h6>
                </div>
            
              <Popover
                  id={id}
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "center",
                    horizontal: "center",
                  }}
                  transformOrigin={{
                    vertical: "center",
                    horizontal: "center",
                  }}
                >
                  <div style={{ border: "1px solid #E2E2E8"}}>
                    <div className="d-flex">
                      <div style={{ padding: "10px 8px" }}>
                        <span>
                          <i
                            className="mdi mdi-account-group"
                            style={{ fontSize: "32px" }}
                          ></i>
                        </span>
                      </div>
                      <div style={{ padding: "10px 98px 10px 0px" }}>
                        <div>
                          <span>Guest(s) & Room(s)</span>
                        </div>
                        <div>
                          <h4>1 Guest -1 Room</h4>
                        </div>
                      </div>
                    </div>

                    <div
                      className="d-flex justify-content-between popover2 "
                      style={{ padding: "8px 5px" }}
                    >
                      <div>
                        <p style={{ fontSize: "14px" }}>Room 1 (max 6 Guest</p>
                      </div>
                      <div>
                        <select name="room" className="appe">
                          <option value="1" >1 Room</option>
                          <option value="2">2 Room</option>
                          <option value="3">3 Room</option>
                        </select>
                      </div>
                    </div>

                    <div
                      className="row"
                      style={{ fontWeight: "500", color: "#000000" }}
                    >
                      <div className="col-md-6">
                        <div
                          className="d-flex justify-content-between"
                          style={{
                            border: "1px solid #EFEFF4",
                            margin: "12px 0px 8px 5px",
                            padding: "10px 6px",
                          }}
                        >
                          <div>
                            <span style={{cursor:'pointer'}} onClick={()=>setAdult(adult-1)}>
                              <i className="mdi mdi-minus pop-hover"></i>
                            </span>
                          </div>
                          <div>
                            <p>{adult} Adult</p>
                          </div>
                          <div>
                            <span style={{cursor:'pointer'}} onClick={()=>setAdult(adult+1)}>
                              <i className="mdi mdi-plus pop-hover"></i>
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div
                          className="d-flex justify-content-between"
                          style={{
                            border: "1px solid #EFEFF4",
                            margin: "12px 5px 8px 0px",
                            padding: "10px 6px",
                          }}
                        >
                          <div>
                            <span style={{cursor:'pointer'}} onClick={()=>setChild(child-1)}>
                              <i className="mdi mdi-minus pop-hover"></i>
                            </span>
                          </div>
                          <div>
                            <p>{child} Child</p>
                          </div>
                          <div>
                            <span style={{cursor:'pointer'}} onClick={()=>setChild(child+1)}>
                              <i className="mdi mdi-plus pop-hover"></i>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Popover>
       
                <div>
                  <small
                    style={{
                      paddingLeft: "11px",
                      fontSize: "12px",
                    }}
                  >
                    <strong>1 Room</strong>
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center search-btn-div">
          <a className="search-hotel-btn" href="./home">
            Search Hotels
          </a>
        </div>
      </div>
    </>
  );
};

export default HotelSearch;
