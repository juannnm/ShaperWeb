import { Box, Step, StepContent, StepLabel, Stepper, Typography } from "@mui/material";
import { Menu } from "@mui/icons-material";
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Button, IconButton } from "react-ui-controller";
import guyImage from "../../../public/assets/png/Academy/foto 1.png";
import jumpImage from "../../../public/assets/png/Academy/FOTOS.png";
import { CareerCard } from "../../controller/components/card/CareerCard";
import { CertifieCard } from "../../controller/components/card/CertifieCard";
import { NewFooter } from "../../controller/components/surfaces/Footer/newFooter";
import { NavigationRail } from "../../controller/components/surfaces/NavigationRail/NavigationRail";
import { ShaperBlue } from "../../../public/assets/svg/logo";
import { PathOrderCard } from "../../controller/components/card/PathOrderCard";
import { StaticStepper } from "../../controller/components/data-display/Stepper/Stepper";

const Careers: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Shaper - Carrers</title>
        <meta name="description" content="" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/assets/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Box>
        <Box sx={{ display: { mobile: "none", laptop: "block" } }}>
          <NavigationRail />
        </Box>
        <Box
          display={{ mobile: "flex", laptop: "none" }}
          p="20px"
          alignItems="center"
          gap={2}
        >
          <IconButton color="primary">
            <Menu fontSize="large" />
          </IconButton>
          <ShaperBlue style={{ fontSize: "80px", marginTop: "4px" }} />
        </Box>
        <Box
          id="Intro"
          component="div"
          display="flex"
          justifyContent="center"
          flexDirection="column"
          textAlign="center"
          pt={{ mobile: "0%", laptop: "5%" }}
          gap={2}
        >
          <Box>
            <Typography variant="h6" fontWeight="bold" color="secondary">
              CAREERS
            </Typography>
            <Typography variant="h4" fontWeight="bold" color="primary">
              Shaping a new reality for everyone.
            </Typography>
            <Typography
              variant="body1"
              color="primary"
              m="1px auto"
              mb="1%"
              width="27%"
            >
              You can change your life by investing in your growth through our
              Income Sharing Agreement (ISA). This system and your commitment
              will help us get you the job of your dreams.
            </Typography>
            <Button text="Apply" type="button" variant="contained" />
          </Box>
          <Box m={{ mobile: "0", laptop: "0 20%" }}>
            <Image src={jumpImage} alt="group" width="1066" height="397" />
          </Box>
        </Box>
        <Box
          id="howItWorks"
          component="div"
          display="flex"
          justifyContent="center"
          flexDirection="column"
          textAlign="center"
        >
          <Box>
            <Typography>STUDY WITH US</Typography>
            <Typography>How it works</Typography>
          </Box>
          <Box>
            <Box>
              icon
              <Typography>No upfront cost</Typography>
            </Box>
            <Typography>Pay only if you make $700/mth or more</Typography>
            <Box>
              icon
              <Typography>No catches or extra fees</Typography>
            </Box>
            <Typography>The terms of repayment are simple and clear</Typography>
            <Box>
              icon
              <Typography>We find you a job</Typography>
            </Box>
            <Typography>Only then you pay us back</Typography>
          </Box>
        </Box>
        <Box display="flex" flexDirection="column" justifyContent="center" alignContent="center" mt="40px" ml="550px">
            <Box ml="10%">
            <Typography variant="h6"
              mb="10px"
              fontWeight="bold"
              color="secondary">REALLY SIMPLE</Typography>
            <Typography variant="h4"
              fontWeight="bold"
              color="primary"
              mb="20px"
              >How to apply</Typography>
              </Box>
          <Box marginRight="45px">
          <StaticStepper />
          </Box>
        </Box>

        <Box
          id="careerTypes"
          component="div"
          m={{ mobile: "100px 50px", laptop: "200px 0" }}
          textAlign="center"
        >
          <Typography
            variant="h6"
            mb="10px"
            fontWeight="bold"
            color="secondary"
          >
            GET READY
          </Typography>
          <Typography
            variant="h4"
            fontWeight="bold"
            color="primary"
            width="40%"
            m="0 auto"
          >
            You can measure your needs over time and choose between 2 options.
          </Typography>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="center"
            gap={4}
            m="35px 0px"
            flexWrap="wrap"
          >
            <CareerCard
              title="Part-time Career"
              description="You can learn remotely with our team of experts and even complete assignments after work with our online academic campus."
              hours="40"
            />
            <CareerCard
              title="Full-time Career"
              description="Our full-time career is designed to fully support you and guide you through a detailed process to be the best in your new profession."
              hours="80"
            />
          </Box>
          <Typography variant="h6" textAlign="center" mt="5%" color="primary">
            Once you have chosen your specific framework, you can now apply and
            our team will reach you.
          </Typography>
        </Box>
        <Box textAlign="center" mb="10%">
          <Typography variant="h5" fontWeight="bold" color="secondary">
            ALL CAREERS
          </Typography>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="center"
            gap={{ mobile: 1, laptop: 4 }}
            mt="2%"
          >
            <CertifieCard />
            <CertifieCard />
            <CertifieCard />
            <CertifieCard />
          </Box>
        </Box>
        <Box
          display="flex"
          flexDirection={{ mobile: "column-reverse", laptop: "row" }}
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap-reverse"
          m={{ mobile: "10% 10px" }}
        >
          <Box width={{ mobile: "100%", laptop: "30%" }}>
            <Typography variant="h5" fontWeight="bold" color="secondary">
              OUR MEMBERSHIP
            </Typography>
            <Typography variant="h4" color="primary">
              We help our candidates in finding new and exciting jobs
            </Typography>
            <Typography color="#737373" variant="body1" mb="2%">
              The Shaper program offers you the opportunity to work with top
              companies. You can be tested by multiple employers, as many as you
              have time to prove your skills. Our membership is designed to help
              you grow and succeed.
            </Typography>
            <Button
              text="Suscribe"
              type="button"
              variant="contained"
              padding="16px 48px"
            />
          </Box>
          <Image src={guyImage} alt="guy" height="470px" width="511.5px" />
        </Box>
        <NewFooter />
      </Box>
    </div>
  );
};

export default Careers;
