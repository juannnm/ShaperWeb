import { TopAppBar } from '../controller/components/surfaces/TopAppBar/TopAppBar';
import { Footer } from '../controller/components/surfaces/Footer/Footer';
import { NextPage } from 'next';
import { Box, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { Button } from 'react-ui-controller';
import Image from 'next/image';
import jumpImage from '../../public/assets/png/Academy/FOTOS.png';
import cellphoneImage from '../../public/assets/png/Academy/imagen.png';
import { CareerCard } from '../controller/components/card/CareerCard';
import Head from 'next/head';
import { IsologotipoShaperBlue } from '../../public/assets/svg/logo';
import { color } from '@mui/system';

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
                <Box id="Intro" component="div" justifyContent="center" textAlign="center" mt="10%">
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
                <Box id="characteristic" component="div" display="flex" flexDirection="row" justifyContent="center" alignItems="center">
                    <Image src={cellphoneImage} alt="cellphone" width="504.5" height="297" />
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
                        <ListItem>
                            <ListItemIcon>
                                <IsologotipoShaperBlue />
                            </ListItemIcon>
                            <ListItemText primaryTypographyProps={{ color: 'primary' }}>
                                Shaper program is designed to help you
                                <br /> <b>make decisions and achieve results.</b>
                            </ListItemText>
                        </ListItem>
                    </List>
                </Box>
                <Box id="careerTypes" component="div" m="200px" textAlign="center">
                    <Typography variant="h6" mb="10px" fontWeight="bold" color="secondary">
                        OUR PROCESS IS REALLY SIMPLE
                    </Typography>
                    <Typography variant="h4" fontWeight="bold" color="primary">
                        You can measure your needs over time
                        <br /> and choose between 2 options
                    </Typography>
                    <Box display="flex" flexDirection="row" justifyContent="space-evenly" mt="35px">
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
                <Box></Box>
                <Box></Box>
                <Box></Box>
                <Footer />
            </Box>
        </div>
    );
};

export default Careers;
