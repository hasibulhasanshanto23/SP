import React from "react";
import {
  AccordionSummary,
  AccordionDetails,
  Typography,
  Accordion,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const AccordionLayout = ({ title, semiTitle, com }) => {
  return (
    <div className="accordion">
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className="accordion__title">{title}</Typography>
          {/* {title && <Typography className="accordion__title">Price range</Typography>} */}
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
