import Link from "next/link";
import { Button as MuiButton } from "@mui/material";
import { TopAppBar as RUCTopAppBar, Button } from "react-ui-controller";
import SearchIcon from "@mui/icons-material/Search";
import { LogoShaperBlue } from "../../../../../public/assets/svg/logo";
import { useRouter } from "next/router";
import { cp } from "fs/promises";

export const TopAppBar = () => {
  const { pathname } = useRouter();

  const navButtons = [
    {
      component: (
        <Link href="/" passHref key="home">
          <Button
            text="Home"
            type="button"
            variant="text"
            href="/"
            color={pathname === "/" ? "primary" : "inherit"}
          />
        </Link>
      ),
    },
    {
      component: (
        <Link href="/academy" passHref key="academy">
          <Button 
            text="Academy" 
            type="button" 
            variant="text" 
            href="/academy" 
            color={pathname === "/academy" ? "primary" : "inherit"}
          />
        </Link>
      ),
    },
    {
      component: (
        <Link href="/membership" passHref key="membership">
          <Button
            text="Membership"
            type="button"
            variant="text"
            href="/membership"
            color={pathname === "/membership" ? "primary" : "inherit"}
          />
        </Link>
      ),
    },
    {
      component: (
        <Link href="/businesses" passHref key="businesses">
          <Button
            text="Businesses"
            type="button"
            variant="text"
            href="/businesses"
            color={pathname === "/businesses" ? "primary" : "inherit"}
          />
        </Link>
      ),
    },
    {
      component: (
        <Link href="/about-us" passHref key="about-us">
          <Button
            text="About Us"
            type="button"
            variant="text"
            href="/about-us"
            color={pathname === "/about-us" ? "primary" : "inherit"}
          />
        </Link>
      ),
    },
    {
      component: (
        <Link href="/contact" passHref key="contact">
          <Button 
            text="Contact" 
            type="button" 
            variant="text" 
            href="/contact" 
            color={pathname === "/contact" ? "primary" : "inherit"}
          />
        </Link>
      ),
    },
  ];

  const otherButtons = [
    {
      component: (
        <Link href="/sign-in">
          <MuiButton
            variant="contained"
            sx={{
              bgcolor: "white",
              backgroundFilter: "blur",
              borderRadius: "100px",
            }}
          >
            Sign In
          </MuiButton>
        </Link>
      ),
    },
    { component: <SearchIcon /> },
  ];

  return (
    <RUCTopAppBar
      handleDrawerOpen={() => {}}
      open={false}
      navButtons={navButtons}
      otherButtons={otherButtons}
      background="transparent"
      logo={{
        component: <LogoShaperBlue style={{ width: "120px" }} />,
        isSVG: true,
      }}
      boxShadow="0px 0px 0px 0px"
    />
  );
};
