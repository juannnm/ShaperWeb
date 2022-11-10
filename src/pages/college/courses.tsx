import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material';
import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import { Button } from 'react-ui-controller';
import girl2Image from '../../../public/assets/png/Academy/foto 2.png';
import groupImage from '../../../public/assets/png/Academy/Group of Guys.png';
import phoneImage from '../../../public/assets/png/Academy/Mask group 1.jpg';
import graphicImage from '../../../public/assets/png/Academy/Mask group 2.jpg';
import girlImage from '../../../public/assets/png/Academy/Mask group.jpg';
import { CourseCard } from '../../controller/components/card/CourseCard';
import { InterestCard } from '../../controller/components/card/InterestCard';
import { Footer } from '../../controller/components/surfaces/Footer/Footer';
import { NavigationRail } from '../../controller/components/surfaces/NavigationRail/NavigationRail';

const Courses: NextPage = () => {
    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div>
            <Head>
                <title>Shaper - Academy Courses</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="" />
                <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
            </Head>
            <Box component="main">
                <Box sx={{ display: { mobile: 'none', laptop: 'block' } }}>
                    <NavigationRail />
                </Box>
                <Box id="Intro" component="div" justifyContent="center" textAlign="center" p={{ mobile: '20%', desktop: '10%' }}>
                    <Box>
                        <Typography variant="h6" fontWeight="bold" color="secondary">
                            COURSES
                        </Typography>
                        <Typography variant="h3" fontWeight="bold" color="primary">
                            We&apos;re transforming education from inside-out
                        </Typography>
                        <Typography variant="h6" color="primary" mb="1%">
                            You can watch every online course for free no strings-attached
                        </Typography>
                        <Button text="Start Now" type="button" variant="contained" padding="16px 48px" />
                    </Box>
                    <Box
                        sx={{
                            top: { mobile: '200px', md: '300px', desktop: '100px' },
                            right: { md: '170px', desktop: '200px' },
                            m: { mobile: '10vw', desktop: 0 },
                        }}
                    >
                        <Image src={groupImage} alt="group" width="865.75" height="492.27" />
                    </Box>
                </Box>
                <Box id="characteristics" component="div" display="flex" flexDirection="column" gap={4} m={{ mobile: '10%' }}>
                    <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" gap="2%">
                        <Image src={girlImage} alt="girl" width="300px" height="237.85" />
                        <Box display="flex" flexDirection="column" width="500px">
                            <Typography variant="h5" color="primary" fontWeight="bold">
                                In Shaper Academy you can enjoy
                            </Typography>
                            <Typography variant="body1" color="#737373" sx={{ whiteSpace: 'pre-line' }}>
                                In Shaper Academy you can enjoy the best online courses wherever you are, without schedule.
                            </Typography>
                        </Box>
                    </Box>
                    <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" gap="2%">
                        <Image src={phoneImage} alt="phone" width="300px" height="237.85" />
                        <Box display="flex" flexDirection="column" width="500px">
                            <Typography variant="h5" color="primary" fontWeight="bold" sx={{ whiteSpace: 'pre-line' }} width={{ desktop: '500px' }}>
                                You will be able to learn the most useful methods and techniques on the market in high quality.
                            </Typography>
                            <Typography variant="body1" color="#737373" sx={{ whiteSpace: 'pre-line' }}>
                                We offer courses in different areas to let you optimize your skills with a top team of professionals.
                            </Typography>
                        </Box>
                    </Box>
                    <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" gap="2%">
                        <Image src={graphicImage} alt="graphic" width="300px" height="237.85" />
                        <Box display="flex" flexDirection="column" width="500px">
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
                <Box id="Dropdown" component="div" m={{ mobile: '0px', laptop: '200px' }}>
                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>Art & Design</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Box display="flex" flexDirection="row" justifyContent="space-evenly" flexWrap="wrap" gap={2} rowGap={2}>
                                <CourseCard />
                                <CourseCard />
                                <CourseCard />
                                <CourseCard />
                            </Box>
                            <Box display="flex" flexDirection="row" justifyContent="space-evenly" flexWrap="wrap" gap={2} rowGap={2}>
                                <CourseCard />
                                <CourseCard />
                                <CourseCard />
                                <CourseCard />
                            </Box>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>Tech</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Box display="flex" flexDirection="row" justifyContent="space-evenly" gap={2} flexWrap="wrap" rowGap={2}>
                                <CourseCard />
                                <CourseCard />
                                <CourseCard />
                                <CourseCard />
                            </Box>
                            <Box display="flex" flexDirection="row" justifyContent="space-evenly" gap={2} flexWrap="wrap" rowGap={2}>
                                <CourseCard />
                                <CourseCard />
                                <CourseCard />
                                <CourseCard />
                            </Box>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>Digital Marketing</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Box display="flex" flexDirection="row" justifyContent="space-evenly" gap={2} flexWrap="wrap" rowGap={2}>
                                <CourseCard />
                                <CourseCard />
                                <CourseCard />
                                <CourseCard />
                            </Box>
                            <Box display="flex" flexDirection="row" justifyContent="space-evenly" gap={2} flexWrap="wrap" rowGap={2}>
                                <CourseCard />
                                <CourseCard />
                                <CourseCard />
                                <CourseCard />
                            </Box>
                        </AccordionDetails>
                    </Accordion>
                </Box>
                <Box component="div" display="flex" flexDirection="row" justifyContent="center" flexWrap="wrap-reverse" m={{ mobile: '10% 10px' }}>
                    <Box display="flex" flexDirection="column" width="50%" justifyContent="space-evenly">
                        <Box>
                            <Typography variant="h5" fontWeight="bold" color="secondary">
                                OUR MEMBERSHIP
                            </Typography>
                            <Typography variant="h4" color="primary">
                                {'We help our candidates in finding new and exciting jobs'}
                            </Typography>
                            <Typography color="#737373" variant="body1" mb="2%">
                                The Shaper program offers you the opportunity to work with top companies. You can be tested by multiple employers, as
                                many as you have time to prove your skills. Our membership is designed to help you grow and succeed.
                            </Typography>
                        </Box>
                        <Button text="Suscribe" type="button" variant="contained" padding="16px 48px" />
                    </Box>
                    <Image src={girl2Image} alt="girl" width="422px" height="368px" />
                </Box>
                <Box component="div" display="flex" justifyContent="center" m="100px 0">
                    <InterestCard title={'Are you interested in looking at study careers?'} button="Apply" />
                </Box>
                <Footer />
            </Box>
        </div>
    );
};

export default Courses;
