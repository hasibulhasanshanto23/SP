import React, { useState } from "react";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Tab from "@mui/material/Tab";
import Box from '@mui/material/Box';
import flightmono from "../images/flight-mono.svg";
import hotelmono from "../images/hotel-mono.svg";
import holidaymono from "../images/holiday-mono.svg";
import visamono from "../images/visa-mono.svg";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import "../App.css";
import '../flight.scss'
import HotelSearch from "./HotelSearch";
import HolidaySearch from "./HolidaySearch";
import VisaSearch from "./VisaSearch";
import FlightSearch from "./FlightSearch";
const HomeSearchPanel = () => {
  const [data, setData] = useState("flight");
   console.log(data)
  return (
  <div className="banner" style={{ minHeight: "425px" }}>
 
      <div className="container" style={{ marginTop: "30px" }}>
        <div className="tabs">
          <TabContext value={data}>
            <Box className="header">
              <TabList
                onChange={(e, value) => setData(value)}
                indicatorColor=""
              >
                <Tab
                  label="Flight"
                  icon={<img src={flightmono} alt="flight" />}
                  value="flight"
                />
                <Tab
                  label="Hotel"
                  icon={<img src={hotelmono} alt="hotel" />}
                  value="hotel"
                />
                <Tab
                  label="Holiday"
                  icon={<img src={holidaymono} alt="holiday" />}
                  value="holiday"
                />
                <Tab
                  label="Visa"
                  icon={<img src={visamono} alt="visa" />}
                  value="visa"
                />
              </TabList>
            </Box>

            <TabPanel value="flight" className="pl-0 pr-0">
              <FlightSearch/>
            </TabPanel>

            <TabPanel value="hotel" className="pl-0 pr-0">
              <HotelSearch />
            </TabPanel>

            <TabPanel value="holiday" className="pl-0 pr-0">
              <HolidaySearch />
            </TabPanel>

            <TabPanel value="visa" className="pl-0 pr-0">
              <VisaSearch />
            </TabPanel>
            
          </TabContext>
        </div>
      </div>
    </div>
  );
};

export default HomeSearchPanel;
