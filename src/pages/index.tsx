import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Box, Divider, Typography } from '@mui/material';
import { MicrosoftLogo } from '../../public/assets/svg/Home/';
import { CareerCard } from '../controller/components/card/CareerCard';
import { ShaperFor } from '../controller/components/card/ShaperFor';
import { CourseCard } from '../controller/components/card/CourseCard';
import { InterestCard } from '../controller/components/card/InterestCard';
import { CertifieCard } from '../controller/components/card/CertifieCard';
import { EventCard } from '../controller/components/card/EventCard';
import { ServiceCard } from '../controller/components/card/ServiceCard';
import { CharacterCard } from '../controller/components/card/CharacterCard';
import { TopAppBar } from '../controller/components/surfaces/TopAppBar/TopAppBar';
import { Footer } from '../controller/components/surfaces/Footer/Footer';

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Shaper</title>
                <meta name="description" content="" />
                <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
            </Head>
            <Box component="main">
                <TopAppBar />
                <Box
                    sx={{
                        width: '100%',
                        height: '600px',
                        position: 'relative',
                        background: 'linear-gradient(45deg,#F17C58, #E94584, #24AADB , #27DBB1,#FFDC18, #FF3706)',
                        backgroundSize: '600% 100%',
                        animation: 'gradient 16s linear infinite',
                        animationDirection: 'alternate',
                        '@keyframes gradient': {
                            '0%': { backgroundPosition: '0%' },
                            '100%': { backgroundPosition: '100%' },
                        },
                    }}
                ></Box>
                <Box
                    component="div"
                    id="Companies"
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        textAlign: 'center',
                        m: '40px',
                    }}
                >
                    <Typography variant="h3">Helping clients worlwide</Typography>
                    <Box display="flex" flexDirection="row" justifyContent="space-evenly" alignContent="center" width="70vw" m="0 auto">
                        <MicrosoftLogo style={{ fontSize: '100px' }} />
                        <MicrosoftLogo style={{ fontSize: '100px' }} />
                        <MicrosoftLogo style={{ fontSize: '100px' }} />
                        <MicrosoftLogo style={{ fontSize: '100px' }} />
                        <MicrosoftLogo style={{ fontSize: '100px' }} />
                        <MicrosoftLogo style={{ fontSize: '100px' }} />
                    </Box>
                </Box>
                <Box component="section" id="paths" sx={{ m: '50px' }}>
                    <Box display="flex" flexDirection="row" borderRadius="20px" justifyContent="center">
                        <ShaperFor
                            title="start at the"
                            titleBold={{ text: 'academy', color: 'blue' }}
                            description="Enterate antess que nadie de los temas de negocios mas populares con nuestros cursos gratuitos"
                        />
                        <Divider orientation="vertical" flexItem variant="middle" />
                        <ShaperFor
                            title="become a"
                            titleBold={{ text: 'tester', color: 'red' }}
                            description="Crece como profesional compleando las certificaciones y agregando a tu perfil de Linkedin insignias reconocidas en la industria"
                        />
                        <Divider orientation="vertical" flexItem variant="middle" />
                        <ShaperFor
                            title="we help"
                            titleBold={{ text: 'companies', color: 'purple' }}
                            description="Crece como profesional compleando las certificaciones y agregando a tu perfil de Linkedin insignias reconocidas en la industria  "
                        />
                    </Box>
                </Box>

                {/* Here it should have a Calendar, the EventCards should be able to scroll down and the cards have a problem with padding, son listas no son cartas jeje, https://m3.material.io/components/lists/specs y https://mui.com/material-ui/react-list/#main-content */}
                <Box
                    component="section"
                    id="events"
                    sx={{
                        m: '50px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Typography variant="h6" sx={{ color: 'violet', fontWeight: 'bold' }}>
                        Events
                    </Typography>
                    <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                        Community meetings
                    </Typography>
                    <Box>
                        <Box
                            sx={{
                                mt: '40px',
                                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '40vw',
                                bgcolor: 'green',
                            }}
                        >
                            <EventCard />
                            <EventCard />
                            <EventCard />
                        </Box>
                        <Box>{/*HERE GOES THE CALENDAR*/}</Box>
                    </Box>
                </Box>
                <Box
                    component="div"
                    id="learn"
                    sx={{
                        m: '50px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Box display="flex" flexDirection="row" alignItems="center">
                        <Box display="flex" flexDirection="column">
                            <Typography variant="h6" color="violet">
                                LEARN AND GROW
                            </Typography>
                            <Typography variant="h4">
                                A whole new level
                                <br /> of commitment
                            </Typography>
                        </Box>
                        <Typography variant="body1">
                            Our team of experts will help you define your <br />
                            career goals and improve your skills to help
                            <br /> you succeed in your job search.
                        </Typography>
                    </Box>
                    <Box display="flex" flexDirection="row">
                        <Box>
                            <Typography>We love teaching remotely</Typography>
                            <Typography>
                                A new world of possibilities will open the doors to your new life. All you need is a computer with internet access and
                                you will dive deep into new experiences that will transform your reality into growth.
                            </Typography>
                        </Box>
                        <Box>
                            <Typography>Knowledge into practice</Typography>
                            <Typography>
                                We provide you with the most sought-after skills in a high-demand world where you can put all your knowledge into
                                practice on real projects with real companies, so you can stay competitive as you start your new career.
                            </Typography>
                        </Box>
                        <Box>
                            <Typography>Your new life starts now</Typography>
                            <Typography>
                                We invest in your future so you only have to focus on what really matters. KNOWLEDGE. You do not have to pay us now,
                                just learn and when your career is completed, we will help you find your dream job, and only then will you pay us
                                back.
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Box></Box>
                <Box></Box>
                <Box></Box>
                <Box></Box>
                <Box></Box>
                <Box></Box>
                <Footer />
                {/* <Box sx={{ padding: '10px', background: 'green' }}>
                    <CareerCard />
                </Box>
                <Box sx={{ padding: '10px', background: 'green' }}>
                    <ShaperFor />
                </Box>
                <Box sx={{ padding: '10px', background: 'green' }}>
                    <CourseCard />
                </Box>
                <Box sx={{ padding: '10px', background: 'green' }}>
                    <InterestCard />
                </Box>
                <Box sx={{ padding: '10px', background: 'green' }}>
                    <CertifieCard />
                </Box>
                <Box sx={{ padding: '10px', background: 'green' }}>
                    <EventCard />
                </Box>
                <Box sx={{ padding: '10px', background: 'green' }}>
                    <ServiceCard />
                </Box>
                <Box sx={{ padding: '10px', background: 'green' }}>
                    <CharacterCard />
                </Box> */}
            </Box>
        </div>
    );
};

export default Home;
