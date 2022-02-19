import * as React from "react";
import { Box } from "@mui/system";
import { Button, Grid, Typography } from "@mui/material";
import { PropTypes } from "prop-types";
import { Tabs, Tab } from "@mui/material";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { makeStyles } from '@mui/styles';
import OneWay from './Oneway'



const useStyles = makeStyles({
   btnWrapper: {
      textAlign: 'center'
   }
})

function TabPanel(props) {
   const { children, value, index, ...other } = props;

   return (
      <div
         role="tabpanel"
         hidden={value !== index}
         id={`simple-tabpanel-${index}`}
         aria-labelledby={`simple-tab-${index}`}
         {...other}
      >
         {value === index && (
            <Box sx={{ p: 3 }}>
               <Typography>{children}</Typography>
            </Box>
         )}
      </div>
   );
}

TabPanel.propTypes = {
   children: PropTypes.node,
   index: PropTypes.number.isRequired,
   value: PropTypes.number.isRequired
};

function a11yProps(index) {
   return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`
   };
}

 function FlightSearch() {
   const [value, setValue] = React.useState(0);

   const handleChange = (event, newValue) => {
      setValue(newValue);
   };

   const top100Films = [
      { label: "The Shawshank Redemption", year: 1994 },
      { label: "The Godfather", year: 1972 },
      { label: "The Godfather: Part II", year: 1974 },
      { label: "The Dark Knight", year: 2008 },
      { label: "12 Angry Men", year: 1957 },
      { label: "Schindler's List", year: 1993 },
      { label: "Pulp Fiction", year: 1994 }
   ];

   const classes = useStyles();


   return (
      <div className="flightSearch">
         <Box sx={{ width: "100%" }}>
            <Box>
               <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" indicatorColor={"red"}>
                  <Tab
                     label="One Way"
                     {...a11yProps(0)}
                  />
                  <Tab
                     label="Round Trip" {...a11yProps(1)} />
                  <Tab
                     label="Multi-City" {...a11yProps(2)} />
               </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
               <OneWay />
            </TabPanel>
            <TabPanel value={value} index={1}>
               Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
               Item Three
            </TabPanel>
         </Box>
      </div>
   );
}

export default FlightSearch