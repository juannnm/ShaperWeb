import { Box, Divider, TextField, Typography, Link } from "@mui/material";
import { Button } from "react-ui-controller";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';



export const Footer = () => {
  return (
    <Box bgcolor='violet'>
      <Box display="flex" flexDirection="column" textAlign='center' m='35px 25%'>
        <Typography variant="h3">
          We strive to deliver and ensure achivements beyond expected results.
        </Typography>
        <Button text="Register now" type="button" variant="contained" />
      </Box>

      <Divider/>
      
      <Box display='flex' flexDirection='row' justifyContent='center' alignItems='center' height='30vh'>
        <Box display="flex" flexDirection="column"  justifyContent='center' alignContent='center' mr='100px'>
          <Typography>Register To Our Newsletter</Typography>
          <Box>
            <TextField sx={{borderRadius:'100px', width:'300px', mr:'10px'}} size='small'/>
            <Button text="L" type="button" variant="contained"/>
          </Box>
          <Box mt='20px' justifyContent='space-between'>
            <FacebookOutlinedIcon fontSize="large"  sx={{mr:'18px'}}/>
            <FacebookOutlinedIcon fontSize="large"  sx={{mr:'18px'}}/>
            <FacebookOutlinedIcon fontSize="large"  sx={{mr:'18px'}}/>
            <FacebookOutlinedIcon fontSize="large"  sx={{mr:'18px'}}/>
            <FacebookOutlinedIcon fontSize="large"  sx={{mr:'18px'}}/>
            <FacebookOutlinedIcon fontSize="large"  sx={{mr:'18px'}}/>
          </Box>
        </Box>
        <Box display="flex" flexDirection="row">
          <Box display='flex' flexDirection='column' mr='30px'>
            <Typography>Last seen</Typography>
            <Link underline='none'>Motion Graphics</Link>
            <Link underline='none'>UX/UI Design</Link>
            <Link underline='none'>Business</Link>
            <Link underline='none'>Nombre Curso</Link>
            <Link underline='none'>Nombre Curso</Link>
          </Box>
          <Box display='flex' flexDirection='column' mr='30px'>
            <Typography>Resources</Typography>
            <Link underline='none'>REVISAR</Link>
            <Link underline='none'>REVISAR</Link>
            <Link underline='none'>REVISAR</Link>
            <Link underline='none'>REVISAR</Link>
            <Link underline='none'>REVISAR</Link>
          </Box>
          <Box display='flex' flexDirection='column'>
            <Typography>Shaper</Typography>
            <Link underline='none'>Academy</Link>
            <Link underline='none'>Certified Careers</Link>
            <Link underline='none'>Companies</Link>
            <Link underline='none'>About Us</Link>
            <Link underline='none'>Contact Us</Link>
          </Box>
        </Box>
      </Box>
      
      <Divider/>
      
      <Box textAlign='center' m='20px' height='5vh'>
        <Typography>
          Copyright @ Shaper 2022. All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
}

