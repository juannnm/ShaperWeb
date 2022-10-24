import Link from "next/link";
import { Button as MuiButton } from "@mui/material";
import { TopAppBar, Button } from "react-ui-controller";
import SearchIcon from '@mui/icons-material/Search';
import Logo from '../images/TopAppBar/LOGOTIPO.png'

const PagesButtons = [
  {component: <Link href={'/'}><Button text="Home" type="button" variant="text"/></Link>},
  {component: <Link href={'/academy'}><Button text="Academy" type="button" variant="text"/></Link>},
  {component: <Link href={'/membership'}><Button text="Membership" type="button" variant="text"/></Link>},
  {component: <Link href={'/businesses'}><Button text="Businesses" type="button" variant="text"/></Link>},
  {component: <Link href={'/about-us'}><Button text="About Us" type="button" variant="text"/></Link>},
  {component: <Link href={'/contact'}><Button text="Contact" type="button" variant="text"/></Link>}
];

const OtherButtons = [
  {component: <Link href={'/sign-in'}><MuiButton variant="contained" sx={{bgcolor:'white', backgroundFilter:'blur', borderRadius:'100px'}}>Sign In</MuiButton></Link>},
  {component: <SearchIcon />}
];

export const Navbar = () => {
  return (
    <TopAppBar
      handleDrawerOpen={()=>{}}
      open={false}
      navButtons={PagesButtons}
      otherButtons={OtherButtons}
      background='transparent'
      logo={Logo}
    />
  )
}