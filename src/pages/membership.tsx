import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import Head from 'next/head';
import { Button } from 'react-ui-controller';
import { ShaperFor } from '../controller/components/card/ShaperFor';
import { Footer } from '../controller/components/surfaces/Footer/Footer';
import { TopAppBar } from '../controller/components/surfaces/TopAppBar/TopAppBar';

const Membership = () => {
    return (
        <div>
            <Head>
                <title>Shaper - Memberships</title>
                <meta name="description" content="" />
                <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
            </Head>
            <Box component="main">
                <TopAppBar bgColor="white" />
                <Box display="flex" justifyContent="center" mt="10%">
                    <Box display="flex" flexDirection="column">
                        <Typography variant="h6" fontWeight="bold">
                            JOIN OUR COMMUNITY
                        </Typography>
                        <Typography variant="h5">
                            Memberships have come
                            <br /> to change your life
                        </Typography>
                        <Typography>
                            Shaper testers can participate in real projects with
                            <br /> real companies and get their dream job. With the help
                            <br /> of our leadership team, our candidates get better day
                            <br /> by day while receiving competitive offers to grow fast
                            <br /> and join a new company to give their best.
                        </Typography>
                    </Box>
                </Box>
                <Box display="flex" justifyContent="center" mt="10%">
                    <Box display="flex" flexDirection="column">
                        <Typography variant="h6">1. BECOME A MEMBER OF OUR COMMUNITY</Typography>
                        <Typography variant="body1" align="justify">
                            Shaper testers can participate in real projects with real
                            <br /> companies and get their dream job. With the help of our
                            <br />
                            leadership team, our candidates get better day by day
                            <br /> while receiving competitive offers to grow fast and join
                            <br /> a new company to give their best.
                        </Typography>
                    </Box>
                </Box>
                <Box display="flex" justifyContent="center" mt="10%">
                    <Box display="flex" flexDirection="column" justifyContent="flex-start">
                        <Typography variant="h6">OUR MEMBERSHIP</Typography>
                        <Typography variant="h5">
                            We help our candidates in
                            <br /> finding new and exciting jobs
                        </Typography>
                        <Typography variant="body1" align="justify">
                            The Shaper program offers you the opportunity to work
                            <br /> with top companies. You can be tested by multiple
                            <br /> employers, as many as you have time to prove your
                            <br /> skills. Our membership is designed to help you grow
                            <br /> and succeed.
                        </Typography>
                        <Button text="Suscribe" type="button" variant="contained" size="medium" />
                    </Box>
                </Box>
                <Box display="flex" justifyContent="center" mt="10%">
                    <Box component="div" id="options" display="flex" flexDirection="row" justifyContent="center" gap="5%">
                        <ShaperFor
                            title="shaper for"
                            titleBold={{ text: 'business', color: '#3C7E1F' }}
                            description="If you are a company and would like to attract the best talent, this is your opportunity. Join Shaper Membership for business and enjoy the benefits."
                        />
                        <ShaperFor
                            title="shaper for"
                            titleBold={{ text: 'universities', color: '#D2004A' }}
                            description="Are you an educational institution and want to promote your students? Shaper for universities is your best option. "
                        />
                    </Box>
                </Box>
                <Footer />
            </Box>
        </div>
    );
};

export default Membership;
