import { Box, CardMedia, Typography } from "@mui/material";
import { Card, Button } from "react-ui-controller";
import Image from 'next/image'
import birrete from '../../../../public/assets/png/birrete_icon.png'

export const InterestCard = () => {
  return (
    <Card
      background="white"
      description={[
        <Box key='container' sx={{display:'flex', flexDirection:'row'}}>
          <Box>
            <Image src={birrete} alt="Ella" layout="intrinsic" />
          </Box>
          <Box key='container'>
            <Box key='text' sx={{display:'flex', flexDirection:'row', alignItems:'center'}}>
            <Typography key='text' variant="h4" textAlign="center">
              Are you interested in looking at study careers?
            </Typography>
            </Box>
          </Box>
        </Box>
      ]}
      actions={<Button key='button' type="button" variant="contained" text="Apply" size="large"/>}
      height="120px"
      width="60vw"
      direction="row"
    />
  );
}