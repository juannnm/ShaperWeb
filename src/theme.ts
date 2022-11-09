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

const theme = createTheme({
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
        fontFamily: 'UbuntuRegular, UbuntuMedium, UbuntuBold, RobotoRegular, RobotoMedium',
        h3: {
            fontFamily: 'UbuntuBold',
            fontSize: '40px',
            lineHeight: '50px',
        },
        h4: {
            fontFamily: 'UbuntuBold',
        },
        h5: {
            fontFamily: 'UbuntuRegular',
            fontSize: '30px',
            lineHeight: '40px',
        },
        h6: {
            fontFamily: 'UbuntuRegular',
            fontWeight: 'normal',
            fontSize: '25px',
            lineHeight: '40px',
        },
        body1: {
            fontFamily: 'RobotoRegular',
            fontSize: '23px',
            lineHeight: '30px',
        },
        body2: {
            fontFamily: 'RobotoRegular',
        },
        subtitle1: {
            fontWeight: 'bold',
        },
        button: {
            fontFamily: 'UbuntuBold',
        },
    },
});

export default theme;
