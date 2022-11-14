import { Typography, Box, Card, CardMedia, CardContent } from "@mui/material";
import Image from "next/image";
import bg from "../../../../public/assets/png/fondo-02.png";

interface IProps {
  title: string,
  content: string
}

export const PathCard = (props:IProps) => {
  return (
    <Box width="278px" height="234px" bgcolor="#F9FAFA" borderRadius="20px">
      <Box
        borderRadius="20px"
        overflow="hidden"
        bgcolor="transparent"
        width="278px"
        height="135px"
      >
        <Image src={bg} alt="bg" width="278px" height="132px" />
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
