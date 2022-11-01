import { createTheme } from '@mui/material/styles';

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
        },
        h4: {
            fontFamily: 'UbuntuBold',
        },
        h5: {
            fontFamily: 'UbuntuRegular',
        },
        h6: {
            fontWeight: 'normal',
        },
        body1: {
            fontFamily: 'RobotoRegular',
        },
        body2: {
            fontFamily: 'RobotoRegular',
        },
        subtitle1: {
            fontWeight: 'bold',
        },
    },
});

export default theme;
