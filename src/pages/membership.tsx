import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import Head from 'next/head';
import Image from 'next/image';
import { Button } from 'react-ui-controller';
import { ShaperFor } from '../controller/components/card/ShaperFor';
import { Footer } from '../controller/components/surfaces/Footer/Footer';
import { TopAppBar } from '../controller/components/surfaces/TopAppBar/TopAppBar';
import PeopleMembership from '../../public/assets/png/membership/people.png';
import GirlMembership from '../../public/assets/png/membership/girl.png';

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
                <Box display="flex" justifyContent="center" mt="10%" alignItems="center" gap="2%" mb="10%">
                    <Box display="flex" flexDirection="column">
                        <Typography variant="h6" fontWeight="bold" color="secondary">
                            JOIN OUR COMMUNITY
                        </Typography>
                        <Typography variant="h5" color="primary" fontWeight="bold">
                            Memberships have come
                            <br /> to change your life
                        </Typography>
                        <Typography color="#737373">
                            Shaper testers can participate in real projects with
                            <br /> real companies and get their dream job. With the help
                            <br /> of our leadership team, our candidates get better day
                            <br /> by day while receiving competitive offers to grow fast
                            <br /> and join a new company to give their best.
                        </Typography>
                    </Box>
                    <Image src={PeopleMembership} alt="people" />
                </Box>
                <Box display="flex" justifyContent="center" p="5%" bgcolor="#050E3F">
                    <Box display="flex" flexDirection="column">
                        <Typography variant="h6" color="white" fontWeight="bold">
                            1. BECOME A MEMBER OF OUR COMMUNITY
                        </Typography>
                        <Typography variant="body1" align="justify" color="white">
                            Shaper testers can participate in real projects with real
                            <br /> companies and get their dream job. With the help of our
                            <br />
                            leadership team, our candidates get better day by day
                            <br /> while receiving competitive offers to grow fast and join
                            <br /> a new company to give their best.
                        </Typography>
                    </Box>
                </Box>
                <Box display="flex" justifyContent="center" mt="10%" gap="2%" alignItems="center">
                    <Box display="flex" flexDirection="column" justifyContent="flex-start">
                        <Typography variant="h6" color="secondary" fontWeight="bold">
                            OUR MEMBERSHIP
                        </Typography>
                        <Typography variant="h5" color="primary" fontWeight="bold">
                            We help our candidates in
                            <br /> finding new and exciting jobs
                        </Typography>
                        <Typography variant="body1" align="justify" color="#737373" mb="5%">
                            The Shaper program offers you the opportunity to work
                            <br /> with top companies. You can be tested by multiple
                            <br /> employers, as many as you have time to prove your
                            <br /> skills. Our membership is designed to help you grow
                            <br /> and succeed.
                        </Typography>
                        <Button text="Suscribe" type="button" variant="contained" size="medium" />
                    </Box>
                    <Image src={GirlMembership} alt="girl" />
                </Box>
                <Box display="flex" justifyContent="center" mt="10%" mb="10%">
                    <Box component="div" id="options" display="flex" flexDirection="row" justifyContent="center" gap={20}>
                        <ShaperFor
                            background="#050E3F"
                            title="shaper for"
                            titleBold={{ text: 'business', color: '#3C7E1F' }}
                            description={{
                                text: 'If you are a company and would like to attract the best talent, this is your opportunity. Join Shaper Membership for business and enjoy the benefits.',
                                color: 'white',
                            }}
                            buttonColor="secondary"
                        />
                        <ShaperFor
                            background="#050E3F"
                            title="shaper for"
                            titleBold={{ text: 'universities', color: '#D2004A' }}
                            description={{
                                text: 'Are you an educational institution and want to promote your students? Shaper for universities is your best option.',
                                color: 'white',
                            }}
                            buttonColor="secondary"
                        />
                    </Box>
                </Box>
                <Footer />
            </Box>
        </div>
    );
};

export default Membership;
