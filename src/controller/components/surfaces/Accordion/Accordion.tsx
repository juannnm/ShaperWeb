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
    <Box
      display="flex"
      flexDirection="column"
      gap={2}
      mt="5px"
      borderRadius="10px"
    >
      <Box></Box>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        sx={{
          backdropFilter: "5px",
          border: "none",
          borderRadius: "10px",
          padding: "20px",
          bgcolor: "rgba(255,255,255,0.5)",
          color: "rgba(0,0,0,0.5)",
          "&:hover": {
            bgcolor: "rgba(255,255,255)",
            color: "rgba(0,0,0)",
            "& .MuiAccordionSummary-expandIconWrapper .MuiSvgIcon-root": {
              color: "rgba(255,255,255)",
            },
          },
        }}
      >
        <AccordionSummary
          expandIcon={
            <AddIcon
              fontSize="large"
              sx={{
                color: "white",
                bgcolor: "rgba(5,14,60)",
                borderRadius: "20px",
              }}
            />
          }
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography variant="h5">We Love Teaching Remotely</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1">
            All you need is a computer with internet access.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        sx={{
          backdropFilter: "5px",
          border: "none",
          borderRadius: "10px",
          padding: "20px",
          bgcolor: "rgba(255,255,255,0.5)",
          color: "rgba(0,0,0,0.5)",
          "&:hover": {
            bgcolor: "rgba(255,255,255)",
            color: "rgba(0,0,0)",
            "& .MuiAccordionSummary-expandIconWrapper .MuiSvgIcon-root": {
              color: "rgba(255,255,255)",
            },
          },
        }}
      >
        <AccordionSummary
          expandIcon={
            <AddIcon
              fontSize="large"
              sx={{
                color: "white",
                bgcolor: "rgba(5,14,60)",
                borderRadius: "20px",
              }}
            />
          }
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography variant="h5">Knowledge into practice</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1">
            We provide you with the most sought-after skills in a high-demand
            world.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
        sx={{
          backdropFilter: "5px",
          border: "none",
          borderRadius: "10px",
          padding: "20px",
          bgcolor: "rgba(255,255,255,0.5)",
          color: "rgba(0,0,0,0.5)",
          "&:hover": {
            bgcolor: "rgba(255,255,255)",
            color: "rgba(0,0,0)",
            "& .MuiAccordionSummary-expandIconWrapper .MuiSvgIcon-root": {
              color: "rgba(255,255,255)",
            },
          },
        }}
      >
        <AccordionSummary
          expandIcon={
            <AddIcon
              fontSize="large"
              sx={{
                color: "white",
                bgcolor: "rgba(5,14,60)",
                borderRadius: "20px",
              }}
            />
          }
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography variant="h5">Your don’t have to pay us now</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1">
            Just learn and we will help you find your dream job, only then you
            will pay us back.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Box></Box>
    </Box>
  );
};
