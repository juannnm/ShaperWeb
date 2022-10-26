import { Card } from "react-ui-controller";
import { Button } from "react-ui-controller";
import { Typography, Box } from "@mui/material";


export const ShaperFor = () => {
  return (
    <Card
      background="transparent"
      description={[
        <Box key='container' sx={{alignItems:'center', justifyContent:'center'}}>
          <Typography key='title' variant="h4" sx={{ textAlign: "center" }}>
            SHAPER FOR
          </Typography>
          <Typography key='title' variant="h4" sx={{ textAlign: "center", fontWeight: 'bold'}}>
            BUSINESS
          </Typography>
          <Typography key='paragraph' variant="body2" sx={{ textAlign: "center" }}>
            If you are a company and would like to attrac the bes talent this is
            your opportunity. Join Shaper Memberships for business and enjoy the
            benefits
          </Typography>
        </Box>
      ]}
      direction="column"
      width='300px'
      height="248px"
      actions={<Button text="Learn More" type="button" key='LearnMore' variant="contained"/>}
    />
  );
}



// Notas
// EL boton queda al borde de la carta, consultar como solucionarlo
