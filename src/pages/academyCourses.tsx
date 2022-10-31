import React from 'react';
import { Footer } from '../controller/components/surfaces/Footer/Footer';
import { TopAppBar } from '../controller/components/surfaces/TopAppBar/TopAppBar';
import { Accordion, AccordionActions, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material';
import type { NextPage } from 'next';
import { Button } from 'react-ui-controller';
import Image from 'next/image';
import groupImage from '../../public/assets/png/Academy/Group of Guys.png';
import girlImage from '../../public/assets/png/Academy/Mask group.png';
import phoneImage from '../../public/assets/png/Academy/Mask group 2.png';
import graphicImage from '../../public/assets/png/Academy/Mask group 3.png';
import girl2Image from '../../public/assets/png/Academy/foto 2.png';
import { InterestCard } from '../controller/components/card/InterestCard';
import { CourseCard } from '../controller/components/card/CourseCard';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Head from 'next/head';

const Courses: NextPage = () => {
    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div>
            <Head>
                <title>Shaper - Academy Courses</title>
                <meta name="description" content="" />
                <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
            </Head>
            <Box component="main">
                <TopAppBar bgColor="white" />
                <Box id="Intro" component="div" justifyContent="center" textAlign="center" mt="10%">
                    <Box>
                        <Typography variant="h6" fontWeight="bold" color="secondary">
                            COURSES
                        </Typography>
                        <Typography variant="h4" fontWeight="bold" color="primary">
                            We&apos;re transforming education from inside-out
                        </Typography>
                        <Typography variant="body1" color="primary" mb="1%">
                            You can watch every online course for free no strings-attached
                        </Typography>
                        <Button text="Start Now" type="button" variant="contained" />
                    </Box>
                    <Image src={groupImage} alt="group" width="865.75" height="492.27" />
                </Box>
                <Box id="characteristics" component="div" justifyContent="center">
                    <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center">
                        <Image src={girlImage} alt="girl" width="305.78" height="237.85" />
                        <Box justifyContent="center" alignItems="center">
                            <Typography variant="h5" color="primary" fontWeight="bold">
                                In Shaper Academy you can enjoy
                            </Typography>
                            <Typography variant="body1" color="#737373" sx={{ whiteSpace: 'pre-line' }}>
                                {'The best online courses wherever you are, without\nschedule and whenever you want.'}
                            </Typography>
                        </Box>
                    </Box>
                    <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center">
                        <Image src={phoneImage} alt="phone" width="305.78" height="237.85" />
                        <Box justifyContent="center" alignItems="center">
                            <Typography variant="h5" color="primary" fontWeight="bold" sx={{ whiteSpace: 'pre-line' }}>
                                {' You will be able to learn the most\n useful methods and techniques'}
                            </Typography>
                            <Typography variant="body1" color="#737373" sx={{ whiteSpace: 'pre-line' }}>
                                {'On the market in high quality, so you will not miss a\n single detail, without limitations.'}
                            </Typography>
                        </Box>
                    </Box>
                    <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center">
                        <Image src={graphicImage} alt="graphic" width="305.78" height="237.85" />
                        <Box justifyContent="center" alignItems="center">
                            <Typography variant="h5" color="primary" fontWeight="bold">
                                We offer courses in different areas
                            </Typography>
                            <Typography variant="body1" color="#737373" sx={{ whiteSpace: 'pre-line' }}>
                                {
                                    'To let you optimize your skills with a top team of\n professionals that we choose very carefully to\n guarantee an excellent learning experience.'
                                }
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Box id="Dropdown" component="div" m="200px">
                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>Art & Design</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Box display="flex" flexDirection="row" justifyContent="space-evenly" m="35px 0">
                                <CourseCard />
                                <CourseCard />
                                <CourseCard />
                                <CourseCard />
                                <CourseCard />
                            </Box>
                            <Box display="flex" flexDirection="row" justifyContent="space-evenly" m="35px 0">
                                <CourseCard />
                                <CourseCard />
                                <CourseCard />
                                <CourseCard />
                                <CourseCard />
                            </Box>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>Art & Design</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Box display="flex" flexDirection="row" justifyContent="space-evenly" m="35px 0">
                                <CourseCard />
                                <CourseCard />
                                <CourseCard />
                                <CourseCard />
                                <CourseCard />
                            </Box>
                            <Box display="flex" flexDirection="row" justifyContent="space-evenly" m="35px 0">
                                <CourseCard />
                                <CourseCard />
                                <CourseCard />
                                <CourseCard />
                                <CourseCard />
                            </Box>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>Art & Design</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Box display="flex" flexDirection="row" justifyContent="space-evenly" m="35px 0">
                                <CourseCard />
                                <CourseCard />
                                <CourseCard />
                                <CourseCard />
                                <CourseCard />
                            </Box>
                            <Box display="flex" flexDirection="row" justifyContent="space-evenly" m="35px 0">
                                <CourseCard />
                                <CourseCard />
                                <CourseCard />
                                <CourseCard />
                                <CourseCard />
                            </Box>
                        </AccordionDetails>
                    </Accordion>
                </Box>
                <Box component="div" display="flex" flexDirection="row" justifyContent="center">
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
                        <Button text="Suscribe" type="button" variant="contained" />
                    </Box>
                    <Image src={girl2Image} alt="girl" width="422px" height="368px" />
                </Box>
                <Box component="div" display="flex" justifyContent="center" m="100px 0">
                    <InterestCard title="Are you interested in looking at study careers?" button="Apply" />
                </Box>
                <Footer />
            </Box>
        </div>
    );
};

export default Courses;
