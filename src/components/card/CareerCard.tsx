import { Card } from "react-ui-controller";
import { CardActions, Box, Typography, Button } from "@mui/material";

export const CareerCard = () => {
  return (
    <Card
      description={[
        <Box key="container">
          <Box key="Main text">
            <Typography gutterBottom variant="h5" sx={{fontWeight:'bold'}}>
              Full-time Career
            </Typography>
            <Typography variant="body2">
              Our full-time career is designed to fully support you and guide
              you through a detailed process that will give you all the answers
              you are looking for to be the best in your new profession.
            </Typography>
          </Box>
          <Box key="hours" sx={{ mt: "10px" }}>
            <CardActions
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Typography>80 /monthly hours</Typography>
              <Button
                variant="contained"
                sx={{ maxWidth: "120px", borderRadius: "30px" }}
              >
                Apply
              </Button>
            </CardActions>
          </Box>
        </Box>,
      ]}
      background="background: rgb(232,197,249);
      background: linear-gradient(90deg, rgba(232,197,249,1) 0%, rgba(181,205,241,1) 97%);"
      height="185px"
      width="450px"
      alignment="left"
    />
  );
};
