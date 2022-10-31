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
        subtitle1: {
            fontWeight: 'bold',
        },
    },
});

export default theme;
