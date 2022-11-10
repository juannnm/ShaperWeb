import { createTheme, Theme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: false; // removes the `xs` breakpoint
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true; // adds the `mobile` breakpoint
    laptop: true;
    desktop: true;
  }
}

let theme = createTheme({
    breakpoints: {
        values: {
            mobile: 0,
            laptop: 420,
            desktop: 1920,
        },
    },
    palette: {
        primary: {
            main: '#050E3F',
            contrastText: '#FFFFFF',
        },
        secondary: {
            main: '#A54CDB',
            contrastText: '#FFFFFF',
        },
    },
    typography: {
        fontFamily: 'RobotoRegular, RobotoMedium, RobotoBold',
        h4: {
            fontFamily: 'RobotoBold',
        },

        subtitle1: {
            fontWeight: 'normal',
            '&:hover': {
                fontWeight: 'bold',
            },
        },
    },
});
theme.typography.h2 = {
    fontFamily: 'RobotoBold',
    fontSize: '70px',
    lineHeight: '70px',
    [theme.breakpoints.down('laptop')]: {
        fontSize: '45px',
        lineHeight: '50px',
    },
};
theme.typography.h3 = {
    fontFamily: 'RobotoBold',
    fontSize: '40px',
    lineHeight: '50px',
    fontWeight: 'bold',
    [theme.breakpoints.down('laptop')]: {
        fontSize: '25px',
        lineHeight: '30px',
    },
};
theme.typography.h5 = {
    fontFamily: 'RobotoRegular',
    fontSize: '30px',
    lineHeight: '40px',
    [theme.breakpoints.down('laptop')]: {
        fontSize: '16px',
        lineHeight: '20px',
    },
};
theme.typography.h6 = {
    fontFamily: 'RobotoRegular',
    fontWeight: 'normal',
    fontSize: '25px',
    lineHeight: '40px',
    [theme.breakpoints.down('laptop')]: {
        fontSize: '20px',
        lineHeight: '23px',
    },
};

theme.typography.body1 = {
    fontFamily: 'RobotoRegular',
    fontSize: '23px',
    lineHeight: '30px',
    [theme.breakpoints.down('laptop')]: {
        fontSize: '16px',
        lineHeight: '20px',
    },
};
theme.typography.body2 = {
    fontFamily: 'RobotoRegular',
    fontSize: '20px',
    [theme.breakpoints.down('laptop')]: {
        fontSize: '14px',
    },
};
theme.typography.button = {
    fontFamily: 'RobotoBold',
    fontSize: '21px',
    [theme.breakpoints.down('laptop')]: {
        fontSize: '16px',
    },
};

export default theme;
