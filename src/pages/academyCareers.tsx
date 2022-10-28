import { TopAppBar } from "../controller/components/surfaces/TopAppBar/TopAppBar";
import { Footer } from "../controller/components/surfaces/Footer/Footer";
import { NextPage } from "next";
import { Box, Typography } from "@mui/material";
import { Button } from "react-ui-controller";
import Image from "next/image";
import jumpImage from "../../public/assets/png/Academy/FOTOS.png";
import cellphoneImage from "../../public/assets/png/Academy/imagen.png";
import { CareerCard } from "../controller/components/card/CareerCard";

const Careers: NextPage = () => {
  return (
    <Box>
      <TopAppBar />
      <Box
        id="Intro"
        component="div"
        justifyContent="center"
        textAlign="center"
        m="200px"
      >
        <Box>
          <Typography variant="h6" fontWeight="bold">
            CAREERS
          </Typography>
          <Typography variant="h4" fontWeight="bold">
            Shaping a new reality for everyone
          </Typography>
          <Typography>Start a new career and get your dream job</Typography>
          <Button text="Contact our team" type="button" variant="contained" />
        </Box>
        <Image src={jumpImage} alt="group" width="1066" height="397" />
      </Box>
      <Box
        id="characteristic"
        component="div"
        display="flex"
        flexDirection="row"
        justifyContent="center"
      >
        <Image
          src={cellphoneImage}
          alt="cellphone"
          width="504.5"
          height="297"
        />
        <Box>
          <ul>
            <li>
              This program will allow you to optimize
              <br /> your skills, both professionally and
              <br /> personally.
            </li>
            <li>
              Our team of experts will help you define
              <br /> your career goals and improve your skills
              <br /> to help you succeed in your job search.
            </li>
            <li>
              Shaper program is designed to help you
              <br /> make decisions and achieve results.
            </li>
          </ul>
        </Box>
      </Box>
      <Box id="careerTypes" component="div" m="200px" textAlign="center">
        <Typography variant='h6' mb='10px' fontWeight='bold'>OUR PROCESS IS REALLY SIMPLE</Typography>
        <Typography variant='h4' fontWeight='bold'>
          You can measure your needs over time
          <br /> and choose between 2 options
        </Typography>
        <Box display='flex' flexDirection='row' justifyContent='space-evenly' mt='35px'>
          <CareerCard/>
          <CareerCard/>
        </Box>
        <Typography variant='h6' textAlign='center' m='25px'> Once you have chosen your specific framework, you<br/> can now apply and our team will reach you</Typography>
      </Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
      <Footer />
    </Box>
  );
};

export default Careers;
