import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { styled } from "@mui/material";





export const DisplayAccordion = () => {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Box width="55%" display="flex" flexDirection="column" gap={2} mt="20px" borderRadius="10px">
      <Box></Box>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        sx={{bgcolor:"rgba(5,14,63,0.7)", backdropFilter:"5px", border:"none", borderRadius:"10px"}}
        
      >
        <AccordionSummary
          expandIcon={<AddIcon fontSize="large" sx={{color:"white", bgcolor:"rgba(5,14,80,0.7)", borderRadius:"20px"}}/>}
          aria-controls="panel1bh-content"
          id="panel1bh-header"

          
        >
          <Typography variant="h6" color="white">We Love Teaching Remotely</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" color="white">
            All you need is a computer with internet access.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        sx={{bgcolor:"rgba(5,14,63,0.7)", backdropFilter:"5px", border:"none", borderRadius:"10px"}}
        
      >
        <AccordionSummary
          expandIcon={<AddIcon fontSize="large" sx={{color:"white", bgcolor:"rgba(5,14,80,0.7)", borderRadius:"20px"}}/>}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography variant="h6" color="white">Knowledge into practice</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" color="white">
          We provide you with the most sought-after skills in a high-demand world.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
        sx={{bgcolor:"rgba(5,14,63,0.7)", backdropFilter:"5px", border:"none", borderRadius:"10px"}}
      >
        <AccordionSummary
          expandIcon={<AddIcon fontSize="large" sx={{color:"white", bgcolor:"rgba(5,14,80,0.7)", borderRadius:"20px"}}/>}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography variant="h6" color="white">Your don’t have to pay us now</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" color="white">
          Just learn and we will help you find your dream job, only then you will pay us back.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Box></Box>
    </Box>
  );
};
