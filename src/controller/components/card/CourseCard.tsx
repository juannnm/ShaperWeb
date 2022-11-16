import { Card } from 'react-ui-controller';
import { Typography, Box } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

export const CourseCard = () => {
    return (
      <Box width="360px" height="340px" bgcolor="#F9FAFA" borderRadius="20px">
      <Box
        display="flex"
        flexDirection="column"
        gap={2}
        borderRadius="20px"
        overflow="hidden"
        bgcolor="grey"
        width="360px"
        height="182px"
        textAlign="center"
        pt="15%"
      >
      </Box>
      <Box bgcolor="transparent" pt="7px" pl="10px" display="flex" flexDirection="column">
        <Typography variant="h5" color="#050E3F">
          Adobe XD Design
        </Typography>
        <Typography variant="body1" mt="15px">
          Lucas Rodriguez
        </Typography>
        <Box display="flex" mt="20px">
          <Typography variant="body1">4.72</Typography>
          <StarIcon fontSize="medium" color='warning'/>
        </Box>
      </Box>
    </Box>
    );
};
