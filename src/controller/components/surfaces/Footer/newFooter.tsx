import { Box, Typography, Link } from "@mui/material";
import { IsologotipoShaperBlue } from "../../../../../public/assets/svg/logo";
import { ShaperBlue } from "../../../../../public/assets/svg/logo";

export const NewFooter = () => {
  return (
    <Box
      sx={{
        width: "100%",
        positon: "relative",
        backgroundColor: "#F1F3F3",
        p: "50px 10%",
      }}
    >
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        mb="60px"
      >
        <Box display="flex" flexDirection="column" gap={8} ml="10%" alignSelf="flex-start">
          <IsologotipoShaperBlue style={{ fontSize: "30px" }} />
          <Typography width="480px">
            We help clients attract, hire, and retain best in-class candidates
            worldwide, creating first-level certification programs to assist our
            candidates in finding new, and exciting jobs.
          </Typography>
        </Box>
        <Box display="flex" flexDirection="row" justifyContent="space-evenly" width="80%" ml="0">
          <Box display="flex" flexDirection="column" gap={2}>
            <Typography fontWeight="bold" color="#050E3F" variant="body1">
              Social
            </Typography>
            <Link href="/" underline="hover" variant="body1" color="#050E3F">
              Youtube
            </Link>
            <Link href="/" underline="hover" variant="body1" color="#050E3F">
              Instagram
            </Link>
            <Link href="/" underline="hover" variant="body1" color="#050E3F">
              Linkedin
            </Link>
            <Link href="/" underline="hover" variant="body1" color="#050E3F">
              Twitter
            </Link>
            <Link href="/" underline="hover" variant="body1" color="#050E3F">
              Blog
            </Link>
          </Box>
          <Box display="flex" flexDirection="column" gap={2}>
            <Typography fontWeight="bold" color="#050E3F" variant="body1">
              About us
            </Typography>
            <Link href="/" underline="hover" variant="body1" color="#050E3F">
              Jobs
            </Link>
            <Link href="/" underline="hover" variant="body1" color="#050E3F">
              Courses
            </Link>
            <Link href="/" underline="hover" variant="body1" color="#050E3F">
              Careers
            </Link>
            <Link href="/" underline="hover" variant="body1" color="#050E3F">
              Business
            </Link>
            <Link href="/" underline="hover" variant="body1" color="#050E3F">
              Contact
            </Link>
          </Box>
          <Box display="flex" flexDirection="column" gap={2}>
            <Typography fontWeight="bold" color="#050E3F" variant="body1">
              Last seen
            </Typography>
            <Link href="/" underline="hover" variant="body1" color="#050E3F">
              Business
            </Link>
            <Link href="/" underline="hover" variant="body1" color="#050E3F">
              Full Stack
            </Link>
            <Link href="/" underline="hover" variant="body1" color="#050E3F">
              Design
            </Link>
            <Link href="/" underline="hover" variant="body1" color="#050E3F">
              UX/UI Design
            </Link>
            <Link href="/" underline="hover" variant="body1" color="#050E3F">
              Motion Graphics
            </Link>
          </Box>
        </Box>
      </Box>
      <Box display="flex" flexDirection="row" justifyContent="center" gap={10}>
        <ShaperBlue style={{width:"60px", height:"24px"}}/>
        <Link href="/" underline="hover" variant="body1">Privacy Policy</Link>
        <Link href="/" underline="hover" variant="body1">Terms of Service</Link>
        <Link href="/" underline="hover" variant="body1">Join research studies</Link>
        <Link href="/" underline="hover" variant="body1">Feedback</Link>
      </Box>
    </Box>
  );
};
