import { Box, Typography } from "@mui/material";
import { Card } from "react-ui-controller";
import SettingsIcon from '@mui/icons-material/Settings';

export const ServiceCard = () => {
  return (
    <Card
      background="white"
      description={
        <Box key="container">
          <Box key="head" sx={{ display: "flex", flexDirection: "row" }}>
            <SettingsIcon sx={{ fontSize: 40 }} />
            <Typography sx={{ fontSize: "20px", textAlign: "left" }}>
              Project Resources
            </Typography>
          </Box>
          <Box key="text">
            <Typography variant="body1">
              Some strange text I write to fill space
            </Typography>
          </Box>
        </Box>
      }
      height="177px"
      width="200px"
    />
  );
}