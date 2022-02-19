import React, { useState } from "react";
import DatePick from "./DatePick";

const HolidaySearch = () => {
  const [room, setRoom] = useState(3);
  if (room < 1) {
    setRoom(1);
  }
  if (room > 30) {
    setRoom(30);
  }
  return (
    <>
      <div>
        <div className="row">
          <div className="col-md-6">
            <div className="border-col">
              <div style={{ padding: "15px 0px" }}>
                <label
                  style={{
                    fontSize: "12px",
                    display: "block",
                    paddingLeft: "20px",
                  }}
                >
                  Destination
                </label>
                <div className="autocomplete" style={{ paddingLeft: "10px" }}>
                  <input
                    id="myInput"
                    className="myInput"
                    type="text"
                    name="myCountry"
                    placeholder="City"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div style={{ margin: "30px 0" }}>
              <a className="add-city-btn" href="#">
                ADD CITY
              </a>
            </div>
          </div>

          <div className="col-md-6" style={{ marginTop: "12px" }}>
            <div className="border-col">
              <div style={{ padding: "15px 0px" }}>
                <label
                  style={{
                    fontSize: "12px",
                    display: "block",
                    paddingLeft: "20px",
                  }}
                >
                  Travel Date
                </label>
                <div
                  className="placeholder-text"
                  style={{ paddingLeft: "10px" }}
                >
                  <DatePick />
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6" style={{ marginTop: "12px" }}>
            <div className="border-col">
              <div
                style={{ padding: "15px 0px" }}
                className="d-flex justify-content-between"
              >
                <div>
                  <span
                    style={{
                      fontSize: "12px",
                      display: "block",
                      paddingLeft: "20px",
                    }}
                  >
                    Room(s)
                  </span>
                  <p
                    style={{
                      margin: "0",
                      fontSize: "18px",
                      fontWeight: "600",
                      paddingLeft: "20px",
                    }}
                  >
                    {room} Room
                  </p>
                </div>
                <div style={{ paddingRight: "20px", marginTop: "7px" }}>
                  <div
                    className="d-flex justify-content-center align-items-center"
                    style={{ cursor: "pointer" }}
                  >
                    <div
                      onClick={() => setRoom(room - 1)}
                      style={{
                        padding: "4px 10px",
                        backgroundColor: "#fff",
                        borderRadius: "16px 0 0 16px",
                        boxShadow: "0 1px 3px rgb(0 0 0 / 10%",
                      }}
                    >
                      <span>
                        <i className="mdi mdi-minus"></i>
                      </span>
                    </div>
                    <div
                      onClick={() => setRoom(room + 1)}
                      style={{
                        padding: "4px 10px",
                        backgroundColor: "#fff",
                        borderRadius: "0px 16px 16px 0px",
                        boxShadow: "0 1px 3px rgb(0 0 0 / 10%",
                      }}
                    >
                      <span>
                        <i className="mdi mdi-plus"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center search-btn-div">
          <a className="search-hotel-btn" href="#">
            Search Packages
          </a>
        </div>
      </div>
    </>
  );
};

export default HolidaySearch;
