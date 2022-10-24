import React from 'react';
import { Card, CardContent, Typography, Box, Button, Divider, CardActions, CardHeader, Avatar, CardMedia } from '@mui/material';
import bg from '../images/fondo-02.png';
import SettingsIcon from '@mui/icons-material/Settings';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EventNoteIcon from '@mui/icons-material/EventNote';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

function IntroCard() {
  return (

    // --MIRAR EL BORDER RADIUS DE LA BOX, NO FUNCIONA--

    <Box sx={{display:'flex', flexDirection:'row', height:'15em', borderRadius:'60px', boxShadow:'20px'}}>
      <Card sx={{maxWidth:300, display:'flex', flexDirection:'column', justifyContent:'center',alignItems:'center', }}>
        <CardContent>
          <Typography variant='h4' sx={{textAlign:'center'}}>SHAPER FOR BUSINESS</Typography>
          <Typography variant='body2' sx={{textAlign:'center'}}>If you are a company and would like to attrac the bes talent this is your opportunity. Join Shaper Memberships for business and enjoy the benefits</Typography>
        </CardContent>
        <CardActions sx={{justifyContent:'center'}}>
          <Button variant='contained' sx={{maxWidth:'120px', borderRadius:'30px'}}>Button</Button>
        </CardActions>
      </Card>

      <Divider orientation='vertical'  sx={{bgcolor:'#757575'}}/>
      
      <Card sx={{maxWidth:300, display:'flex', flexDirection:'column', justifyContent:'center',alignItems:'center', }}>
        <CardContent>
          <Typography variant='h4' sx={{textAlign:'center'}}>SHAPER FOR BUSINESS</Typography>
          <Typography variant='body2' sx={{textAlign:'center'}}>If you are a company and would like to attrac the bes talent this is your opportunity. Join Shaper Memberships for business and enjoy the benefits</Typography>
        </CardContent>
        <CardActions sx={{justifyContent:'center'}}>
          <Button variant='contained' sx={{maxWidth:'120px', borderRadius:'30px'}}>Button</Button>
        </CardActions>
      </Card>

      <Divider orientation='vertical'  sx={{bgcolor:'#757575'}}/>
      
      <Card sx={{maxWidth:300, display:'flex', flexDirection:'column', justifyContent:'center',alignItems:'center', }}>
        <CardContent>
          <Typography variant='h4' sx={{textAlign:'center'}}>SHAPER FOR BUSINESS</Typography>
          <Typography variant='body2' sx={{textAlign:'center'}}>If you are a company and would like to attrac the bes talent this is your opportunity. Join Shaper Memberships for business and enjoy the benefits</Typography>
        </CardContent>
        <CardActions sx={{justifyContent:'center'}}>
          <Button variant='contained' sx={{maxWidth:'120px', borderRadius:'30px'}}>Button</Button>
        </CardActions>
      </Card>
    </Box>
  )
}


// --MIRAR EL COLOR DE FONDO, NO LO RENDERIZA--
function FullTimeCareer() {   
  return (
    <Card
      sx={{
        maxWidth: 450,
        marginTop: 2,
        borderRadius: "20px",
        background: bg,
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.3)",
      }}
    >
      <CardContent>
        <Typography gutterBottom variant="h5">
          Full-time Career
        </Typography>
        <Typography variant="body2">
          Our full-time career is designed to fully support you and guide you
          through a detailed process that will give you all the answers you are
          looking for to be the best in your new profession.
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography>80 /monthly hours</Typography>
        <Button
          variant="contained"
          sx={{ maxWidth: "120px", borderRadius: "30px" }}
        >
          Button
        </Button>
      </CardActions>
    </Card>
  );
}



function ShaperFor1() {
  return (
    <Card 
      sx={{
        maxWidth:300, 
        marginTop:2, 
        display:'flex', 
        flexDirection:'column', 
        justifyContent:'center', 
        alignItems:'center', 
        borderRadius:'20px', 
        boxShadow:'3px 0 0  rgba(0, 0, 0, 0.3)'
      }}
    >
      <CardContent>
        <Typography variant='h4' sx={{textAlign:'center'}}>SHAPER FOR BUSINESS</Typography>
        <Typography variant='body2' sx={{textAlign:'center'}}>If you are a company and would like to attrac the bes talent this is your opportunity. Join Shaper Memberships for business and enjoy the benefits</Typography>
      </CardContent>
      <CardActions sx={{justifyContent:'center'}}>
      <Button variant='contained' sx={{maxWidth:'120px', borderRadius:'30px'}}>Button</Button>
      </CardActions>
    </Card>
  )
}

