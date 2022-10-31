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
        h3: {
            fontWeight: 'bold',
        },
        h6: {
            fontWeight: 'normal',
        },
        subtitle1: {
            fontWeight: 'bold',
        },
    },
});

export default theme;
