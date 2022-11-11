import { Menu } from "@mui/icons-material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Box, Divider, Typography } from "@mui/material";
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
import { Footer } from "../controller/components/surfaces/Footer/Footer";
import { NewFooter } from "../controller/components/surfaces/Footer/newFooter";
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
              gap="10%"
              flexDirection={{ mobile: "column", laptop: "row" }}
              padding={{ mobile: "10% 2%", laptop: "10%" }}
            >
              <Box display="flex" flexDirection="column" textAlign="center">
                <Typography variant="h2" color="white" fontWeight="bold">
                  EMPOWER YOUR CAREER
                </Typography>
                <Typography variant="body1" color="white" textAlign="center">
                  {" "}
                  Unlock skills, become known and get hired by top companies.
                </Typography>
                <Button text="Get Started"/>
              </Box>
              {/* <Box>
                                <Image src={Characters} alt="group" height="504.5px" width="621.5px" />
                            </Box> */}
            </Box>
          </Box>
          <Box
            component="div"
            display="flex"
            flexDirection="row"
            justifyContent="center"
            gap={7}
            mt="10%"
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
          <Box
            component="div"
            id="Companies"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            mt="10%"
            m="10% auto 0 auto"
            width="80%"
          >
            <Typography variant="h3" color="primary" alignSelf="left" ml="6%">
              Helping clients worlwide
            </Typography>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-evenly"
              alignContent="center"
              flexWrap="wrap"
              gap={{ mobile: 1, laptop: 5 }}
              height="80px"
            >
              <MicrosoftLogo style={{ fontSize: "120px" }} />
              <GoogleLogo style={{ fontSize: "120px" }} />
              <SpotifyLogo style={{ fontSize: "120px" }} />
              <TeslaLogo style={{ fontSize: "120px" }} />
              <TikTokLogo style={{ fontSize: "120px" }} />
            </Box>
          </Box>{" "}
          {/* <Box
                        component="section"
                        id="paths"
                        mt="10%"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        flexDirection={{ mobile: 'column', laptop: 'row' }}
                    >
                        <Box
                            display="flex"
                            flexDirection={{ mobile: 'column', laptop: 'row' }}
                            borderRadius="20px"
                            justifyContent="center"
                            flexWrap="wrap"
                            sx={{
                                background: 'linear-gradient(90deg, #9BBECF40, #DAAFE840, #FEBEC040, #FFC49E40, #FFC49E40)',
                                width: 'fit-content',
                            }}
                        >
                            <ShaperFor
                                title="get started at"
                                titleBold={{ text: 'college', color: 'blue' }}
                                description={{
                                    text: 'Watch our free courses and become an expert with our career plans.',
                                    color: '#737373',
                                }}
                                background="transparent"
                                buttonColor="primary"
                                borderRadius="0px"
                            />
                            <Divider orientation="vertical" flexItem variant="middle" />
                            <ShaperFor
                                title="become a"
                                titleBold={{ text: 'member', color: 'red' }}
                                description={{
                                    text: 'Prove your skills by completing your profile and qualify for the job search that suits you.',
                                    color: '#737373',
                                }}
                                background="transparent"
                                buttonColor="primary"
                                borderRadius="0px"
                            />
                            <Divider orientation="vertical" flexItem variant="middle" />
                            <ShaperFor
                                title="we help"
                                titleBold={{ text: 'companies', color: 'purple' }}
                                description={{
                                    text: 'To obtain the best qualified talent in the market through our hiring platform.',
                                    color: '#737373',
                                }}
                                background="transparent"
                                buttonColor="primary"
                                borderRadius="0px"
                            />
                        </Box>
                    </Box> */}
          {/* <Box component="section" id="events" display="flex" flexDirection="column" justifyContent="center" alignItems="center" mt="10%">
                        <Typography variant="h6" sx={{ fontWeight: 'bold' }} color="secondary">
                            Events
                        </Typography>
                        <Typography variant="h3" sx={{ fontWeight: 'bold' }} color="primary">
                            Community meetings
                        </Typography>
                        <Box>
                            <EventList />
                        </Box>
                    </Box> */}
          <Box
            component="div"
            id="learn"
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap={2}
            m={{ mobile: "15px", laptop: "0px" }}
          >
            <Box
              display="flex"
              flexDirection={{ mobile: "column", laptop: "row" }}
              alignItems="center"
              justifyContent="center"
              textAlign="center"
              mt="10%"
              ml="15%"
              gap={2}
            >
              <Box display="flex" flexDirection="column">
                <Typography
                  variant="h6"
                  color="secondary"
                  fontWeight="bold"
                  align="left"
                >
                  LEARN AND GROW
                </Typography>
                <Typography
                  variant="h4"
                  fontWeight="bold"
                  color="primary"
                  align="left"
                  width="80%"
                >
                  We invest in your future.
                </Typography>
                <Typography
                  fontFamily="RobotoRegular"
                  fontSize="22px"
                  color="#737373"
                  width="80%"
                  align="justify"
                >
                  Our team of experts will help you define your career goals and
                  improve your skills so you can succeed in your job search.
                </Typography>
              </Box>
            </Box>
            <Box
              component="div"
              display="flex"
              flexDirection="row"
              justifyContent="center"
              gap={7}
              mt="2%"
            >
              <PathOrderCard
                bgtext="01"
                title="We love teaching remotely"
                content="All you need is a computer with Internet access"
              />
              <PathOrderCard
                bgtext="02"
                title="Knowledge into practice"
                content="We provide you with the most sought-after skills in a high-demand world."
              />
              <PathOrderCard
                bgtext="03"
                title="You don't have to pay us now"
                content="Just learn and we will help you find your dream job, only then you will pay us back."
              />
            </Box>
          </Box>
          <Box
            component="div"
            id="how-it-work"
            display="flex"
            flexDirection="column"
            mt="10%"
          >
            <Box
              textAlign="left"
              display="flex"
              flexDirection="column"
              alignItems="left"
              ml="24%"
            >
              <Typography variant="h6" fontWeight="bold" color="secondary">
                HOW IT WORKS
              </Typography>
              <Typography
                variant="h4"
                fontWeight="bold"
                color="primary"
                width={{ mobile: "100%", laptop: "50%" }}
              >
                Highest standards made just for you.
              </Typography>
              <Typography
                fontFamily="RobotoRegular"
                fontSize="22px"
                variant="body1"
                color="#737373"
              >
                You can measure your needs over time and choose between 2
                options.Full-time and Part-time.
              </Typography>
            </Box>
            <Box
              display="flex"
              flexDirection={{ mobile: "column", laptop: "row" }}
              justifyContent="center"
              mt="5%"
              gap={{ mobile: 4, laptop: "5%" }}
            >
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="space-evenly"
                alignItems="center"
                gap={{ mobile: 2, laptop: 0 }}
              >
                <Box
                  display="flex"
                  flexDirection="row"
                  alignItems="center"
                  minWidth={200}
                  gap={2}
                >
                  <CheckCircleIcon color="secondary" />
                  <Typography variant="h6" color="primary">
                    100% Remote
                  </Typography>
                </Box>
                <Box
                  display="flex"
                  flexDirection="row"
                  alignItems="center"
                  minWidth={200}
                  gap={2}
                >
                  <CheckCircleIcon color="secondary" />
                  <Typography variant="h6" color="primary">
                    1:1 Support
                  </Typography>
                </Box>
                <Box
                  display="flex"
                  flexDirection="row"
                  alignItems="center"
                  minWidth={200}
                  gap={2}
                >
                  <CheckCircleIcon color="secondary" />
                  <Typography variant="h6" color="primary">
                    Community
                  </Typography>
                </Box>
              </Box>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
                gap={{ mobile: 2, laptop: 5 }}
              >
                <Box display="flex" justifyContent="space-evenly" width="100%">
                  <Button
                    type="button"
                    variant="contained"
                    color="secondary"
                    text="Full-time Career"
                  />
                  <Button
                    type="button"
                    variant="contained"
                    color="secondary"
                    text="Part-time Career"
                  />
                </Box>
                <CareerCard
                  title="Full-time Career"
                  description="Our full-time career is designed to fully support you and guide you through a detailed process to be the best in your new profession."
                  hours="80"
                  background="linear-gradient(90deg, #9BBECF40, #DAAFE840, #FEBEC040, #FFC49E40, #FFC49E40)"
                />
              </Box>
            </Box>
          </Box>
          <Box
            component="div"
            id="watch"
            display="flex"
            flexDirection={{ mobile: "column", laptop: "row" }}
            justifyContent="center"
            mt="10%"
            p="0 10px"
            gap={2}
          >
            <Box width={{ md: "500px", laptop: "500px" }}>
              <Image
                src={TabletImage}
                alt="image"
                width="436px"
                height="271px"
              />
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="space-evenly"
              mt="0"
              width={{ mobile: "100%", laptop: "30%" }}
              gap={2}
            >
              <Box>
                <Typography variant="h5" fontWeight="bold" color="secondary">
                  WATCH AND LEARN
                </Typography>
                <Typography
                  variant="h4"
                  fontWeight="bold"
                  color="primary"
                  width={{ mobile: "100%", laptop: "70%" }}
                >
                  Enjoy our online courses for free
                </Typography>
                <Typography
                  variant="body1"
                  color="#737373"
                  width={{ mobile: "100%", laptop: "70%" }}
                >
                  Now you can learn with the best experts in the sector without
                  schedule, no strings-attached.
                </Typography>
              </Box>
              <Button
                text="Go to courses"
                type="button"
                variant="contained"
                padding="16px 48px"
              />
            </Box>
          </Box>
          {/* <Box component="div" id="services" display="flex" flexDirection="column" gap={5} mt="10%" alignItems="center">
                    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" textAlign="center">
                        <Typography variant="h5" fontWeight="bold" color="secondary">
                            THE SERVICES WE OFFERS
                        </Typography>
                        <Typography variant="h3" fontWeight="bold" color="primary" width="50%">
                            Our business perception and exceptional experience gives us an edge over our competitors.
                        </Typography>
                        <Typography variant="h6" color="primary">
                            We analyze, explore, create and deliver.
                        </Typography>
                    </Box>
                    <Box display="flex" flexDirection="row" justifyContent="center" flexWrap="wrap" gap={2} rowGap={3}>
                        <ServiceCard
                            title="ON-Demand"
                            description="Get instant access to qualified talent on a permanent or contract basis and ensure your success in the workplace."
                            background="#8BB5F3"
                            icon={<Cast color="primary" sx={{ fontSize: { mobile: '25px', laptop: '45px' } }} />}
                        />
                        <ServiceCard
                            title={'Project\nResource'}
                            description="We offer teams of interim experts to assist businesses in delivering sophisticated digital solutions."
                            background="#ADD59C"
                            icon={<Settings color="primary" sx={{ fontSize: { mobile: '25px', laptop: '45px' } }} />}
                        />
                        <ServiceCard
                            title="Bootcamp"
                            description="We make sure you understand all facets of modern development techniques and technologies through our program."
                            icon={<Groups color="primary" sx={{ fontSize: { mobile: '25px', laptop: '45px' } }} />}
                            background="#FFAD94"
                        />
                        <ServiceCard
                            title="Career"
                            description=" Our methodology ensures that we match candidates with opportunities that meet hiring needs and company culture. "
                            icon={<Stairs color="primary" sx={{ fontSize: { mobile: '25px', laptop: '45px' } }} />}
                            background="#FFB8D1"
                        />
                    </Box>
                </Box> */}
          <Box
            component="div"
            id="membership"
            display="flex"
            flexDirection={{ mobile: "column-reverse", laptop: "row" }}
            justifyContent="center"
            m="10% 0"
            ml="5%"
          >
            <Box
              textAlign={{ mobile: "center", laptop: "left" }}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              gap="5%"
              alignItems="center"
            >
              <Box>
                <Typography variant="h5"  color="secondary">
                  GET HIRED
                </Typography>
                <Typography variant="h4" fontWeight="bold" color="primary">
                  New and exciting jobs.
                </Typography>
                <Typography
                  variant="body1"
                  color="#737373"
                  width={{ mobile: "100%", laptop: "45%" }}
                >
                  Our platform gives you the opportunity to work with top
                  companies. Prove your skills and get hired.
                </Typography>
                <Button
                text="Join us"
                type="button"
                variant="contained"
                padding="16px 32px"
              />
              </Box>
             
            </Box>
            <Box width={{ laptop: "500px" }}>
              <Image
                src={MemberImage}
                alt="Member"
                width="460px"
                height="411px"
              />
            </Box>
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
              <Typography
                variant="h5"
                fontWeight="bold"
                color="primary"
              >
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
              <Box height="383px" width="183px" bgcolor="#F9FAFA" borderRadius="20px">
                <Image
                  src={Ella}
                  alt="Ella"
                  width="183px"
                  height="270px"
                />
                <Typography variant="body1" fontWeight="bold" color="primary">
                  Ella
                </Typography>
                <Typography variant="body1" color="#737373">Academy</Typography>
              </Box>
                <Box height="383px" width="183px" bgcolor="#F9FAFA" borderRadius="20px">
                  <Image
                    src={Oliver}
                    alt="Ella"
                    width="183px"
                    height="270px"
                  />
                  <Typography fontWeight="bold" color="primary">
                    Oliver
                  </Typography>
                  <Typography color="#737373">Community</Typography>
              </Box>
              <Box height="383px" width="183px" bgcolor="#F9FAFA" borderRadius="20px">
                <Image
                  src={Arlo}
                  alt="Ella"
                  width="183px"
                  height="270px"
                />
                <Typography fontWeight="bold" color="primary">
                  Arlo
                </Typography>
                <Typography color="#737373">Careers</Typography>
              </Box>
              <Box height="383px" width="183px" bgcolor="#F9FAFA" borderRadius="20px">
                <Image
                  src={Charlie}
                  alt="Ella"
                  width="183px"
                  height="270px"
                />
                <Typography fontWeight="bold" color="primary">
                  Charlie
                </Typography>
                <Typography color="#737373">Guide</Typography>
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
