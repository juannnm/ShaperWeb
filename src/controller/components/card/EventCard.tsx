import { Card } from "react-ui-controller";
import { Box, Typography } from '@mui/material'

export const EventCard = () => {
  return (
    <Card
      background="white"
      description={[
        <Box key="container" sx={{ display: "flex", flexDirection: "row" }}>
          <Box
            sx={{
              width: "128px",
              height: "128px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              bgcolor: "lightblue",
              borderRadius:'20% 0 0 20%'
            }}
          >
            <Typography variant="h3">09</Typography>
            <Typography variant="h5">nov</Typography>
          </Box>
          <Box key="container" sx={{ textAlign: "left" }}>
            <Typography variant="h4">Evento a Desarrolarse</Typography>
            <Typography variant="body1">
              Descripcion del evento que es va a estar dando
            </Typography>
          </Box>
        </Box>,
      ]}
      height="130px"
      width="500px"
      
    />
  );
}