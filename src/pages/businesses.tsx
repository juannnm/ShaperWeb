import {
    CreditCardOutlined,
    PersonSearchOutlined,
    SettingsOutlined,
    StarBorderRounded,
    TimelineOutlined,
    TrendingDownRounded,
    Menu,
} from '@mui/icons-material';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import Head from 'next/head';
import Image from 'next/image';
import Boy from '../../public/assets/png/businesses/boy.png';
import Pc from '../../public/assets/png/businesses/pc.png';
import BeCreative from '../../public/assets/png/businesses/be-creative.png';
import Woman from '../../public/assets/png/businesses/women.png';
import ReadyForWork from '../../public/assets/png/businesses/ready-for-work.png';
import Network from '../../public/assets/png/businesses/network.png';
import { Footer } from '../controller/components/surfaces/Footer/Footer';
import { NavigationRail } from '../controller/components/surfaces/NavigationRail/NavigationRail';
import { IconButton } from 'react-ui-controller';
import { LogoShaperBusinessWhite, ShaperWhite } from '../../public/assets/svg/logo';

const Businesses = () => {
    return (
        <div>
            <Head>
                <title>Shaper - Businesses</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="" />
                <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
            </Head>
            <Box
                component="main"
                sx={{
                    background: 'linear-gradient(180deg, #050E3F 0%, #A54CDB 100%);',
                }}
            >
                <Box display={{ mobile: 'none', laptop: 'block' }}>
                    <NavigationRail />
                </Box>
                <Box display={{ mobile: 'flex', laptop: 'none' }} p="20px" alignItems="center" gap={2}>
                    <IconButton color="background">
                        <Menu fontSize="large" />
                    </IconButton>
                    <ShaperWhite style={{ fontSize: '80px', marginTop: '4px' }} />
                </Box>
                <Box ml={{ mobile: 0, laaptop: '100px' }}>
                    <Box
                        display="flex"
                        justifyContent="center"
                        pt="10%"
                        alignItems="center"
                        pb="10%"
                        flexWrap={{ mobile: 'wrap-reverse', laptop: 'nowrap' }}
                        m={{ mobile: '0 10%' }}
                    >
                        <Box display="flex" flexDirection="column" width={{ mobile: '100%', laptop: '50%' }}>
                            <Typography variant="h6" color="secondary" fontWeight="bold">
                                COMPANIES
                            </Typography>
                            <Typography variant="h5" color="white" fontWeight="bold">
                                We help clients attract best in-class candidates worldwide.
                            </Typography>
                            <Typography align="justify" color="white">
                                Refer your job-hunting needs to highly committed members or even juniors looking for their first job. We will post a
                                confidential project that meets your needs to prove how hard they work and evaluate them in the process. This way you
                                get real-work data and new candidates for your company.
                            </Typography>
                        </Box>
                        <Box>
                            <Image src={Woman} alt="woman" width="500px" height="350px" />
                        </Box>
                    </Box>
                    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" gap={10} pb="10%" m={{ mobile: '0 5%' }}>
                        <Box display="flex" alignItems="center" gap="10%">
                            <Box
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                bgcolor="rgba(255,255,255,.40)"
                                borderRadius="15px"
                                sx={{
                                    backdropFilter: 'blur(10px)',
                                    WebkitBackdropFilter: 'blur(10px)',
                                }}
                            >
                                <StarBorderRounded sx={{ fontSize: { mobile: '100px', laptop: '100px' }, color: '#8BB5F3' }} />
                            </Box>
                            <Box maxWidth={600}>
                                <Typography variant="h6" fontWeight="bold" color="white">
                                    Project Discovery
                                </Typography>
                                <Typography variant="body1" color="white">
                                    It&apos;s pretty simple. You just need to tell us what you want to develop and we will do everything to make your
                                    project successful.
                                </Typography>
                            </Box>
                        </Box>
                        <Box display="flex" alignItems="center" gap="10%">
                            <Box
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                bgcolor="rgba(255,255,255,.40)"
                                borderRadius="15px"
                                sx={{
                                    backdropFilter: 'blur(10px)',
                                    WebkitBackdropFilter: 'blur(10px)',
                                }}
                            >
                                <SettingsOutlined sx={{ fontSize: '100px', color: '#D8A2F1' }} />
                            </Box>
                            <Box maxWidth={600}>
                                <Typography variant="h6" color="white" fontWeight="bold">
                                    Project Manager
                                </Typography>
                                <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }} color="white">
                                    Now we&apos;ll assign you one of our project managers to assist you with your candidate search.
                                </Typography>
                            </Box>
                        </Box>
                        <Box display="flex" alignItems="center" gap="10%">
                            <Box
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                bgcolor="rgba(255,255,255,.40)"
                                borderRadius="15px"
                                sx={{
                                    backdropFilter: 'blur(10px)',
                                    WebkitBackdropFilter: 'blur(10px)',
                                }}
                            >
                                <PersonSearchOutlined sx={{ fontSize: '100px', color: '#FFB8D1' }} />
                            </Box>
                            <Box maxWidth={600}>
                                <Typography variant="h6" color="white" fontWeight="bold">
                                    Candidates Selection
                                </Typography>
                                <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }} color="white">
                                    You will discover a great deal of candidates with different expertises, it is up to you to choose the best options
                                    from your application module to turn ideas into action.
                                </Typography>
                            </Box>
                        </Box>
                        <Box display="flex" alignItems="center" gap="10%">
                            <Box
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                bgcolor="rgba(255,255,255,.40)"
                                borderRadius="15px"
                                sx={{
                                    backdropFilter: 'blur(10px)',
                                    WebkitBackdropFilter: 'blur(10px)',
                                }}
                            >
                                <TimelineOutlined sx={{ fontSize: '100px', color: '#FFAD94' }} />
                            </Box>
                            <Box maxWidth={600}>
                                <Typography variant="h6" color="white" fontWeight="bold">
                                    Measure Results
                                </Typography>
                                <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }} color="white">
                                    You will track your daily progress on our online academic campus so you do not have to waste time and money on
                                    real solutions.
                                </Typography>
                            </Box>
                        </Box>
                        <Box display="flex" alignItems="center" gap="10%">
                            <Box
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                bgcolor="rgba(255,255,255,.40)"
                                borderRadius="15px"
                                sx={{
                                    backdropFilter: 'blur(10px)',
                                    WebkitBackdropFilter: 'blur(10px)',
                                }}
                            >
                                <CreditCardOutlined sx={{ fontSize: '100px', color: '#FFE3A2' }} />
                            </Box>
                            <Box maxWidth={600}>
                                <Typography variant="h6" color="white" fontWeight="bold">
                                    Safe Payment
                                </Typography>
                                <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }} color="white">
                                    You do not have to pay us until your project is complete and satisfied with the results. If you are happy, so are
                                    we.
                                </Typography>
                            </Box>
                        </Box>
                        <Box display="flex" alignItems="center" gap="10%">
                            <Box
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                bgcolor="rgba(255,255,255,.40)"
                                borderRadius="15px"
                                sx={{
                                    backdropFilter: 'blur(10px)',
                                    WebkitBackdropFilter: 'blur(10px)',
                                }}
                            >
                                <TrendingDownRounded sx={{ fontSize: '100px', color: '#ADD59C' }} />
                            </Box>
                            <Box maxWidth={600}>
                                <Typography variant="h6" color="white" fontWeight="bold">
                                    Reduces Hiring Risk
                                </Typography>
                                <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }} color="white">
                                    {'Hiring young talent after they have developed projects with you, saves you time and money.'}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        flexWrap={{ mobile: 'wrap-reverse', laptop: 'nowrap' }}
                        m={{ mobile: '0 10%' }}
                    >
                        <Box display="flex" flexDirection="column" width={{ mobile: '100%', laptop: '50%' }}>
                            <Typography variant="h6" color="white" fontWeight="bold">
                                UNIVERSITIES
                            </Typography>
                            <Typography variant="h5" sx={{ whiteSpace: 'pre-line' }} color="white">
                                Let&apos;s your students step up.
                            </Typography>
                            <Typography align="justify" sx={{ whiteSpace: 'pre-line' }} color="white">
                                Students can join our network to start a new career path and meet some of the best employers in the industry by
                                applying for internships, apprenticeships and graduate placements.
                            </Typography>
                        </Box>
                        <Image src={Boy} alt="boy" />
                    </Box>
                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        gap="10%"
                        m={{ mobile: '10%', desktop: '10% 0' }}
                        flexDirection={{ mobile: 'column', laptop: 'row' }}
                    >
                        <Box display="flex" flexDirection="column" width={{ mobile: '100%', laptop: '30%' }}>
                            <Typography variant="h5" color="white" fontWeight="bold">
                                Drive value and growth
                            </Typography>
                            <Typography align="justify" color="white">
                                Benefit from innovative teaching and credentials that employers value - all with the flexibility and value they need
                                for their first practice.
                            </Typography>
                        </Box>
                        <Box display={{ mobile: 'none', laptop: 'block' }}>
                            <Image src={Pc} alt="pc" height="300px" width="300px" />
                        </Box>
                    </Box>
                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        gap="10%"
                        m={{ mobile: '10%', desktop: '10% 0' }}
                        flexDirection={{ mobile: 'column', laptop: 'row' }}
                    >
                        <Box display={{ mobile: 'none', laptop: 'block' }}>
                            <Image src={BeCreative} alt="pc" height="300px" width="300px" />
                        </Box>
                        <Box display="flex" flexDirection="column" width={{ mobile: '100%', laptop: '30%' }}>
                            <Typography variant="h5" color="white" fontWeight="bold">
                                Be creative and stay positive
                            </Typography>
                            <Typography align="justify" color="white">
                                Shaper education introduces students to new research and technology. Studying our programs encourages creative and
                                independent thinking.
                            </Typography>
                        </Box>
                    </Box>
                    <Box display="flex" justifyContent="center" alignItems="center" gap="10%" m={{ mobile: '10%', desktop: '10% 0' }}>
                        <Box display="flex" flexDirection="column" width={{ mobile: '100%', laptop: '30%' }}>
                            <Typography variant="h5" color="white" fontWeight="bold">
                                Ready for work
                            </Typography>
                            <Typography align="justify" color="white">
                                Our team of experts will show you how to put all these skills into practise. This will help you overcome intellectual
                                challenges and have a sense of achievement.
                            </Typography>
                        </Box>
                        <Box display={{ mobile: 'none', laptop: 'block' }}>
                            <Image src={ReadyForWork} alt="pc" height="300px" width="300px" />
                        </Box>
                    </Box>
                    <Box display="flex" justifyContent="center" alignItems="center" gap="10%" m={{ mobile: '10%', desktop: '10% 0' }}>
                        <Box display={{ mobile: 'none', laptop: 'block' }}>
                            <Image src={Network} alt="pc" height="300px" width="300px" />
                        </Box>
                        <Box display="flex" flexDirection="column" width={{ mobile: '100%', laptop: '30%' }}>
                            <Typography variant="h5" color="white" fontWeight="bold">
                                Build a strong network
                            </Typography>
                            <Typography align="justify" color="white">
                                Meet friends and mentors who will become future contacts and colleagues.
                            </Typography>
                        </Box>
                    </Box>
                    <Box display="flex" justifyContent="center" m={{ mobile: '10%', desktop: '10% 0' }}>
                        <Box display="flex" flexDirection="column">
                            <Typography variant="h6" color="white" fontWeight="bold">
                                TESTIMONIAL
                            </Typography>
                            <Typography variant="h5" sx={{ whiteSpace: 'pre-line' }} color="white">
                                {'You still hesitate about studying with us?\n Check what they say about us'}
                            </Typography>
                        </Box>
                    </Box>
                    <Footer />
                </Box>
            </Box>
        </div>
    );
};

export default Businesses;
