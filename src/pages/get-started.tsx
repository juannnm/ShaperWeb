import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Head from "next/head";
import Image from "next/image";
import { Button, IconButton } from "react-ui-controller";
import { ShaperFor } from "../controller/components/card/ShaperFor";
import { Footer } from "../controller/components/surfaces/Footer/Footer";
import { TopAppBar } from "../controller/components/surfaces/TopAppBar/TopAppBar";
import PeopleMembership from "../../public/assets/png/membership/people.png";
import GirlMembership from "../../public/assets/png/membership/girl.png";
import groupImage from "../../public/assets/png/Membership/group.png";
import graphics from "../../public/assets/png/Membership/Frame 294.png";
import Apply from "../../public/assets/png/Membership/apply.png";
import graphics2 from "../../public/assets/png/Membership/Frame 255.png";
import frame5Image from "../../public/assets/png/Membership/Frame 1171274857.png";
import frame6Image from "../../public/assets/png/Membership/6.png";
import { Carrousel } from "react-ui-controller";
import { ArrowBack } from "@mui/icons-material";

const Membership = () => {
  const cards = [
    <Box
      display="flex"
      justifyContent="center"
      p="5%"
      bgcolor="#050E3F"
      key="member"
    >
      <Box display="flex" flexDirection={{ mobile: "column", laptop: "row" }}>
        <Box mt={{mobile:"10%"}}>
          <Image src={groupImage} alt="group" height="300px" width="400px" />
        </Box>
        <Box display="flex" flexDirection="column" ml="150px" mt="74px" m={{mobile:"30px", laptop:"74px 0 0 150px"}}>
          <Typography variant="h6" color="white" fontWeight="bold">
            1. BECOME A MEMBER OF OUR COMMUNITY
          </Typography>
          <Typography variant="body1" align="justify" color="white">
            Shaper testers can participate in real projects with real
            <br /> companies and get their dream job. With the help of our
            <br />
            leadership team, our candidates get better day by day
            <br /> while receiving competitive offers to grow fast and join
            <br /> a new company to give their best.
          </Typography>
        </Box>
      </Box>
    </Box>,
    <Box
      display="flex"
      justifyContent="center"
      p="5%"
      bgcolor="#050E3F"
      key="senior"
    >
      <Box display="flex" flexDirection={{ mobile: "column", laptop: "row" }}>
        <Box mt={{mobile:"10%"}}>
          <Image src={graphics} alt="apply" height="300px" width="500px" />
        </Box>
        <Box display="flex" flexDirection="column" ml="150px" mt="74px" m={{mobile:"30px", laptop:"74px 0 0 150px"}}>
          <Typography variant="h6" color="white" fontWeight="bold">
            2. THERE IS NO SENIOR WITHOUT A JUNIOR
          </Typography>
          <Typography variant="body1" align="justify" color="white">
            If you are a trained professional, you will find several
            <br /> opportunities that fit your profile, but if you are a
            <br /> beginner, do not worry. We will help you with
            <br /> continuous training in various disciplines.
          </Typography>
        </Box>
      </Box>
    </Box>,
    <Box
      display="flex"
      justifyContent="center"
      p="5%"
      bgcolor="#050E3F"
      key="job"
    >
      <Box display="flex" flexDirection={{ mobile: "column", laptop: "row" }}>
        <Box mt={{mobile:"10%"}}>
          <Image src={Apply} alt="graphics" height="300px" width="500px" />
        </Box>
        <Box display="flex" flexDirection="column" ml="150px" mt="74px" m={{mobile:"30px", laptop:"74px 0 0 150px"}}>
          <Typography variant="h6" color="white" fontWeight="bold">
            3. JOB OPPORTUNITIES
          </Typography>
          <Typography variant="body1" align="justify" color="white">
            You can apply to different projects, but you must
            <br /> demonstrate your skills and stand out from the
            <br /> crowd to be selected for the position sought by
            <br /> the employer.
          </Typography>
        </Box>
      </Box>
    </Box>,
    <Box
      display="flex"
      justifyContent="center"
      p="5%"
      bgcolor="#050E3F"
      key="measure"
    >
      <Box display="flex" flexDirection={{ mobile: "column", laptop: "row" }}>
        <Box mt={{mobile:"10%"}}>
          <Image src={graphics2} alt="graphics" height="300px" width="500px" />
        </Box>
        <Box display="flex" flexDirection="column" ml="150px" mt="74px" m={{mobile:"30px", laptop:"74px 0 0 150px"}}>
          <Typography variant="h6" color="white" fontWeight="bold">
            4. MEASURE YOUR ABILITIES
          </Typography>
          <Typography variant="body1" align="justify" color="white">
            Do not worry if you do not get selected right away,
            <br /> because you will always get better and know what you
            <br /> need to improve so you can stand out in future
            <br /> opportunities. We will be at your side, guiding you and
            <br /> offering you new solutions.
          </Typography>
        </Box>
      </Box>
    </Box>,
    <Box
      display="flex"
      justifyContent="center"
      p="5%"
      bgcolor="#050E3F"
      key="moment"
    >
      <Box display="flex" flexDirection={{ mobile: "column", laptop: "row" }}>
        <Box>
          <Image
            src={frame5Image}
            alt="graphics"
            height="400px"
            width="400px"
          />
        </Box>
        <Box display="flex" flexDirection="column" ml="150px" mt="74px" m={{mobile:"30px", laptop:"74px 0 0 150px"}}>
          <Typography variant="h6" color="white" fontWeight="bold">
            5. TO THE LAST MOMENT
          </Typography>
          <Typography variant="body1" align="justify" color="white">
            We will be with you from the beginning of the
            <br /> process until you are hired, with our selection
            <br /> team guiding you through every interview with
            <br /> your new employer to get you hired.
          </Typography>
        </Box>
      </Box>
    </Box>,
    <Box
      display="flex"
      justifyContent="center"
      p="5%"
      bgcolor="#050E3F"
      key="money"
    >
      <Box display="flex" flexDirection={{ mobile: "column", laptop: "row" }}>
        <Box>
          <Image
            src={frame6Image}
            alt="graphics"
            height="400px"
            width="500px"
          />
        </Box>
        <Box display="flex" flexDirection="column" ml="150px" mt="74px" m={{mobile:"30px", laptop:"74px 0 0 150px"}}>
          <Typography variant="h6" color="white" fontWeight="bold">
            6. DON’T WORRY ABOUT MONEY
          </Typography>
          <Typography variant="body1" align="justify" color="white">
            We will only get paid when you get a job.
          </Typography>
        </Box>
      </Box>
    </Box>,
  ];
  return (
    <div>
      <Head>
        <title>Shaper - Memberships</title>
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
        <TopAppBar bgColor="white" />

        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap="2%"
          m={{ mobile: "40% 10%", desktop: "10% 0" }}
          flexWrap={{ mobile: "wrap-reverse" }}
        >
          <Box display="flex" flexDirection="column">
            <Typography variant="h6" fontWeight="bold" color="secondary">
              JOIN OUR COMMUNITY
            </Typography>
            <Typography variant="h5" color="primary" fontWeight="bold">
              Memberships have come
              <br /> to change your life
            </Typography>
            <Typography color="#737373" variant="body1">
              Shaper testers can participate in real projects with
              <br /> real companies and get their dream job. With the help
              <br /> of our leadership team, our candidates get better day
              <br /> by day while receiving competitive offers to grow fast
              <br /> and join a new company to give their best.
            </Typography>
          </Box>
          <Image src={PeopleMembership} alt="people" />
        </Box>
        <Box bgcolor="#050E3F">
          <Carrousel
            cards={cards}
            arrow={
              <IconButton>
                <ArrowBack sx={{ color: "#FFFFFF" }} fontSize="large" />
              </IconButton>
            }
            timeout={5000}
            height="600px"
          />
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          m={{ mobile: "40% 10%", desktop: "10% 0" }}
          gap="2%"
          alignItems="center"
          flexWrap={{ mobile: "wrap-reverse" }}
        >
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
          >
            <Typography variant="h6" color="secondary" fontWeight="bold">
              OUR MEMBERSHIP
            </Typography>
            <Typography variant="h5" color="primary" fontWeight="bold">
              We help our candidates in
              <br /> finding new and exciting jobs
            </Typography>
            <Typography variant="body1" align="justify" color="#737373" mb="5%">
              The Shaper program offers you the opportunity to work
              <br /> with top companies. You can be tested by multiple
              <br /> employers, as many as you have time to prove your
              <br /> skills. Our membership is designed to help you grow
              <br /> and succeed.
            </Typography>
            <Button
              text="Suscribe"
              type="button"
              variant="contained"
              size="medium"
              padding="16px 48px"
            />
          </Box>
          <Image src={GirlMembership} alt="girl" />
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          m={{ mobile: "40% 10%", desktop: "10% 0" }}
        >
          <Box
            component="div"
            id="options"
            display="flex"
            flexDirection="row"
            justifyContent="center"
            m="40% 10%"
            gap={{ mobile: 10, desktop: 20 }}
            flexWrap="wrap"
          >
            <ShaperFor
              background="#050E3F"
              title="shaper for"
              titleBold={{ text: "business", color: "#3C7E1F" }}
              description={{
                text: "If you are a company and would like to attract the best talent, this is your opportunity. Join Shaper Membership for business and enjoy the benefits.",
                color: "white",
              }}
              buttonColor="secondary"
            />
            <ShaperFor
              background="#050E3F"
              title="shaper for"
              titleBold={{ text: "universities", color: "#FF9CBF" }}
              description={{
                text: "Are you an educational institution and want to promote your students? Shaper for universities is your best option.",
                color: "white",
              }}
              buttonColor="secondary"
            />
          </Box>
        </Box>
        <Footer />
      </Box>
    </div>
  );
};

export default Membership;
