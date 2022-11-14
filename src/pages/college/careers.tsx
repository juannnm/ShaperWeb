import { Box, Typography } from '@mui/material';
import { Menu } from '@mui/icons-material';
import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Button, IconButton } from 'react-ui-controller';
import guyImage from '../../../public/assets/png/Academy/foto 1.png';
import jumpImage from '../../../public/assets/png/Academy/FOTOS.png';
import { CareerCard } from '../../controller/components/card/CareerCard';
import { CertifieCard } from '../../controller/components/card/CertifieCard';
import { Footer } from '../../controller/components/surfaces/Footer/Footer';
import { NavigationRail } from '../../controller/components/surfaces/NavigationRail/NavigationRail';
import { ShaperBlue } from '../../../public/assets/svg/logo';

const Careers: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Shaper - Carrers</title>
                <meta name="description" content="" />
                <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
            </Head>
            <Box>
                <Box sx={{ display: { mobile: 'none', laptop: 'block' } }}>
                    <NavigationRail />
                </Box>
                <Box display={{ mobile: 'flex', laptop: 'none' }} p="20px" alignItems="center" gap={2}>
                    <IconButton color="primary">
                        <Menu fontSize="large" />
                    </IconButton>
                    <ShaperBlue style={{ fontSize: '80px', marginTop: '4px' }} />
                </Box>
                <Box
                    id="Intro"
                    component="div"
                    display="flex"
                    justifyContent="center"
                    flexDirection="column"
                    textAlign="center"
                    pt={{ mobile: '0%', laptop: '5%' }}
                    gap={2}
                >
                    <Box>
                        <Typography variant="h6" fontWeight="bold" color="secondary">
                            CAREERS
                        </Typography>
                        <Typography variant="h4" fontWeight="bold" color="primary">
                            Shaping a new reality for everyone.
                        </Typography>
                        <Typography variant="body1" color="primary" mb="1%">
                            Start a new career and get your dream job.
                        </Typography>
                        <Button text="Contact our team" type="button" variant="contained" />
                    </Box>
                    <Box m={{ mobile: '0', laptop: '0 20%' }}>
                        <Image src={jumpImage} alt="group" width="1066" height="397" />
                    </Box>
                </Box>
                <Box id="careerTypes" component="div" m={{ mobile: '100px 50px', laptop: '200px 0' }} textAlign="center">
                    <Typography variant="h6" mb="10px" fontWeight="bold" color="secondary">
                        OUR PROCESS IS REALLY SIMPLE
                    </Typography>
                    <Typography variant="h4" fontWeight="bold" color="primary">
                        You can measure your needs over time and choose between 2 options.
                    </Typography>
                    <Box display="flex" flexDirection="row" justifyContent="center" gap={4} m="35px 0px" flexWrap="wrap">
                        <CareerCard
                            title="Part-time Career"
                            description="You can learn remotely with our team of experts and even complete assignments after work with our online academic campus."
                            hours="40"
                        />
                        <CareerCard
                            title="Full-time Career"
                            description="Our full-time career is designed to fully support you and guide you through a detailed process to be the best in your new profession."
                            hours="80"
                        />
                    </Box>
                    <Typography variant="h6" textAlign="center" mt="5%" color="primary">
                        Once you have chosen your specific framework, you can now apply and our team will reach you.
                    </Typography>
                </Box>
                <Box textAlign="center" mb="10%">
                    <Typography variant="h5" fontWeight="bold" color="secondary">
                        ALL CAREERS
                    </Typography>
                    <Box display="flex" flexDirection="row" justifyContent="center" gap={{ mobile: 1, laptop: 4 }} mt="2%">
                        <CertifieCard />
                        <CertifieCard />
                        <CertifieCard />
                        <CertifieCard />
                    </Box>
                </Box>
                <Box
                    display="flex"
                    flexDirection={{ mobile: 'column-reverse', laptop: 'row' }}
                    justifyContent="center"
                    alignItems="center"
                    flexWrap="wrap-reverse"
                    m={{ mobile: '10% 10px' }}
                >
                    <Box width={{ mobile: '100%', laptop: '30%' }}>
                        <Typography variant="h5" fontWeight="bold" color="secondary">
                            OUR MEMBERSHIP
                        </Typography>
                        <Typography variant="h4" color="primary">
                            We help our candidates in finding new and exciting jobs
                        </Typography>
                        <Typography color="#737373" variant="body1" mb="2%">
                            The Shaper program offers you the opportunity to work with top companies. You can be tested by multiple employers, as many
                            as you have time to prove your skills. Our membership is designed to help you grow and succeed.
                        </Typography>
                        <Button text="Suscribe" type="button" variant="contained" padding="16px 48px" />
                    </Box>
                    <Image src={guyImage} alt="guy" height="470px" width="511.5px" />
                </Box>
                <Footer />
            </Box>
        </div>
    );
};

export default Careers;
