import { createTheme } from '@mui/system';

declare module '@mui/material/styles' {
    interface Theme {
      typography: {

      }
    }
    interface ThemeOptions {
       
    }
}

const theme = createTheme({
    typography: {
      
    },
    palette: {},
});

export default theme;
