import { CardMedia, Typography, Box } from "@mui/material";
import { Card } from "react-ui-controller";
import Image from 'next/image';
import Ella from '../../images/Ella.png';
import bg from '../../images/fondo-02.png';

export const CharacterCard = () => {
  return (
    <Card
      background='background: rgb(232,197,249);
        background: linear-gradient(90deg, rgba(232,197,249,1) 0%, rgba(181,205,241,1) 97%);'
      description={
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Box sx={{display:'flex' ,justifyContent:'center', alignItems:'center'}}>
            <Image src={Ella} alt="Ella" layout="intrinsic" />
          </Box>
          <Box key="container" sx={{ textAlign: "left" }}>
            <Typography variant="h4">Saludo del personaje</Typography>
            <Typography variant="h4">Nombre del Personaje</Typography>
            <Typography variant="body1">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic
            </Typography>
          </Box>
        </Box>
      }
      height="200px"
      width="900px"
      direction="row"
    />
  );
}