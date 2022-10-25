import { Box, Typography } from "@mui/material";
import { Card } from "react-ui-controller";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EventNoteIcon from '@mui/icons-material/EventNote';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

export const CertifieCard = () => {
  return (
    <Card
      background="white"
      description={[
        <Box key='container'>
          <Typography variant='h6' sx={{margin: 2, textAlign:'left'}}>Certified MicroDegree for UX/UI Designer</Typography>
          <Box sx={{ display:'flex', flexDirection:'row', justifyContent:'left', leftMargin:'5px'}}>
            <AccessTimeIcon sx={{margin:'0 2px'}}/>
            <Typography variant='body1'>Duracion 4 meses</Typography>
          </Box>
          <Box sx={{ display:'flex', flexDirection:'row', justifyContent:'left', leftMargin:'5px', maxWidth:'160px'}}>
            <EventNoteIcon sx={{margin:'0 2px'}}/>
            <Typography variant='body1'>07/NOV inicio de clases</Typography>
          </Box>
          <Box sx={{display:'flex', flexDirection:'row', justifyContent:'left', leftMargin:'5px', maxWidth:'160px'}}>
            <AccountBoxIcon sx={{margin:'0 2px'}}/>
            <Typography variant='body1'>Profesor: Charles Xavier</Typography>
          </Box>
        </Box>
      ]}
      height="300px"
      width="180px"
    />
  )
}