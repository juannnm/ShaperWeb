import { Card } from "react-ui-controller";
import { Typography, Box } from "@mui/material";

export const CourseCard = () => {
  return(
    <Card
      background="white"
      description={[
        <Box key='container'>
          <Typography variant="h5">Great Course</Typography>
          <Typography sx={{ fontSize: "10px" }}>
            Some strange text I write to fill space
          </Typography>
        </Box>
      ]}
      height="130px"
      width="130px"
    />
  )
}