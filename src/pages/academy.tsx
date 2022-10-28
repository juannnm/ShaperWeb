import { Footer } from "../controller/components/surfaces/Footer/Footer";
import { TopAppBar } from "../controller/components/surfaces/TopAppBar/TopAppBar";
import { Box, Typography } from "@mui/material";
import type { NextPage } from 'next';
import { Button } from "react-ui-controller";
import Image from "next/image";

const Academy: NextPage = () => {
  return (
      <Box component='main'>
      <TopAppBar />
      <Box>
        <Typography variant='h6' color='violet'></Typography>
        <Typography variant='h4'></Typography>
        <Typography></Typography>
        <Button text="Start Now"/>
        <Image/>
      </Box>
      <Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
      </Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
      <Footer/>
      </Box>
  )
}

export default Academy