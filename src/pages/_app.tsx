import type { AppProps } from 'next/app';
import theme from '../theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import '../main.css';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline>
                <Component {...pageProps} />
            </CssBaseline>
        </ThemeProvider>
    );
}

export default MyApp;
