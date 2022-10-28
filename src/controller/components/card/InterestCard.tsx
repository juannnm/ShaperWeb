import { Box, CardMedia, Typography } from "@mui/material";
import { Card, Button } from "react-ui-controller";
import Image from 'next/image'
import { Birrete } from '../../../../public/assets/svg/Academy/birrete'

export const InterestCard = () => {
  return (
    <Card
      background="white"
      description={[
        <Box key='container' sx={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
            <Birrete style={{fontSize: '100px', m:'35px'}}/>
            <Typography key='text' variant="h4" textAlign="center">
              Are you interested in looking at study careers?
            </Typography>

        </Box>
      ]}
      actions={<Button key='button' type="button" variant="contained" text="Apply" size="large"/>}
      height="120px"
      width="60vw"
      direction="row"
    />
  );
}