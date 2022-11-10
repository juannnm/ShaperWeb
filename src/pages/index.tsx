import type { NextPage } from 'next';
import Head from 'next/head';
import { Box, Divider, Typography } from '@mui/material';
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
import Characters from '../../public/assets/png/Home/imagen header.png';
import { CareerCard } from '../controller/components/card/CareerCard';
import { useTheme } from '@mui/material';

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
                <Box sx={{ display: { mobile: 'none', laptop: 'block' } }}>
                    <TopAppBar bgColor="none" />
                </Box>
                <Box
                    sx={{
                        width: '100%',
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
                    <Box
                        display="flex"
                        justifyContent="center"
                        pt="10%"
                        pb="5%"
                        alignItems="center"
                        gap="10%"
                        flexDirection={{ mobile: 'column', laptop: 'row' }}
                    >
                        <Box display="flex" flexDirection="column">
                            <Typography variant="h3" color="white" fontWeight="bold">
                                EMPOWER YOUR CAREER
                            </Typography>
                            <Typography variant="h2" fontWeight="bold" color="white" textAlign="center">
                                {' '}
                                Transformation
                                <br /> by Growth.
                            </Typography>
                        </Box>
                        <Box>
                            <Image src={Characters} alt="group" height="504.5px" width="621.5px" />
                        </Box>
                    </Box>
                </Box>
                <Box component="div" id="Companies" display="flex" flexDirection="column" justifyContent="center" mt="10%" alignItems="center">
                    <Typography variant="h3" color="primary">
                        Helping clients worlwide
                    </Typography>
                    <Box
                        display="flex"
                        flexDirection="row"
                        justifyContent="space-evenly"
                        alignContent="center"
                        flexWrap="wrap"
                        gap={{ mobile: 1, laptop: 5 }}
                        mt="4%"
                    >
                        <MicrosoftLogo style={{ fontSize: '150px' }} />
                        <GoogleLogo style={{ fontSize: '150px' }} />
                        <SpotifyLogo style={{ fontSize: '150px' }} />
                        <TeslaLogo style={{ fontSize: '150px' }} />
                        <TikTokLogo style={{ fontSize: '150px' }} />
                    </Box>
                </Box>{' '}
                <Box
                    component="section"
                    id="paths"
                    mt="10%"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    flexDirection={{ mobile: 'column', laptop: 'row' }}
                >
                    <Box
                        display="flex"
                        flexDirection="row"
                        borderRadius="20px"
                        justifyContent="center"
                        flexWrap="wrap"
                        sx={{
                            background: 'linear-gradient(90deg, #9BBECF40, #DAAFE840, #FEBEC040, #FFC49E40, #FFC49E40)',
                            width: 'fit-content',
                        }}
                    >
                        <ShaperFor
                            title="start at the"
                            titleBold={{ text: 'academy', color: 'blue' }}
                            description={{
                                text: 'Watch our free courses and become an expert with our career plans.',
                                color: '#737373',
                            }}
                            background="transparent"
                            buttonColor="primary"
                            borderRadius="0px"
                        />
                        <Divider orientation="vertical" flexItem variant="middle" />
                        <ShaperFor
                            title="become a"
                            titleBold={{ text: 'tester', color: 'red' }}
                            description={{
                                text: 'Prove your skills by completing your profile and qualify for the job search that suits you.',
                                color: '#737373',
                            }}
                            background="transparent"
                            buttonColor="primary"
                            borderRadius="0px"
                        />
                        <Divider orientation="vertical" flexItem variant="middle" />
                        <ShaperFor
                            title="we help"
                            titleBold={{ text: 'companies', color: 'purple' }}
                            description={{
                                text: 'To obtain the best qualified talent in the market through our hiring platform.',
                                color: '#737373',
                            }}
                            background="transparent"
                            buttonColor="primary"
                            borderRadius="0px"
                        />
                    </Box>
                </Box>
                <Box component="section" id="events" display="flex" flexDirection="column" justifyContent="center" alignItems="center" mt="10%">
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }} color="secondary">
                        Events
                    </Typography>
                    <Typography variant="h3" sx={{ fontWeight: 'bold' }} color="primary">
                        Community meetings
                    </Typography>
                    <Box>
                        <EventList />
                    </Box>
                </Box>
                <Box
                    component="div"
                    id="learn"
                    display="flex"
                    flexDirection="column"
                    justifyContent="er"
                    alignItems="center"
                    gap={5}
                    m={{ mobile: '15px', laptop: '0px' }}
                >
                    <Box
                        display="flex"
                        flexDirection={{ mobile: 'column', laptop: 'row' }}
                        alignItems="center"
                        justifyContent="center"
                        textAlign="center"
                        mt="10%"
                        gap={2}
                    >
                        <Box display="flex" flexDirection="column">
                            <Typography variant="h6" color="secondary" fontWeight="bold">
                                LEARN AND GROW
                            </Typography>
                            <Typography variant="h4" fontWeight="bold" color="primary">
                                {'A whole new level of commitment'}
                            </Typography>
                        </Box>
                        <Typography variant="body1" color="#737373">
                            {
                                'Our team of experts will help you define your career goals and improve your skills to helpyou succeed in your job search.'
                            }
                        </Typography>
                    </Box>
                    <Box
                        display="flex"
                        flexDirection={{ mobile: 'column', laptop: 'row' }}
                        m={{ mobile: '0', laptop: '2% 10%' }}
                        gap={{ mobile: 2, laptop: 8 }}
                    >
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
                                We provide you with the most sought-after skills in a high- demand world where you can put all your knowledge into
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
                <Box component="div" id="how-it-work" display="flex" flexDirection="column" mt="10%">
                    <Box textAlign="center" display="flex" flexDirection="column" gap={2}>
                        <Typography variant="h5" fontWeight="bold" color="secondary">
                            HOW IT WORKS
                        </Typography>
                        <Typography variant="h3" fontWeight="bold" color="primary">
                            Highest standards made just for you
                        </Typography>
                        <Typography variant="body1" color="#737373">
                            You can measure your needs over time and choose between 2 options.Full-time and Part-time.
                        </Typography>
                    </Box>
                    <Box
                        display="flex"
                        flexDirection={{ mobile: 'column', laptop: 'row' }}
                        justifyContent="center"
                        mt="5%"
                        gap={{ mobile: 4, laptop: '5%' }}
                    >
                        <Box display="flex" flexDirection="column" justifyContent="space-evenly" alignItems="center" gap={{ mobile: 2, laptop: 0 }}>
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
                        <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" gap={{ mobile: 2, laptop: 5 }}>
                            <Box display="flex" justifyContent="space-evenly" width="100%">
                                <Button type="button" variant="contained" color="secondary" text="Full-time Career" />
                                <Button type="button" variant="contained" color="secondary" text="Part-time Career" />
                            </Box>
                            <CareerCard
                                title="Full-time Career"
                                description="Our full-time career is designed to fully support you and guide you through a detailed process that will give you all the answers you are looking for to be the best in your new profession."
                                hours="80"
                                background="linear-gradient(90deg, #9BBECF40, #DAAFE840, #FEBEC040, #FFC49E40, #FFC49E40)"
                            />
                        </Box>
                    </Box>
                </Box>
                <Box component="div" id="WatchandLearn" display="flex" flexDirection="row" justifyContent="center" mt="10%">
                    <Box width={{ mobile: 0, md: '500px', laptop: '500px' }}>
                        <Image src={TabletImage} alt="image" width="436px" height="271px" />
                    </Box>
                    <Box display="flex" flexDirection="column" ml="5%" justifyContent="space-between" mt="0">
                        <Box>
                            <Typography variant="h5" fontWeight="bold" color="secondary">
                                WATCH AND LEARN
                            </Typography>
                            <Typography variant="h4" fontWeight="bold" color="primary">
                                Enjoy our online
                                <br /> courses for free
                            </Typography>
                        </Box>
                        <Typography variant="body1" color="#737373">
                            Now you can learn with the best experts in the
                            <br /> sector without schedule and whenever you want,
                            <br /> no strings-attached.
                        </Typography>
                        <Button text="Watch now" type="button" variant="contained" padding="0 65px" />
                    </Box>
                </Box>
                <Box component="div" id="services" display="flex" flexDirection="column" gap={5} mt="10%">
                    <Box textAlign="center">
                        <Typography variant="h5" fontWeight="bold" color="secondary">
                            THE SERVICES WE OFFERS
                        </Typography>
                        <Typography variant="h3" fontWeight="bold" color="primary">
                            Our business perception and exceptional
                            <br /> experience give us an edge over our competitors
                        </Typography>
                        <Typography variant="h6" color="primary">
                            We analyze, explore, create and deliver.
                        </Typography>
                    </Box>
                    <Box display="flex" flexDirection="row" justifyContent="center" flexWrap="wrap" gap={2} rowGap={3}>
                        <ServiceCard
                            title="ON-Demand"
                            description="Get direct access to specialist permanent or contract talent."
                            background="#8BB5F3"
                            icon={<Cast color="primary" sx={{ fontSize: { mobile: '25px', laptop: '45px' } }} />}
                        />
                        <ServiceCard
                            title={'Project\nResource'}
                            description="Experienced teams of interim project delivery professionals to help businesses deliver complex digital solutions."
                            background="#ADD59C"
                            icon={<Settings color="primary" sx={{ fontSize: { mobile: '25px', laptop: '45px' } }} />}
                        />
                        <ServiceCard
                            title="Bootcamp"
                            description="We make sure you understand all facets of modern development techniques and technologies through our program."
                            icon={<Groups color="primary" sx={{ fontSize: { mobile: '25px', laptop: '45px' } }} />}
                            background="#FFAD94"
                        />
                        <ServiceCard
                            title="Career"
                            description="Our process ensures we match candidates with opportunities to meet your company’s culture and hiring needs."
                            icon={<Stairs color="primary" sx={{ fontSize: { mobile: '25px', laptop: '45px' } }} />}
                            background="#FFB8D1"
                        />
                    </Box>
                </Box>
                <Box
                    component="div"
                    id="membership"
                    display="flex"
                    flexDirection={{ mobile: 'column-reverse', laptop: 'row' }}
                    justifyContent="center"
                    m="10% 0"
                >
                    <Box textAlign={{ mobile: 'center', laptop: 'left' }} display="flex" flexDirection="column" justifyContent="center" gap="5%">
                        <Box>
                            <Typography variant="h6" fontWeight="bold" color="secondary">
                                GET HIRED
                            </Typography>
                            <Typography variant="h5" fontWeight="bold" color="primary" sx={{ whiteSpace: 'pre-line' }}>
                                {'New and exciting jobs'}
                            </Typography>
                            <Typography variant="body1" color="#737373" sx={{ whiteSpace: 'pre-line' }}>
                                {
                                    'We help you discover a challenging new career. Our\n platform gives you the opportunity to work with top\n companies. You can prove your skills and get hired.'
                                }
                            </Typography>
                        </Box>
                        <Button text="Suscribe" type="button" variant="contained" padding="16px 48px" />
                    </Box>
                    <Box width={{ laptop: '500px' }}>
                        <Image src={MemberImage} alt="Member" width="460px" height="411px" />
                    </Box>
                </Box>
                <Box component="div" id="options" display="flex" flexDirection="row" justifyContent="center" flexWrap="wrap" gap={5} mb="10%">
                    <ShaperFor
                        title="shaper for"
                        titleBold={{ text: 'business', color: '#3C7E1F' }}
                        description={{
                            text: 'If you are a company and would like to attract the best talent, this is your opportunity. Join Shaper Membership for business and enjoy the benefits.',
                            color: 'primary',
                        }}
                        background="#ffffff"
                        buttonColor="primary"
                        borderRadius="20px"
                    />
                    <ShaperFor
                        title="shaper for"
                        titleBold={{ text: 'universities', color: '#D2004A' }}
                        description={{
                            text: 'Are you an educational institution and want to promote your students? Shaper for universities is your best option.',
                            color: 'primary',
                        }}
                        background="#ffffff"
                        buttonColor="primary"
                        borderRadius="20px"
                    />
                </Box>
                <Box
                    component="div"
                    id="team"
                    display="flex"
                    flexDirection="row"
                    flexWrap="wrap"
                    justifyContent="center"
                    m={{ mobile: '10% 25px', laptop: '0 0  10% 0' }}
                    gap={{ mobile: 2, laptop: '5%' }}
                >
                    <Box textAlign="center">
                        <Typography variant="h6" fontWeight="bold" color="secondary">
                            TEAM WORK
                        </Typography>
                        <Typography variant="h5" fontWeight="bold" color="primary">
                            Meet the awesome nand creative members of our staff
                        </Typography>
                    </Box>
                    <Box display="flex" flexDirection="row" flexWrap="wrap" gap={3} justifyContent="center">
                        <Box>
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
                        <Box>
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
                </Box>
                <Footer />
            </Box>
        </div>
    );
};

export default Home;
