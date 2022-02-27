import React,{useState} from 'react'
import DatePick from './DatePick';

const VisaSearch = () => {
    const [travller, setTraveller] = useState(1);
 
    if (travller < 1) {
      setTraveller(1);
    }
  return (
    <>
               <div>
                <div className="row dateplaceholder-visa">
                  <div className="col-md-12 col-sm-12 col-lg-4 mb-md-3 mb-sm-3 mb-3">
                    <div className="border-col">
                      <div style={{ padding: "10px 0px" }}>
                        <span
                          style={{
                            fontSize: "12px",
                            // display: "block",
                            paddingLeft: "20px",
                            display: "inline-block",
                          }}
                        >
                          Country
                        </span>
                        <div style={{ display: "inline-block" }}>
                          <span>
                            <i
                              className="mdi mdi-chevron-down"
                              style={{ fontSize: "12px", marginLeft: "3px" }}
                            ></i>
                          </span>
                        </div>
                        <div
                          className="autocomplete placeholder-text"
                          style={{ paddingLeft: "10px", display: "block" }}
                        >
                          <input
                            id="myInput"
                            className="myInput"
                            type="text"
                            name="myCountry"
                            placeholder="Enter Country"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 col-sm-12 col-lg-4 mb-md-3 mb-sm-3 mb-3">
                    <div className="border-col">
                      <div className="d-flex">
                        <div
                          className="placeholder-text"
                          style={{
                            width: "50%",
                            borderRight: "1px solid #E2E2E8",
                            padding: "15px 0",
                          }}
                        >
                          <span
                            style={{
                              paddingLeft: "22px",
                              fontSize: "12px",
                              display: "block",
                            }}
                          >
                            Date of Entry
                          </span>
                          <div style={{ paddingLeft: "12px" }}>
                            <DatePick />
                          </div>
                        </div>
                        <div>
                          <div
                            className="placeholder-text"
                            style={{ padding: "15px 0" }}
                          >
                            <span
                              style={{
                                paddingLeft: "22px",
                                fontSize: "12px",
                                display: "block",
                              }}
                            >
                              Date of Exit
                            </span>
                            <div style={{ paddingLeft: "12px" }}>
                              <DatePick />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-12 col-sm-12 col-lg-4 ">
                    <div className="border-col">
                      <div className="d-flex">
                        <div
                          style={{
                            width: "50%",
                            borderRight: "1px solid #E2E2E8",
                          }}
                        >
                          <div style={{ padding: "10px 0px" }}>
                            <span
                              style={{
                                fontSize: "12px",
                                // display: "block",
                                paddingLeft: "20px",
                                display: "inline-block",
                              }}
                            >
                              Nationality
                            </span>
                            <div style={{ display: "inline-block" }}>
                              <span>
                                <i
                                  className="mdi mdi-chevron-down"
                                  style={{
                                    fontSize: "12px",
                                    marginLeft: "3px",
                                  }}
                                ></i>
                              </span>
                            </div>
                            <div
                              className="autocomplete placeholder-text country"
                              style={{ paddingLeft: "20px", display: "block" }}
                            >
                              {/* <input
                                id="myInput"
                                className="myInput"
                                type="text"
                                name="myCountry"
                                placeholder="Bangladesh"
                              /> */}
                              <select name="country" id="country" >
                                <option value="bangladesh">Bangaldesh</option>
                                <option value="pakistan">Pakistan</option>
                                <option value="qatar">Qatar</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div style={{ width: "50%" }}>
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
                                Traveller
                              </span>
                              <p
                                style={{
                                  margin: "0",
                                  fontSize: "18px",
                                  fontWeight: "600",
                                  paddingLeft: "20px",
                                }}
                              >
                                {travller}
                              </p>
                            </div>
                            <div
                              style={{ paddingRight: "20px", marginTop: "7px" }}
                            >
                              <div
                                className="d-flex justify-content-center align-items-center"
                                style={{ cursor: "pointer" }}
                              >
                                <div
                                  onClick={() => setTraveller(travller - 1)}
                                  style={{
                                    padding: "3px 6px",
                                    backgroundColor: "#fff",
                                    borderRadius: "16px 0 0 16px",
                                    boxShadow: "0 1px 3px rgb(0 0 0 / 10%",
                                  }}
                                  className='visa-travel-border'
                                >
                                  <span>
                                    <i className="mdi mdi-minus"></i>
                                  </span>
                                </div>
                                <div
                                  onClick={() => setTraveller(travller + 1)}
                                  style={{
                                    padding: "3px 6px",
                                    backgroundColor: "#fff",
                                    borderRadius: "0px 16px 16px 0px",
                                    boxShadow: "0 1px 3px rgb(0 0 0 / 10%",
                                  }}
                                  className='visa-travel-border'
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
                  </div>
                </div>
                <div className="d-flex justify-content-center search-btn-div">
                  <a className="search-hotel-btn" href="./home">
                    View Offers
                  </a>
                </div>
              </div>
    </>
  )
}

export default VisaSearch