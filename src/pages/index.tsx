import { Menu } from "@mui/icons-material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Box, Typography } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Button, IconButton } from "react-ui-controller";
import Arlo from "../../public/assets/png/Home/arlo.png";
import Charlie from "../../public/assets/png/Home/charlie.png";
import Ella from "../../public/assets/png/Home/ella.png";
import MemberImage from "../../public/assets/png/Home/foto 3.png";
import Characters from "../../public/assets/png/Home/imagen header.png";
import TabletImage from "../../public/assets/png/Home/imagenvideos.png";
import Oliver from "../../public/assets/png/Home/oliver.png";
import {
  GoogleLogo,
  MicrosoftLogo,
  SpotifyLogo,
  TeslaLogo,
  TikTokLogo,
} from "../../public/assets/svg/Home/Clients";
import { ShaperBlue } from "../../public/assets/svg/logo";
import { CareerCard } from "../controller/components/card/CareerCard";
import { PathCard } from "../controller/components/card/PathCard";
import { PathOrderCard } from "../controller/components/card/PathOrderCard";
import { ServiceCard } from "../controller/components/card/ServiceCard";
import { ShaperFor } from "../controller/components/card/ShaperFor";
import { ShaperFor_v2 } from "../controller/components/card/Shaperfor_v2";
import { EventList } from "../controller/components/data-display/EventList/EventList";
import { DisplayAccordion } from "../controller/components/surfaces/Accordion/Accordion";
import { Footer } from "../controller/components/surfaces/Footer/Footer";
import { NewFooter } from "../controller/components/surfaces/Footer/newFooter";
import { NavigationDrawer } from "../controller/components/surfaces/NavigationDrawer/NavigationDrawer";
import { NavigationRail } from "../controller/components/surfaces/NavigationRail/NavigationRail";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Shaper</title>
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
      <Box component="main">
        <Box sx={{ display: { mobile: "none", laptop: "block" } }}>
          <NavigationRail />
        </Box>
        <Box display={{ mobile: "flex", laptop: "none" }} p="20px">
          {/* <IconButton color="primary">
            <Menu fontSize="large" />
          </IconButton>
          <ShaperBlue style={{ fontSize: "80px", marginTop: "4px" }} /> */}
          <NavigationDrawer />
        </Box>
        <Box ml={{ mobile: 0, laptop: "100px" }}>
          <Box
            sx={{
              minHeight: "410px",
              position: "relative",
              borderRadius: "20px",
              background:
                "linear-gradient(45deg,#F17C58, #E94584, #24AADB , #27DBB1,#FFDC18, #FF3706)",
              backgroundSize: "600% 100%",
              animation: "gradient 16s linear infinite",
              animationDirection: "alternate",
              "@keyframes gradient": {
                "0%": { backgroundPosition: "0%" },
                "100%": { backgroundPosition: "100%" },
              },
              margin: "0 5%",
            }}
          >
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              gap={2}
              flexDirection="column"
              padding={{ mobile: "50% 2%", laptop: "10%" }}
            >
              <Box display="flex" flexDirection="column" textAlign="center">
                <Typography variant="h2" color="white" fontWeight="bold">
                  EMPOWER YOUR CAREER
                </Typography>
                <Typography variant="body1" color="white" textAlign="center">
                  {" "}
                  Unlock skills, become known and get hired by top companies.
                </Typography>
              </Box>
              <Button text="Get started" type="button" variant="contained" />
            </Box>
          </Box>
          <Box
            component="div"
            display="flex"
            flexDirection={{ mobile: "column", laptop: "row" }}
            justifyContent="center"
            alignContent="center"
            gap={7}
            mt="10%"
            ml={{ mobile: "14.36%", laptop: "2%" }}
          >
            <PathCard
              title="Get started at College"
              content="Watch our free courses and become an expert with our career plans."
            />
            <PathCard
              title="Become a member"
              content="Prove your skills and qualify for the job search that suits you."
            />
            <PathCard
              title="We help companies"
              content="To obtain the best qualified talent in the market through our hiring platform."
            />
          </Box>
          <Box component="div" display='flex' width="100%" justifyContent="center" >
            <DisplayAccordion/>
          </Box>
          <Box
            component="div"
            id="options"
            display="flex"
            flexDirection="row"
            justifyContent="center"
            flexWrap="wrap"
            gap={10}
            mb="10%"
          >
              
          </Box>

          <Box
            component="div"
            id="options"
            display="flex"
            flexDirection="row"
            justifyContent="center"
            flexWrap="wrap"
            gap={10}
            mb="10%"
          >
            <ShaperFor_v2
              bgcolor="#61BC58"
              bgtext="Shaper for"
              bgtextBold="business"
              content="If you are a company and would like to attract the best talent, this is your opportunity to enjoy the benefits."
            />
            <ShaperFor_v2
              bgcolor="#FF6EA3"
              bgtext="Shaper for"
              bgtextBold="universities"
              content="Are you an educational institution and want to promote your students? Shaper for universities is your best option."
            />
          </Box>
          <Box
            component="div"
            id="team"
            display="flex"
            flexDirection="column"
            flexWrap="wrap"
            justifyContent="center"
            m={{ mobile: "10% 25px", laptop: "0 0  10% 0" }}
            gap={{ mobile: 2, laptop: 4 }}
          >
            <Box textAlign="left" ml="25%">
              <Typography variant="h6" color="secondary">
                TEAM WORK
              </Typography>
              <Typography variant="h5" fontWeight="bold" color="primary">
                Meet our staff.
              </Typography>
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              flexWrap="wrap"
              gap={5}
              justifyContent="center"
            >
              <Box
                height="383px"
                width="183px"
                bgcolor="#F9FAFA"
                borderRadius="20px"
              >
                <Image src={Ella} alt="Ella" width="183px" height="270px" />
                <Typography
                  variant="body1"
                  fontWeight="bold"
                  color="primary"
                  ml="10px"
                >
                  Ella
                </Typography>
                <Typography variant="body1" color="#737373" ml="10px">
                  Academy
                </Typography>
              </Box>
              <Box
                height="383px"
                width="183px"
                bgcolor="#F9FAFA"
                borderRadius="20px"
              >
                <Image src={Oliver} alt="Ella" width="183px" height="270px" />
                <Typography
                  variant="body1"
                  fontWeight="bold"
                  color="primary"
                  ml="10px"
                >
                  Oliver
                </Typography>
                <Typography variant="body1" color="#737373" ml="10px">
                  Community
                </Typography>
              </Box>
              <Box
                height="383px"
                width="183px"
                bgcolor="#F9FAFA"
                borderRadius="20px"
              >
                <Image src={Arlo} alt="Ella" width="183px" height="270px" />
                <Typography
                  variant="body1"
                  fontWeight="bold"
                  color="primary"
                  ml="10px"
                >
                  Arlo
                </Typography>
                <Typography variant="body1" color="#737373" ml="10px">
                  Careers
                </Typography>
              </Box>
              <Box
                height="383px"
                width="183px"
                bgcolor="#F9FAFA"
                borderRadius="20px"
              >
                <Image src={Charlie} alt="Ella" width="183px" height="270px" />
                <Typography
                  variant="body1"
                  fontWeight="bold"
                  color="primary"
                  ml="10px"
                >
                  Charlie
                </Typography>
                <Typography variant="body1" color="#737373" ml="10px">
                  Guide
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <NewFooter />
      </Box>
    </div>
  );
};

export default Home;