function Services() {
  return (
    <Card sx={{borderRadius:'20px', maxWidth:'200px'}}>
      <CardHeader
        avatar={
          <SettingsIcon sx={{fontSize:40}}/>
        }
        title="Project Resource"
        titleTypographyProps={{fontSize:'20px', textAlign:'left'}}
      />
      <CardContent>
        <Typography variant='body1'>
          Some strange text I write to fill space
        </Typography>
      </CardContent>
    </Card>
  )
}

function CourseCardEx() {
  return (
    <Card sx={{ borderRadius: "20px", maxWidth: "130px", maxHeight: "130px" }}>
      <CardContent>
        <Typography variant="h5">Great Course</Typography>
        <Typography sx={{ fontSize: "10px" }}>
          Some strange text I write to fill space
        </Typography>
      </CardContent>
    </Card>
  );
}

function InterestCardEx() {
  return (
    <Card sx={{display:'flex', flexDirection:'row', justifyContent:'space-between',height:'120px', width:'60vw', borderRadius:'20px'}}>
      <CardMedia
        component='img'
        sx={{ width: 100 }}
        image=''
        alt='Image'
      />
      <CardContent sx={{padding:0, display:'flex',textAlign:'center', justifyContent:'center', alignItems:'center'}}>
        <Typography variant='h3'>
          Are you interested in <br/> looking at study careers?
        </Typography>
      </CardContent>
      <CardActions>
      <Button variant='contained' sx={{maxWidth:'120px', borderRadius:'30px'}}>Button</Button>
      </CardActions>
    </Card>
  )
}


function Certified() {
  return (
    <Card sx={{width:'180px', height:'300px', borderRadius:'20px', display:'flex', flexDirection:'column', justifyContent:'space-evenly', alignItems:'center', textAlign:'left'}}>
        <Typography variant='h6' sx={{margin: 2}}>Certified MicroDegree for UX/UI Designer</Typography>
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
    </Card>
  )
}

function EventCardEx() {
  return (
    <Card sx={{display:'flex', flexDirection:'row', width:'500px', borderRadius:'20px'}}>
      <Box width='128px' display='flex' justifyContent='center' bgcolor='lightblue'>
        <CardContent>
          <Typography variant='h3'>
            09
          </Typography>
          <Typography variant='h5'>
            sep
          </Typography>
        </CardContent>
      </Box>
      <Box sx={{ml:'10px', mt:'10px'}}>
        <Typography variant='h4'>
          Evento a Desarrolarse
        </Typography>
        <Typography variant='body1'>
          Descripcion del evento que es va a estar dando
        </Typography>
      </Box>
    </Card>
  )
}

function CharacterCardEx() {
  return (
    <Card  sx={{borderRadius:'20px',width:'900px',flexDirection:'row',display:'flex', height:'200px', justifyContent:'space-evenly'}}>
      {/* <CardMedia
        component='img'
        sx={{ width: 200 }}
        image=''
        alt='Image'
      /> */}
      <AccountBoxIcon sx={{width:'100px'}}/>
      <CardContent sx={{display:'flex', flexDirection:'column'}}>
        <Typography variant='h4'>
          Saludo del personaje
        </Typography>
        <Typography variant='h4'>
          Nombre del Personaje
        </Typography>
        <Typography variant='body1' >
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
        has been the industrys standard dummy text ever since the 1500s, when an unknown printer 
        took a galley of type and scrambled it to make a type specimen book. It has survived not
        only five centuries, but also the leap into electronic
        </Typography>
      </CardContent>

    </Card>
  )
}

export {IntroCard, FullTimeCareer, ShaperFor1, Services, CourseCardEx, InterestCardEx, Certified, EventCardEx, CharacterCardEx};