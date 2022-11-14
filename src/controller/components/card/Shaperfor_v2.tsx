import { Typography, Box, Card, CardMedia, CardContent } from "@mui/material";

interface IProps {
  bgcolor: string,
  bgtext: string,
  bgtextBold: string
  content: string
}

export const ShaperFor_v2 = (props: IProps) => {
  return (
    <Box width="386px" height="325px" bgcolor="#F9FAFA" borderRadius="20px">
      <Box
        display="flex"
        flexDirection="column"
        gap={2}
        borderRadius="20px"
        overflow="hidden"
        bgcolor={props.bgcolor}
        width="385px"
        height="182px"
        textAlign="center"
        pt="15%"
      >
        <Typography fontSize="50px" color="white" fontFamily="RobotoRegular">
          {props.bgtext.toUpperCase()}
        </Typography>
        <Typography fontSize="50px" fontWeight="bold" color="white" fontFamily="RobotoBold">
          {props.bgtextBold.toUpperCase()}
        </Typography>
      </Box>
      <Box bgcolor="transparent" pt="7px" pl="10px">
        <Typography variant="body1" color="#050E3F">
          {props.content}
        </Typography>
      </Box>
    </Box>
  );
};
