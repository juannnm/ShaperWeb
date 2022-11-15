import React from "react";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import { ShaperBlue } from "../../../../../public/assets/svg/logo";
import Link from "next/link";
import { darken } from "@mui/system";
import { IsologotipoShaperBlue } from "../../../../../public/assets/svg/logo";
import { Button, LinkButton } from "react-ui-controller";
import {
  Login,
  ExploreOutlined,
  SchoolOutlined,
  WorkOutlineOutlined,
  Fingerprint,
  ContactSupportOutlined,
} from "@mui/icons-material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const NavigationDrawer = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <Box>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={() => setOpen(true)}
        edge="start"
        sx={{ ...(open && { display: "none" }) }}
      >
        <Menu fontSize="medium" />
      </IconButton>
      <Drawer
        sx={{
          width: "80%",
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: "80%",
            boxSizing: "border-box",
            borderRadius: "0 20px 20px 0",
          },
        }}
        open={open}
        onClose={() => setOpen(false)}
        anchor="left"
      >
        <Box display="flex" flexDirection="column">
          <Box padding="35px 12px 0px 27px">
            <IconButton color="inherit" onClick={() => setOpen(false)}>
              <Menu fontSize="large" />
            </IconButton>
          </Box>
          <Box mt="20px" padding="35px 12px 0px 27px">
            <Link href="/" passHref key="home">
              <Box
                sx={{
                  "&:hover button": { backgroundColor: "#a8c7fa" },
                  "&:hover a": {
                    color: darken("#050E3F", 3),
                    fontWeight: "bold",
                  },
                }}
              >
                <IconButton sx={{mr:"10px"}}>
                  <IsologotipoShaperBlue style={{ fontSize: "30px" }} />
                </IconButton>
                <LinkButton text="Home" variant="body2" />
              </Box>
            </Link>

            <Link href="/get-started" passHref key="home">
              <Box
                m="20px 0"
                component="div"
                display="flex"
                flexDirection="row"
                alignItems="center"
                sx={{
                  "&:hover button": { backgroundColor: "#a8c7fa" },
                  "&:hover a": {
                    color: darken("#050E3F", 3),
                    fontWeight: "bold",
                  },
                }}
              >
                <IconButton>
                  <ExploreOutlined color="primary" fontSize="large" />
                </IconButton>
                <LinkButton text="Get Started" variant="body2" />

              </Box>
            </Link>

            <Link href="/college-courses" passHref key="home">
              <Box
                component="div"
                display="flex"
                flexDirection="row"
                alignItems="center"
                sx={{
                  "&:hover button": { backgroundColor: "#a8c7fa" },
                  "&:hover a": {
                    color: darken("#050E3F", 3),
                    fontWeight: "bold",
                  },
                }}
              >
                <IconButton>
                  <SchoolOutlined color="primary" fontSize="large" />
                </IconButton>
                <LinkButton text="College" variant="body2" />
                <IconButton >
                  <ArrowForwardIcon
                    color="primary"
                    fontSize="large"
                    sx={{ ml: "100px" }}
                  />
                </IconButton>
              </Box>
            </Link>

            <Link href="/business" passHref key="home">
              <Box
                m="20px 0"
                component="div"
                display="flex"
                flexDirection="row"
                alignItems="center"
                sx={{
                  "&:hover button": { backgroundColor: "#a8c7fa" },
                  "&:hover a": {
                    color: darken("#050E3F", 3),
                    fontWeight: "bold",
                  },
                }}
              >
                <IconButton>
                  <WorkOutlineOutlined color="primary" fontSize="large" />
                </IconButton>
                <LinkButton text="Business" variant="body2" />
                <IconButton>
                  <ArrowForwardIcon
                    color="primary"
                    fontSize="large"
                    sx={{ ml: "90px" }}
                  />
                </IconButton>
              </Box>
            </Link>

            <Link href="/about-us" passHref key="home">
              <Box
                component="div"
                display="flex"
                flexDirection="row"
                alignItems="center"
                sx={{
                  "&:hover button": { backgroundColor: "#a8c7fa" },
                  "&:hover a": {
                    color: darken("#050E3F", 3),
                    fontWeight: "bold",
                  },
                }}
              >
                <IconButton>
                  <Fingerprint color="primary" fontSize="large" />
                </IconButton>
                <LinkButton text="About Us" variant="body2" />
              </Box>
            </Link>

            <Link href="/contact" passHref key="home">
              <Box
                m="20px 0"
                component="div"
                display="flex"
                flexDirection="row"
                alignItems="center"
                sx={{
                  "&:hover button": { backgroundColor: "#a8c7fa" },
                  "&:hover a": {
                    color: darken("#050E3F", 3),
                    fontWeight: "bold",
                  },
                }}
              >
                <IconButton>
                  <ContactSupportOutlined color="primary" fontSize="large" />
                </IconButton>
                <LinkButton text="Contact" variant="body2" />
              </Box>
            </Link>
          </Box>
        </Box>
        <Box mt="auto" mb="20px">
          <Link href="/sign-in" key="login">
            <Box
              component="div"
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Button
                variant="outlined"
                text="Sign in"
                type="button"
                padding="0 45px"
                borderRadius="12px"
              />
            </Box>
          </Link>
        </Box>
      </Drawer>
    </Box>
  );
};
