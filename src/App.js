import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./accordian.scss";
import { Container } from "@mui/material";
import AccordionLayout from "./component/AccordionLayout";
import PriceRange from "./component/PriceRange";
import FlightSchedule from "./component/FlightSchedule";

function App() {
  return (
    <Container>
      <div className="main">
        {/* <AccordionLayout
          title="Price Range"
          semiTitle={
            <>
              Starts from <b>BDT 50,000 </b> to <b>1,20,000</b> against your
              search.Price is subject to change.
            </>
          }
          com={<PriceRange />}
        /> */}

        <AccordionLayout
          title
          com={<FlightSchedule/>}
        />
      </div>
    </Container>
  );
}

export default App;
