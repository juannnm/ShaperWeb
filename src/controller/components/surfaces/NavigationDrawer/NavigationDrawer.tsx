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
import { LinkButton } from "react-ui-controller";
import {
  Login,
  ExploreOutlined,
  SchoolOutlined,
  WorkOutlineOutlined,
  Fingerprint,
  ContactSupportOutlined,
} from "@mui/icons-material";
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
        <Box>
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
              <IconButton>
                <IsologotipoShaperBlue style={{ fontSize: "20px" }} />
              </IconButton>
              <LinkButton text="Home" variant="body2" />
            </Box>
          </Link>

          <Link href="/" passHref key="home">
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
                <ExploreOutlined color="primary" fontSize="medium" />
              </IconButton>
              <LinkButton text="Get Started" variant="body2" />
            </Box>
          </Link>

          <Link href="/" passHref key="home">
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
                <SchoolOutlined color="primary" fontSize="medium" />
              </IconButton>
              <LinkButton text="College" variant="body2" />
            </Box>
          </Link>

          <Link href="/" passHref key="home">
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
                <WorkOutlineOutlined color="primary" fontSize="medium" />
              </IconButton>
              <LinkButton text="Business" variant="body2" />
            </Box>
          </Link>

          <Link href="/" passHref key="home">
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
                <Fingerprint color="primary" fontSize="medium" />
              </IconButton>
              <LinkButton text="About Us" variant="body2" />
            </Box>
          </Link>

          <Link href="/" passHref key="home">
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
                <ContactSupportOutlined color="primary" fontSize="medium" />
              </IconButton>
              <LinkButton text="Contact" variant="body2" />
            </Box>
          </Link>
        </Box>
        <Box>
          <Link href="/sign-in" key="login">
            <Box
              component="div"
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <IconButton title="Login">
                <Login />
              </IconButton>
            </Box>
          </Link>
        </Box>
      </Drawer>
    </Box>
  );
};
