import { TopAppBar } from '../controller/components/surfaces/TopAppBar/TopAppBar';
import { Footer } from '../controller/components/surfaces/Footer/Footer';
import { NextPage } from 'next';
import { Box, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { Button } from 'react-ui-controller';
import Image from 'next/image';
import jumpImage from '../../public/assets/png/Academy/FOTOS.png';
import cellphoneImage from '../../public/assets/png/Academy/imagen.png';
import guyImage from '../../public/assets/png/Academy/foto 1.png';
import { CareerCard } from '../controller/components/card/CareerCard';
import Head from 'next/head';
import { IsologotipoShaperBlue } from '../../public/assets/svg/logo';
import { CertifieCard } from '../controller/components/card/CertifieCard';

const Careers: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Shaper - Academy Carrers</title>
                <meta name="description" content="" />
                <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
            </Head>
            <Box>
                <TopAppBar bgColor="white" />
                <Box id="Intro" component="div" justifyContent="center" textAlign="center" m={{ mobile: '10%' }} mt={{ mobile: '20%', desktop: '10%' }}>
                    <Box>
                        <Typography variant="h6" fontWeight="bold" color="secondary">
                            CAREERS
                        </Typography>
                        <Typography variant="h4" fontWeight="bold" color="primary">
                            Shaping a new reality for everyone
                        </Typography>
                        <Typography variant="body1" color="primary" mb="1%">
                            Start a new career and get your dream job
                        </Typography>
                        <Button text="Contact our team" type="button" variant="contained" />
                    </Box>
                    <Image src={jumpImage} alt="group" width="1066" height="397" />
                </Box>
                <Box
                    id="characteristic"
                    component="div"
                    display="flex"
                    flexDirection="row"
                    justifyContent="center"
                    alignItems="center"
                    m={{ mobile: '50px' }}
                >
                    <Box width={{ mobile: 0, md: '500px', desktop: '500px' }}>
                        <Image src={cellphoneImage} alt="cellphone" width="504.5" height="297" />
                    </Box>
                    <List>
                        <ListItem>
                            <ListItemIcon>
                                <IsologotipoShaperBlue />
                            </ListItemIcon>{' '}
                            <ListItemText primaryTypographyProps={{ color: 'primary' }}>
                                <b>This program</b> will allow you to
                                <b>
                                    optimize
                                    <br /> your skills
                                </b>
                                , both professionally and
                                <br /> personally.
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <IsologotipoShaperBlue />
                            </ListItemIcon>
                            <ListItemText primaryTypographyProps={{ color: 'primary' }}>
                                Our team of experts will help you
                                <b>
                                    define
                                    <br /> your career goals
                                </b>{' '}
                                and improve your skills
                                <br /> to <b>help you succeed</b> in your job search.
                            </ListItemText>
                        </ListItem>
                    </List>
                </Box>
                <Box id="careerTypes" component="div" m={{ mobile: '100px 50px', desktop: '200px 0' }} textAlign="center">
                    <Typography variant="h6" mb="10px" fontWeight="bold" color="secondary">
                        OUR PROCESS IS REALLY SIMPLE
                    </Typography>
                    <Typography variant="h4" fontWeight="bold" color="primary">
                        You can measure your needs over time
                        <br /> and choose between 2 options
                    </Typography>
                    <Box display="flex" flexDirection="row" justifyContent="center" gap={4} mt="35px" flexWrap="wrap">
                        <CareerCard
                            title="Part-time Career"
                            description="Within our part-time career you can learn remotely with our team of experts and even complete assignments after work with our online academic campus."
                            hours="40"
                        />
                        <CareerCard
                            title="Full-time Career"
                            description="Our full-time career is designed to fully support you and guide you through a detailed process that will give you all the answers you are looking for to be the best in your new profession."
                            hours="80"
                        />
                    </Box>
                    <Typography variant="h6" textAlign="center" mt="5%" color="primary" sx={{ whiteSpace: 'pre-line' }}>
                        {'Once you have chosen your specific framework, you\ncan now apply and our team will reach you'}
                    </Typography>
                </Box>
                <Box textAlign="center" mb="12%">
                    <Typography variant="h5" fontWeight="bold" color="secondary">
                        ALL CAREERS
                    </Typography>
                    <Box display="flex" flexDirection="row" justifyContent="center" gap={4} mt="2%">
                        <CertifieCard />
                        <CertifieCard />
                        <CertifieCard />
                        <CertifieCard />
                    </Box>
                </Box>
                <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" flexWrap="wrap-reverse" m={{ mobile: '50px' }}>
                    <Box>
                        <Typography variant="h5" fontWeight="bold" color="secondary">
                            OUR MEMBERSHIP
                        </Typography>
                        <Typography variant="h4" color="primary" sx={{ whiteSpace: 'pre-line' }}>
                            {'We help our candidates in\nfinding new and exciting jobs'}
                        </Typography>
                        <Typography color="#737373" variant="body1" mb="2%" sx={{ whiteSpace: 'pre-line' }}>
                            {
                                ' The Shaper program offers you the opportunity to work\nwith top companies. You can be tested by multiple\nemployers, as many as you have time to prove your\nskills. Our membership is designed to help you grow\nand succeed.'
                            }
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
