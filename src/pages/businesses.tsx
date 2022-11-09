import {
  CreditCardOutlined,
  PersonSearchOutlined,
  SettingsOutlined,
  StarBorderRounded,
  TimelineOutlined,
  TrendingDownRounded,
} from "@mui/icons-material";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Head from "next/head";
import Image from "next/image";
import Boy from "../../public/assets/png/businesses/boy.png";
import Boy2 from "../../public/assets/png/businesses/boy2.png";
import Pc from "../../public/assets/png/businesses/pc.png";
import Woman from "../../public/assets/png/businesses/women.png";
import { Footer } from "../controller/components/surfaces/Footer/Footer";
import { TopAppBar } from "../controller/components/surfaces/TopAppBar/TopAppBar";

const Businesses = () => {
  return (
    <div>
      <Head>
        <title>Shaper - Businesses</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
      <Box
        component="main"
        sx={{
          background: "linear-gradient(180deg, #050E3F 0%, #A54CDB 100%);",
        }}
      >
        <TopAppBar bgColor="none" />
        <Box
          display="flex"
          justifyContent="center"
          pt="10%"
          alignItems="center"
          pb="10%"
          flexWrap={{ mobile: "wrap-reverse" }}
          m={{ mobile: "0 10%" }}
        >
          <Box display="flex" flexDirection="column">
            <Typography variant="h6" color="secondary" fontWeight="bold">
              COMPANIES
            </Typography>
            <Typography variant="h5" color="white" fontWeight="bold">
              We help clients attract, hire, and
              <br /> retain best in-class candidates
              <br /> worldwide.
            </Typography>
            <Typography
              align="justify"
              sx={{ whiteSpace: "pre-line" }}
              color="white"
            >
              {
                "Refer your job directly to highly committed members or even juniors\n looking for their first job. Our team is constantly training its candidates\n to keep up with new  and technologies so they can meet your\n needs and be committed to your business. We will post a confidential\n project that meets your requirements to prove how hard our candidates\n work, and you can evaluate them in the process. This way you get a job\n well done and new candidates for your company."
              }
            </Typography>
          </Box>
          <Image src={Woman} alt="woman" />
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap={10}
          pb="10%"
          m={{ mobile: "0 10%" }}
        >
          <Box display="flex" alignItems="center" gap="10%">
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              bgcolor="rgba(255,255,255,.40)"
              borderRadius="15px"
              sx={{
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
              }}
            >
              <StarBorderRounded sx={{ fontSize: "150px", color: "#8BB5F3" }} />
            </Box>
            <Box maxWidth={400}>
              <Typography variant="h6" fontWeight="bold" color="white">
                Project Discovery
              </Typography>
              <Typography
                variant="body1"
                sx={{ whiteSpace: "pre-line" }}
                color="white"
              >
                {
                  "It's pretty simple. You just need to tell us what you want to develop and we will do everything to make your project successful."
                }
              </Typography>
            </Box>
          </Box>
          <Box display="flex" alignItems="center" gap="10%">
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              bgcolor="rgba(255,255,255,.40)"
              borderRadius="15px"
              sx={{
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
              }}
            >
              <SettingsOutlined sx={{ fontSize: "150px", color: "#D8A2F1" }} />
            </Box>
            <Box>
              <Typography variant="h6" color="white" fontWeight="bold">
                Project Manager
              </Typography>
              <Typography
                variant="body1"
                sx={{ whiteSpace: "pre-line" }}
                color="white"
                maxWidth={400}
              >
                {
                  "Now we'll assign you one of our project managers to assist you with your candidate search."
                }
              </Typography>
            </Box>
          </Box>
          <Box display="flex" alignItems="center" gap="10%">
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              bgcolor="rgba(255,255,255,.40)"
              borderRadius="15px"
              sx={{
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
              }}
            >
              <PersonSearchOutlined
                sx={{ fontSize: "150px", color: "#FFB8D1" }}
              />
            </Box>
            <Box maxWidth={400}>
              <Typography variant="h6" color="white" fontWeight="bold">
                Candidates Selection
              </Typography>
              <Typography
                variant="body1"
                sx={{ whiteSpace: "pre-line" }}
                color="white"
              >
                {
                  "You will discover a great deal of candidates with different expertises, it is up to you to choose the best options from your application module to turn ideas into action."
                }
              </Typography>
            </Box>
          </Box>
          <Box display="flex" alignItems="center" gap="10%">
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              bgcolor="rgba(255,255,255,.40)"
              borderRadius="15px"
              sx={{
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
              }}
            >
              <TimelineOutlined sx={{ fontSize: "150px", color: "#FFAD94" }} />
            </Box>
            <Box maxWidth={400}>
              <Typography variant="h6" color="white" fontWeight="bold">
                Measure Results
              </Typography>
              <Typography
                variant="body1"
                sx={{ whiteSpace: "pre-line" }}
                color="white"
              >
                {
                  "You will track your daily progress on our online academic campus so you do not have to waste time and money on real solutions."
                }
              </Typography>
            </Box>
          </Box>
          <Box display="flex" alignItems="center" gap="10%">
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              bgcolor="rgba(255,255,255,.40)"
              borderRadius="15px"
              sx={{
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
              }}
            >
              <CreditCardOutlined
                sx={{ fontSize: "150px", color: "#FFE3A2" }}
              />
            </Box>
            <Box maxWidth={400}>
              <Typography variant="h6" color="white" fontWeight="bold">
                Safe Payment
              </Typography>
              <Typography
                variant="body1"
                sx={{ whiteSpace: "pre-line" }}
                color="white"
              >
                {
                  "You do not have to pay us until your project is complete and satisfied with the results. If you are happy, so are we."
                }
              </Typography>
            </Box>
          </Box>
          <Box display="flex" alignItems="center" gap="10%">
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              bgcolor="rgba(255,255,255,.40)"
              borderRadius="15px"
              sx={{
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
              }}
            >
              <TrendingDownRounded
                sx={{ fontSize: "150px", color: "#ADD59C" }}
              />
            </Box>
            <Box maxWidth={400}>
              <Typography variant="h6" color="white" fontWeight="bold">
                Reduces Hiring Risk
              </Typography>
              <Typography
                variant="body1"
                sx={{ whiteSpace: "pre-line" }}
                color="white"
              >
                {
                  "Hiring young talent after they have developed projects with you, saves you time and money."
                }
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexWrap={{ mobile: "wrap-reverse" }}
          m={{ mobile: "0 10%" }}
        >
          <Box display="flex" flexDirection="column">
            <Typography variant="h6" color="white" fontWeight="bold">
              UNIVERSITIES
            </Typography>
            <Typography
              variant="h5"
              sx={{ whiteSpace: "pre-line" }}
              color="white"
            >
              {
                "We help clients attract, hire, and retain\n best in-class candidates worldwide."
              }
            </Typography>
            <Typography
              align="justify"
              sx={{ whiteSpace: "pre-line" }}
              color="white"
            >
              {
                "Keep your students up to date on the latest job openings and find\n them a new, exciting role. By joining our network, your students will\n be exposed to some of the best employers in the industry.\n They can showcase their skills in confidential projects to promote\n them to their potential new employer and start a new career path."
              }
            </Typography>
          </Box>
          <Image src={Boy} alt="boy" />
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap="10%"
          m={{ mobile: "0 10%", desktop: "10% 0" }}
        >
          <Box display="flex" flexDirection="column">
            <Typography
              variant="h5"
              sx={{ whiteSpace: "pre-line" }}
              color="white"
              fontWeight="bold"
            >
              {"Drive value and growth"}
            </Typography>
            <Typography
              align="justify"
              sx={{ whiteSpace: "pre-line" }}
              color="white"
            >
              {
                "Benefit from innovative teaching and credentials that\n employers value - all with the flexibility and value they\n need for their first practice."
              }
            </Typography>
          </Box>
          <Image src={Pc} alt="pc" height="300px" width="300px" />
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap="10%"
          m={{ mobile: "0 10%", desktop: "10% 0" }}
        >
          <Box display="flex" flexDirection="column">
            <Typography variant="h6" color="white" fontWeight="bold">
              MEMBERSHIP
            </Typography>
            <Typography
              variant="h5"
              sx={{ whiteSpace: "pre-line" }}
              color="white"
              fontWeight="bold"
            >
              {"FOR BUSINESS"}
            </Typography>
            <Typography
              align="justify"
              sx={{ whiteSpace: "pre-line" }}
              color="white"
            >
              {
                "Offers suppliers the opportunity to increase brand\n awareness and collaborate with a range of stakeholders\n to drive value and growth. Our membership offers\n several benefits for your business."
              }
            </Typography>
          </Box>
          <Image src={Boy2} alt="boy2" />
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          m={{ mobile: "0 10%", desktop: "10% 0" }}
        >
          <Box display="flex" flexDirection="column">
            <Typography variant="h6" color="white" fontWeight="bold">
              TESTIMONIAL
            </Typography>
            <Typography
              variant="h5"
              sx={{ whiteSpace: "pre-line" }}
              color="white"
            >
              {
                "You still hesitate about studying with us?\n Check what they say about us"
              }
            </Typography>
          </Box>
        </Box>
        <Footer />
      </Box>
    </div>
  );
};

export default Businesses;
