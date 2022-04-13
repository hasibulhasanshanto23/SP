import React from "react";
import {
  AccordionSummary,
  AccordionDetails,
  Typography,
  Accordion,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const AccordionLayout = ({ title, semiTitle, com, reset }) => {
  return (
    <div className="accordion">
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          {/* <Typography className="accordion__title">{title}</Typography>
          {reset && (
            <Button className="reset-btn" variant="contained">
              Reset
            </Button>
          )} */}
          <div className="test">
            <div>
              <h5 className="accordion__title">{title}</h5>
              <small style={{ fontSize: "10px" }}> BDT 50,000 - 1,20,000</small>
            </div>
            {reset && (
              <div className="test2">
                <Button className="reset-btn" variant="contained">
                  Reset
                </Button>
              </div>
            )}
          </div>
        </AccordionSummary>
        <AccordionDetails className="accordion__details">
          <Typography className="accordion__semiTitle">{semiTitle}</Typography>
          {com}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default AccordionLayout;
