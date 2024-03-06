import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { AccordionsProps } from "./Accordions.types";

const StyledContainer = styled("div")``;

const StyledAccordion = styled(Accordion)`
  &.MuiAccordion-root {
    border-radius: 15px;
  }
`;

const Accordions = ({ title, children }: AccordionsProps) => {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <StyledContainer>
      <StyledAccordion
        // expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        defaultExpanded
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon fontSize="large" sx={{ color: "#2D9FC3" }} />
          }
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography variant="h1" sx={{ width: "100%", color: "#2D9FC3" }}>
            {title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>{children}</AccordionDetails>
      </StyledAccordion>
    </StyledContainer>
  );
};

export default Accordions;
