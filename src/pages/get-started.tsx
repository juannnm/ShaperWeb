import { ArrowBack } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import Head from 'next/head';
import Image from 'next/image';
import { Button, Carrousel, IconButton } from 'react-ui-controller';
import Apply from '../../public/assets/png/Membership/apply.png';
import frame6Image from '../../public/assets/png/Membership/6.png';
import frame5Image from '../../public/assets/png/Membership/Frame 1171274857.png';
import graphics2 from '../../public/assets/png/Membership/Frame 255.png';
import graphics from '../../public/assets/png/Membership/Frame 294.png';
import GirlMembership from '../../public/assets/png/membership/girl.png';
import groupImage from '../../public/assets/png/Membership/group.png';
import PeopleMembership from '../../public/assets/png/membership/people.png';
import { ShaperFor } from '../controller/components/card/ShaperFor';
import { Footer } from '../controller/components/surfaces/Footer/Footer';
import { NavigationRail } from '../controller/components/surfaces/NavigationRail/NavigationRail';

const Membership = () => {
    const cards = [
        <Box display="flex" justifyContent="center" p="5%" bgcolor="#050E3F" key="member">
            <Box display="flex" flexDirection={{ mobile: 'column', laptop: 'row' }}>
                <Box mt={{ mobile: '10%' }}>
                    <Image src={groupImage} alt="group" height="300px" width="400px" />
                </Box>
                <Box display="flex" flexDirection="column" ml="150px" mt="74px" m={{ mobile: '30px', laptop: '74px 0 0 150px' }}>
                    <Typography variant="h6" color="white" fontWeight="bold">
                        1. BECOME A MEMBER OF OUR COMMUNITY
                    </Typography>
                    <Typography variant="body1" align="justify" color="white">
                        Realize your goals, build your profile and earn certifications to prove your worth.
                    </Typography>
                </Box>
            </Box>
        </Box>,
        <Box display="flex" justifyContent="center" p="5%" bgcolor="#050E3F" key="senior">
            <Box display="flex" flexDirection={{ mobile: 'column', laptop: 'row' }}>
                <Box mt={{ mobile: '10%' }}>
                    <Image src={graphics} alt="apply" height="300px" width="500px" />
                </Box>
                <Box display="flex" flexDirection="column" ml="150px" mt="74px" m={{ mobile: '30px', laptop: '74px 0 0 150px' }}>
                    <Typography variant="h6" color="white" fontWeight="bold">
                        2. THERE IS NO SENIOR WITHOUT A JUNIOR
                    </Typography>
                    <Typography variant="body1" align="justify" color="white">
                        If you are an experienced professional, there are many opportunities that fit your profile; however, if you are just starting
                        out, do not worry. We will be by your side.
                    </Typography>
                </Box>
            </Box>
        </Box>,
        <Box display="flex" justifyContent="center" p="5%" bgcolor="#050E3F" key="job">
            <Box display="flex" flexDirection={{ mobile: 'column', laptop: 'row' }}>
                <Box mt={{ mobile: '10%' }}>
                    <Image src={Apply} alt="graphics" height="300px" width="500px" />
                </Box>
                <Box display="flex" flexDirection="column" ml="150px" mt="74px" m={{ mobile: '30px', laptop: '74px 0 0 150px' }}>
                    <Typography variant="h6" color="white" fontWeight="bold">
                        3. JOB OPPORTUNITIES
                    </Typography>
                    <Typography variant="body1" align="justify" color="white">
                        You can apply to qualified job searches and prove your skills to be selected for the position sought by the employer.
                    </Typography>
                </Box>
            </Box>
        </Box>,
        <Box display="flex" justifyContent="center" p="5%" bgcolor="#050E3F" key="measure">
            <Box display="flex" flexDirection={{ mobile: 'column', laptop: 'row' }}>
                <Box mt={{ mobile: '10%' }}>
                    <Image src={graphics2} alt="graphics" height="300px" width="500px" />
                </Box>
                <Box display="flex" flexDirection="column" ml="150px" mt="74px" m={{ mobile: '30px', laptop: '74px 0 0 150px' }}>
                    <Typography variant="h6" color="white" fontWeight="bold">
                        4. MEASURE YOUR ABILITIES
                    </Typography>
                    <Typography variant="body1" align="justify" color="white">
                        Do not worry if you do not get selected right away, because you will know what you need to improve so you can stand out next
                        time.
                    </Typography>
                </Box>
            </Box>
        </Box>,
        <Box display="flex" justifyContent="center" p="5%" bgcolor="#050E3F" key="moment">
            <Box display="flex" flexDirection={{ mobile: 'column', laptop: 'row' }}>
                <Box>
                    <Image src={frame5Image} alt="graphics" height="400px" width="400px" />
                </Box>
                <Box display="flex" flexDirection="column" ml="150px" mt="74px" m={{ mobile: '30px', laptop: '74px 0 0 150px' }}>
                    <Typography variant="h6" color="white" fontWeight="bold">
                        5. TO THE LAST MOMENT
                    </Typography>
                    <Typography variant="body1" align="justify" color="white">
                        Our selection team will guide you from the beginning of the process until you are hired.
                    </Typography>
                </Box>
            </Box>
        </Box>,
        <Box display="flex" justifyContent="center" p="5%" bgcolor="#050E3F" key="money">
            <Box display="flex" flexDirection={{ mobile: 'column', laptop: 'row' }}>
                <Box>
                    <Image src={frame6Image} alt="graphics" height="400px" width="500px" />
                </Box>
                <Box display="flex" flexDirection="column" ml="150px" mt="74px" m={{ mobile: '30px', laptop: '74px 0 0 150px' }}>
                    <Typography variant="h6" color="white" fontWeight="bold">
                        6. DON’T WORRY ABOUT MONEY
                    </Typography>
                    <Typography variant="body1" align="justify" color="white">
                        We will only get paid when you get a job.
                    </Typography>
                </Box>
            </Box>
        </Box>,
    ];
    return (
        <div>
            <Head>
                <title>Shaper - Memberships</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="" />
                <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
            </Head>
            <Box component="main">
                <NavigationRail bgColor="white" />

                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    p={{ mobile: '40% 10%', laptop: '10% 0' }}
                    flexWrap={{ mobile: 'wrap-reverse' }}
                >
                    <Box display="flex" flexDirection="column" width="30%" m=" 0 10%">
                        <Typography variant="h6" fontWeight="bold" color="primary">
                            A new life is here.
                        </Typography>
                        <Typography variant="body1" color="primary" width="65%">
                            You can join our testing program to unlock skills, become known by top companies and get hired.
                        </Typography>
                    </Box>
                    <Image src={PeopleMembership} alt="people" />
                </Box>
                <Box bgcolor="#050E3F" ml="100px">
                    <Carrousel
                        cards={cards}
                        arrow={
                            <IconButton>
                                <ArrowBack sx={{ color: '#FFFFFF' }} fontSize="large" />
                            </IconButton>
                        }
                        timeout={5000}
                        height="600px"
                    />
                </Box>
                <Box
                    display="flex"
                    justifyContent="center"
                    m={{ mobile: '40% 10%', laptop: '10% 0 10% 10%' }}
                    gap="2%"
                    alignItems="center"
                    flexWrap={{ mobile: 'wrap-reverse' }}
                >
                    <Box display="flex" flexDirection="column" justifyContent="flex-start" width="400px">
                        <Typography variant="h6" color="secondary" fontWeight="bold">
                            OUR MEMBERSHIP
                        </Typography>
                        <Typography variant="h5" color="primary" fontWeight="bold">
                            New and exciting jobs
                        </Typography>
                        <Typography variant="body1" align="justify" color="#737373" mb="5%">
                            Our platform gives you the opportunity to work with top companies. Prove your skills and get hired.
                        </Typography>
                        <Button text="Suscribe" type="button" variant="contained" size="medium" padding="16px 48px" />
                    </Box>
                    <Image src={GirlMembership} alt="girl" />
                </Box>
                <Box display="flex" justifyContent="center" mb="10%">
                    <Box
                        component="div"
                        id="options"
                        display="flex"
                        flexDirection="row"
                        justifyContent="center"
                        gap={{ mobile: 2, laptop: 2 }}
                        flexWrap="wrap"
                        ml="10%"
                    >
                        <ShaperFor
                            background="#050E3F"
                            title="shaper for"
                            titleBold={{ text: 'business', color: '#3C7E1F' }}
                            description={{
                                text: 'If you are a company and would like to attract the best talent, this is your opportunity. Join Shaper Membership for business and enjoy the benefits.',
                                color: 'white',
                            }}
                            buttonColor="secondary"
                            borderRadius="20px"
                        />
                        <ShaperFor
                            background="#050E3F"
                            title="shaper for"
                            titleBold={{ text: 'universities', color: '#FF9CBF' }}
                            description={{
                                text: 'Are you an educational institution and want to promote your students? Shaper for universities is your best option.',
                                color: 'white',
                            }}
                            buttonColor="secondary"
                            borderRadius="20px"
                        />
                    </Box>
                </Box>
                <Footer />
            </Box>
        </div>
    );
};

export default Membership;
