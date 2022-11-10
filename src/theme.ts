import { createTheme, Theme } from '@mui/material/styles';

declare module '@mui/material/styles' {
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
        background: {
            main: '#fff',
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
    fontSize: '57px',
    lineHeight: '64px',
    [theme.breakpoints.down('laptop')]: {
        fontSize: '45px',
        lineHeight: '50px',
    },
};
theme.typography.h3 = {
    fontFamily: 'RobotoBold',
    fontSize: '36px',
    lineHeight: '44px',
    fontWeight: 'bold',
    [theme.breakpoints.down('laptop')]: {
        fontSize: '24px',
        lineHeight: '30px',
    },
};
theme.typography.h5 = {
    fontFamily: 'RobotoBold',
    fontSize: '28px',
    lineHeight: '36px',
    [theme.breakpoints.down('laptop')]: {
        fontSize: '20px',
        lineHeight: '24px',
    },
};
theme.typography.h6 = {
    fontFamily: 'RobotoBold',
    fontSize: '24px',
    lineHeight: '32px',
    [theme.breakpoints.down('laptop')]: {
        fontSize: '16px',
        lineHeight: '20px',
    },
};

theme.typography.body1 = {
    fontFamily: 'RobotoRegular',
    fontSize: '16px',
    lineHeight: '24px',
    [theme.breakpoints.down('laptop')]: {
        fontSize: '14px',
        lineHeight: '20px',
    },
};
theme.typography.body2 = {
    fontFamily: 'RobotoRegular',
    fontSize: '14px',
    lineHeight: '20px',
    [theme.breakpoints.down('laptop')]: {
        fontSize: '14px',
    },
};
theme.typography.button = {
    fontFamily: 'RobotoBold',
    fontSize: '16px',
    [theme.breakpoints.down('laptop')]: {
        fontSize: '16px',
    },
};

export default theme;
