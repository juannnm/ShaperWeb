import { ExpandMore, Menu } from "@mui/icons-material/";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import { Button, IconButton } from "react-ui-controller";
import groupImage from "../../../public/assets/png/Academy/Group of Guys.png";
import { ShaperBlue } from "../../../public/assets/svg/logo";
import { NewFooter } from "../../controller/components/surfaces/Footer/newFooter";
import { NavigationRail } from "../../controller/components/surfaces/NavigationRail/NavigationRail";
import MoneyOffIcon from "@mui/icons-material/MoneyOff";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import PsychologyIcon from "@mui/icons-material/Psychology";
import ApprovalIcon from "@mui/icons-material/Approval";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import { CourseCard } from "../../controller/components/card/CourseCard";

const Courses: NextPage = () => {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div>
      <Head>
        <title>Shaper - Courses</title>
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
        <Box
          id="Intro"
          component="div"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          textAlign="center"
          p={{ mobile: "10%", desktop: "10%" }}
          gap={2}
        >
          <Box
            display="flex"
            flexDirection="column"
            gap={2}
            alignItems="center"
          >
            <Box>
              <Typography variant="h6" fontWeight="bold" color="secondary">
                COURSES
              </Typography>
              <Typography variant="h3" fontWeight="bold" color="primary">
                We&apos;re transforming education from inside-out
              </Typography>
              <Typography variant="body1" color="primary" mb="1%">
                You can watch every online course for free no strings-attached
              </Typography>
            </Box>
            <Button
              text="Start Now"
              type="button"
              variant="contained"
              padding={{ mobile: "16px 32px", laptop: "16px 48px" }}
            />
          </Box>
          <Box>
            <Image
              src={groupImage}
              alt="group"
              width="865.75"
              height="492.27"
            />
          </Box>
        </Box>
        <Box
          height="414px"
          width="900px"
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          m="0 auto"
          mb="150px"
          p="50px 50px"
          sx={{
            borderStyle: "solid",
            borderColor: "#050E3F",
            borderRadius: "20px",
          }}
        >
          <Box display="flex" flexDirection="column" justifyContent="space-evenly" width="40%" gap={2}>
            <Box display="flex" flexDirection="row">
              <MoneyOffIcon fontSize="large" />
              <Typography variant="body1" ml="10px">
                In Shaper Academy you can enjoy the best online courses wherever
                you are, without schedule.
              </Typography>
            </Box>
            <Box display="flex" flexDirection="row">
              <StarBorderIcon fontSize="large"/>
              <Typography variant="body1" ml="10px">
                We offer courses in different areas to let you optimize your
                skills with a top team of professionals.
              </Typography>
            </Box>
            <Box display="flex" flexDirection="row">
              <Diversity3Icon fontSize="large"/>
              <Typography variant="body1" ml="10px">
                Our community is made up of millions of users from all over the
                world who want to learn and share their skills.
              </Typography>
            </Box>
          </Box>
          <Box display="flex" flexDirection="column" justifyContent="space-evenly" width="40%" gap={2}>
            <Box display="flex" flexDirection="row">
              <PsychologyIcon fontSize="large"/>
              <Typography variant="body1" ml="10px">
                You will be able to learn the most useful methods and techniques
                on the market in high quality.
              </Typography>
            </Box>
            <Box display="flex" flexDirection="row">
              <ApprovalIcon fontSize="large"/>
              <Typography variant="body1" ml="10px">
                After completing the course, you can take the final exam and
                receive your certificate to prove your fitness level.
              </Typography>
            </Box>
            <Box display="flex" flexDirection="row">
              <HowToRegIcon fontSize="large"/>
              <Typography variant="body1" ml="10px">
                We carefully select the best professionals to ensure a
                world-class online learning experience.
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box ml="250px"><CourseCard/></Box>
        
        <NewFooter />
      </Box>
    </div>
  );
};

export default Courses;
