import { Box, Typography, Card } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

interface IProps {
  title: string;
  description: string;
  tutor: string;
  score: number;
}

export const CarouselCard = (props: IProps) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="left"
      textAlign="left"
      height="200px"
      width="416px"
      gap={1}
      bgcolor="white"
      borderRadius="20px"
      p="30px"
      boxShadow="0px 2px 4px 1px rgba(0, 0, 0, 0.4)"
    >
      <Typography variant="h6">{props.title}</Typography>
      <Typography variant="subtitle1" width="80%">{props.description}</Typography>
      <Box display="flex" flexDirection="row" mt="25px">
        <Typography variant="body1" fontWeight="bold" mr="auto" alignSelf="center">{props.tutor}</Typography>
        <Typography variant="body1" alignSelf="center" mt="3px">{props.score}</Typography>
        <StarIcon fontSize="large" color="warning" />
      </Box>
    </Box>
  );
};
