import { Box } from '@mui/material';
import Head from 'next/head';
import Image from 'next/image';
import women from '../../public/assets/png/Contact us/imagen cont.png';
import { UserForm } from '../controller/components/form/UserForm';
import { Footer } from '../controller/components/surfaces/Footer/Footer';
import { NavigationRail } from '../controller/components/surfaces/NavigationRail/NavigationRail';

const Contact = () => {
    return (
        <div>
            <Head>
                <title>Shaper - Contact</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="" />
                <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
            </Head>
            <Box>
                <Box display={{ mobile: 'none', laptop: 'block' }}>
                    <NavigationRail bgColor="white" />
                </Box>
                <Box
                    component="div"
                    sx={{
                        width: '100%',
                        height: '1200px',
                        position: 'relative',
                        background: 'linear-gradient(135deg,#C1E0DE,#C1BCFE,#FADCCC,#FFE7AC,#FFCBAB,#FFD4C0)',
                    }}
                    display="flex"
                    flexDirection="column"
                    flexWrap="wrap"
                >
                    <Box
                        display="flex"
                        flexDirection={{ mobile: 'column', laptop: 'row' }}
                        sx={{
                            m: '150px auto',
                            bgcolor: 'rgba(255,255,255,0.4)',
                            borderRadius: '20px',
                            padding: '50px',
                        }}
                    >
                        <UserForm />
                        <Box>
                            <Image src={women} alt="women" width="883" height="758" />
                        </Box>
                    </Box>
                </Box>
                <Footer />
            </Box>
        </div>
    );
};

export default Contact;
