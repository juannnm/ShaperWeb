import { Typography, Box, Card, CardMedia, CardContent } from "@mui/material";

interface IProps {
  bgtext: string,
  title: string,
  content: string
}

export const PathOrderCard = (props: IProps) => {
  return (
    <Box width="278px" height="234px" bgcolor="#F9FAFA" borderRadius="20px">
      <Box
        borderRadius="20px"
        overflow="hidden"
        bgcolor="#A54CDB"
        width="278px"
        height="135px"
        textAlign="center"
        pt="20%"
      >
        <Typography fontSize="94px" fontWeight="bold" color="white" fontFamily="RobotoMedium">
          {props.bgtext}
        </Typography>
      </Box>
      <Box bgcolor="transparent" pt="7px" pl="10px">
        <Typography variant="body1" color="#050E3F" fontWeight="bold">
          {props.title}
        </Typography>
        <Typography variant="body2" color="#050E3F">
          {props.content}
        </Typography>
      </Box>
    </Box>
  );
};
