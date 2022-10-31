import type { NextPage } from 'next';
import Head from 'next/head';
import { Box, Divider, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Cast, Settings, Groups, Stairs } from '@mui/icons-material';
import TabletImage from '../../public/assets/png/Home/imagenvideos.png';
import MemberImage from '../../public/assets/png/Home/foto 3.png';
import Ella from '../../public/assets/png/Home/ella.png';
import Charlie from '../../public/assets/png/Home/charlie.png';
import Arlo from '../../public/assets/png/Home/arlo.png';
import Oliver from '../../public/assets/png/Home/oliver.png';
import { GoogleLogo, MetaLogo, MicrosoftLogo, SpotifyLogo, TeslaLogo, TikTokLogo } from '../../public/assets/svg/Home/Clients';
import { ShaperFor } from '../controller/components/card/ShaperFor';
import { ServiceCard } from '../controller/components/card/ServiceCard';
import { TopAppBar } from '../controller/components/surfaces/TopAppBar/TopAppBar';
import { Footer } from '../controller/components/surfaces/Footer/Footer';
import Image from 'next/image';
import { Button } from 'react-ui-controller';
import { EventList } from '../controller/components/data-display/EventList/EventList';

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
                <TopAppBar bgColor="none" />
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
                >
                    <Typography variant="h2" position="absolute" top={200} left={200} fontWeight="bold" color="white">
                        {' '}
                        Transformation by Growth.
                    </Typography>
                </Box>
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
                    <Typography variant="h3" color="primary">
                        Helping clients worlwide
                    </Typography>
                    <Box display="flex" flexDirection="row" justifyContent="space-evenly" alignContent="center" gap={1} mt={4}>
                        <MicrosoftLogo style={{ fontSize: '100px' }} />
                        <GoogleLogo style={{ fontSize: '100px' }} />
                        <SpotifyLogo style={{ fontSize: '100px' }} />
                        <TeslaLogo style={{ fontSize: '100px' }} />
                        <TikTokLogo style={{ fontSize: '100px' }} />
                        {/* <MetaLogo style={{ fontSize: '100px' }} /> */}
                    </Box>
                </Box>
                n
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
                {/* Here it should have a Calendar*/}
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
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }} color="secondary">
                        Events
                    </Typography>
                    <Typography variant="h4" sx={{ fontWeight: 'bold' }} color="primary">
                        Community meetings
                    </Typography>
                    <Box>
                        {/*<EventList/>*/}
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
                        <Box display="flex" flexDirection="column" mr="60px">
                            <Typography variant="h6" color="secondary" fontWeight="bold">
                                LEARN AND GROW
                            </Typography>
                            <Typography variant="h4" fontWeight="bold" color="primary" sx={{ whiteSpace: 'pre-line' }}>
                                {'A whole new level\nof commitment'}
                            </Typography>
                        </Box>
                        <Typography variant="body1" color="#737373" sx={{ whiteSpace: 'pre-line' }}>
                            {
                                'Our team of experts will help you define your\ncareer goals and improve your skills to help\nyou succeed in your job search.'
                            }
                        </Typography>
                    </Box>
                    <Box display="flex" flexDirection="row" alignItems="center" mr="10%" ml="10%" gap="5%" mt="2%">
                        <Box>
                            <Box display="flex" gap={1}>
                                <Typography variant="subtitle1" fontWeight="bold" color="secondary">
                                    01
                                </Typography>
                                <Typography variant="subtitle1" fontWeight="bold" color="primary">
                                    We love teaching remotely
                                </Typography>
                            </Box>
                            <Typography variant="body2" color="#737373">
                                A new world of possibilities will open the doors to your new life. All you need is a computer with internet access and
                                you will dive deep into new experiences that will transform your reality into growth.
                            </Typography>
                        </Box>
                        <Box>
                            <Box display="flex" gap={1}>
                                <Typography variant="subtitle1" fontWeight="bold" color="secondary">
                                    02
                                </Typography>
                                <Typography variant="subtitle1" fontWeight="bold" color="primary">
                                    Knowledge into practice
                                </Typography>
                            </Box>
                            <Typography variant="body2" color="#737373">
                                We provide you with the most sought-after skills in a high-demand world where you can put all your knowledge into
                                practice on real projects with real companies, so you can stay competitive as you start your new career.
                            </Typography>
                        </Box>
                        <Box>
                            <Box display="flex" gap={1}>
                                <Typography variant="subtitle1" fontWeight="bold" color="secondary">
                                    03
                                </Typography>
                                <Typography variant="subtitle1" fontWeight="bold" color="primary">
                                    Your new life starts now
                                </Typography>
                            </Box>
                            <Typography variant="body2" color="#737373">
                                We invest in your future so you only have to focus on what really matters. KNOWLEDGE. You do not have to pay us now,
                                just learn and when your career is completed, we will help you find your dream job, and only then will you pay us
                                back.
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Box component="div" id="how-it-work" display="flex" flexDirection="column">
                    <Box textAlign="center">
                        <Typography variant="h5" fontWeight="bold" color="secondary">
                            HOW IT WORKS
                        </Typography>
                        <Typography variant="h4" fontWeight="bold" color="primary">
                            We have created the highest standards <br />
                            for people like you
                        </Typography>
                        <Typography variant="body1" color="#737373">
                            You can measure your needs over time and choose between 2 options.Full-time and Part-time.
                        </Typography>
                    </Box>
                    <Box display="flex" flexDirection="row" justifyContent="center">
                        <Box display="flex" flexDirection="column" justifyContent="space-between" mt="70px">
                            <Box display="flex" flexDirection="row" alignItems="center">
                                <CheckCircleIcon color="secondary" />
                                <Typography variant="h6" color="primary">
                                    100% Remote
                                </Typography>
                            </Box>
                            <Box display="flex" flexDirection="row" alignItems="center">
                                <CheckCircleIcon color="secondary" />
                                <Typography variant="h6" color="primary">
                                    1:1 Support
                                </Typography>
                            </Box>
                            <Box display="flex" flexDirection="row" alignItems="center">
                                <CheckCircleIcon color="secondary" />
                                <Typography variant="h6" color="primary">
                                    Community
                                </Typography>
                            </Box>
                        </Box>
                        {/*COMPONENTE NUEVO O ALGO QUE YA EXISTE, NO LO SE, PREGUNTAR A NICO*/}
                    </Box>
                </Box>
                <Box component="div" id="WatchandLearn" display="flex" flexDirection="row" justifyContent="center">
                    <Image src={TabletImage} alt="image" width="436px" height="271px" />
                    <Box display="flex" flexDirection="column" ml="5%" justifyContent="flex-start" mt="0">
                        <Typography variant="h5" fontWeight="bold" color="secondary">
                            WATCH AND LEARN
                        </Typography>
                        <Typography variant="h4" fontWeight="bold" color="primary">
                            Enjoy our online
                            <br /> courses for free
                        </Typography>
                        <Typography variant="body1" color="#737373">
                            Now you can learn with the best experts in the
                            <br /> sector without schedule and whenever you want,
                            <br /> no strings-attached.
                        </Typography>
                        <Button text="Watch now" type="button" variant="contained" />
                    </Box>
                </Box>
                <Box component="div" id="services" display="flex" flexDirection="column" m="150px">
                    <Box textAlign="center" mb="30px">
                        <Typography variant="h5" fontWeight="bold" color="secondary">
                            THE SERVICES WE OFFERS
                        </Typography>
                        <Typography variant="h4" fontWeight="bold" color="primary">
                            Our business perception and exceptional
                            <br /> experience give us an edge over our competitors
                        </Typography>
                        <Typography variant="h6" color="primary">
                            We analyze, explore, create and deliver.
                        </Typography>
                    </Box>
                    <Box display="flex" flexDirection="row" justifyContent="center" gap="2%">
                        <ServiceCard
                            title="ON-Demand"
                            description="Get direct access to specialist permanent or contract talent."
                            background="#8BB5F3"
                            icon={<Cast color="primary" sx={{ fontSize: '45px' }} />}
                        />
                        <ServiceCard
                            title={'Project\nResource'}
                            description="Experienced teams of interim project delivery professionals to help businesses deliver complex digital solutions."
                            background="#ADD59C"
                            icon={<Settings color="primary" sx={{ fontSize: '45px' }} />}
                        />
                        <ServiceCard
                            title="Bootcamp"
                            description="Our program will ensure you understand every bit of modern development technologies and metodologies used by top-tier companies with programs designed to stay ahead of the competition."
                            icon={<Groups color="primary" sx={{ fontSize: '45px' }} />}
                            background="#FFAD94"
                        />
                        <ServiceCard
                            title="Career"
                            description="Our process ensures we match candidates with opportunities to meet your company’s culture and hiring needs."
                            icon={<Stairs color="primary" sx={{ fontSize: '45px' }} />}
                            background="#FFB8D1"
                        />
                    </Box>
                </Box>
                <Box component="div" id="membership" display="flex" flexDirection="row" justifyContent="center">
                    <Box justifyContent="left" textAlign="left" mt="70px">
                        <Typography variant="h5" fontWeight="bold" color="secondary">
                            OUR MEMBERSHIP
                        </Typography>
                        <Typography variant="h4" fontWeight="bold" color="primary" sx={{ whiteSpace: 'pre-line' }}>
                            {'We help our candidates in\nfinding new and exciting jobs'}
                        </Typography>
                        <Typography variant="body1" color="#737373" sx={{ whiteSpace: 'pre-line' }}>
                            {
                                'The Shaper program offers you the opportunity to work\nwith top companies. You can be tested by multiple\nemployers, as many as you have time to prove your\nskills. Our membership is designed to help you grow\nand succeed.'
                            }
                        </Typography>
                    </Box>
                    <Image src={MemberImage} alt="Member" width="460px" height="411px" />
                </Box>
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
                <Box component="div" id="team" display="flex" flexDirection="row" justifyContent="center" m="150px">
                    <Box>
                        <Typography variant="h5" fontWeight="bold" color="secondary">
                            TEAM WORK
                        </Typography>
                        <Typography variant="h4" fontWeight="bold" color="primary" sx={{ whiteSpace: 'pre-line' }}>
                            {' Meet the\nawesome\nand creative\nmembers of\nour staff'}
                        </Typography>
                    </Box>
                    <Box m="0 55px">
                        <Image src={Ella} alt="Ella" width="147.61px" height="217.07px" />
                        <Typography fontWeight="bold" color="primary">
                            Ella
                        </Typography>
                        <Typography color="#737373">Academy</Typography>
                    </Box>
                    <Box>
                        <Image src={Oliver} alt="Ella" width="147.61px" height="217.07px" />
                        <Typography fontWeight="bold" color="primary">
                            Oliver
                        </Typography>
                        <Typography color="#737373">Community</Typography>
                    </Box>
                    <Box m="0 55px">
                        <Image src={Arlo} alt="Ella" width="147.61px" height="217.07px" />
                        <Typography fontWeight="bold" color="primary">
                            Arlo
                        </Typography>
                        <Typography color="#737373">Careers</Typography>
                    </Box>
                    <Box>
                        <Image src={Charlie} alt="Ella" width="147.61px" height="217.07px" />
                        <Typography fontWeight="bold" color="primary">
                            Charlie
                        </Typography>
                        <Typography color="#737373">Guide</Typography>
                    </Box>
                </Box>
                <Footer />
            </Box>
        </div>
    );
};

export default Home;
