import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import Head from 'next/head';
import { TopAppBar } from '../controller/components/surfaces/TopAppBar/TopAppBar';
import {
    StarBorderRounded,
    SettingsOutlined,
    PersonSearchOutlined,
    TimelineOutlined,
    CreditCardOutlined,
    TrendingDownRounded,
} from '@mui/icons-material';
import { Footer } from '../controller/components/surfaces/Footer/Footer';

const Businesses = () => {
    return (
        <div>
            <Head>
                <title>Shaper - Businesses</title>
                <meta name="description" content="" />
                <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
            </Head>
            <Box component="main" sx={{ background: 'linear-gradient(180deg, #050E3F 0%, #A54CDB 100%);' }}>
                <TopAppBar bgColor="none" />
                <Box display="flex" justifyContent="center" pt="10%">
                    <Box display="flex" flexDirection="column">
                        <Typography variant="h6">COMPANIES</Typography>
                        <Typography variant="h5">
                            We help clients attract, hire, and
                            <br /> retain best in-class candidates
                            <br /> worldwide.
                        </Typography>
                        <Typography align="justify" sx={{ whiteSpace: 'pre-line' }}>
                            {
                                'Refer your job directly to highly committed members or even juniors\n looking for their first job. Our team is constantly training its candidates\n to keep up with new  and technologies so they can meet your\n needs and be committed to your business. We will post a confidential\n project that meets your requirements to prove how hard our candidates\n work, and you can evaluate them in the process. This way you get a job\n well done and new candidates for your company.'
                            }
                        </Typography>
                    </Box>
                </Box>
                <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                    <Box display="flex" alignItems="center">
                        <Box display="flex" justifyContent="center" alignItems="center">
                            <StarBorderRounded sx={{ fontSize: '150px' }} />
                        </Box>
                        <Box>
                            <Typography variant="h6">Project Discovery</Typography>
                            <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>
                                {
                                    "It's pretty simple. You just need to tell us what you want to\n develop and we will do everything to make your project\nsuccessful."
                                }
                            </Typography>
                        </Box>
                    </Box>
                    <Box display="flex" alignItems="center">
                        <Box display="flex" justifyContent="center" alignItems="center">
                            <SettingsOutlined sx={{ fontSize: '150px' }} />
                        </Box>
                        <Box>
                            <Typography variant="h6">Project Manager</Typography>
                            <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>
                                {"Now we'll assign you one of our project managers to assist\n you with your candidate search."}
                            </Typography>
                        </Box>
                    </Box>
                    <Box display="flex" alignItems="center">
                        <Box display="flex" justifyContent="center" alignItems="center">
                            <PersonSearchOutlined sx={{ fontSize: '150px' }} />
                        </Box>
                        <Box>
                            <Typography variant="h6">Candidates Selection</Typography>
                            <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>
                                {
                                    'You will discover a great deal of candidates with different\n expertises, it is up to you to choose the best options from\n your application module to turn ideas into action.'
                                }
                            </Typography>
                        </Box>
                    </Box>
                    <Box display="flex" alignItems="center">
                        <Box display="flex" justifyContent="center" alignItems="center">
                            <TimelineOutlined sx={{ fontSize: '150px' }} />
                        </Box>
                        <Box>
                            <Typography variant="h6">Measure Results</Typography>
                            <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>
                                {
                                    'You will track your daily progress on our online academic\n campus so you do not have to waste time and money on real\n solutions.'
                                }
                            </Typography>
                        </Box>
                    </Box>
                    <Box display="flex" alignItems="center">
                        <Box display="flex" justifyContent="center" alignItems="center">
                            <CreditCardOutlined sx={{ fontSize: '150px' }} />
                        </Box>
                        <Box>
                            <Typography variant="h6">Safe Payment</Typography>
                            <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>
                                {
                                    'You do not have to pay us until your project is complete\n and satisfied with the results. If you are happy, so are\n we.'
                                }
                            </Typography>
                        </Box>
                    </Box>
                    <Box display="flex" alignItems="center">
                        <Box display="flex" justifyContent="center" alignItems="center">
                            <TrendingDownRounded sx={{ fontSize: '150px' }} />
                        </Box>
                        <Box>
                            <Typography variant="h6">Reduces Hiring Risk</Typography>
                            <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>
                                {'Hiring young talent after they have developed projects with\n you, saves you time and money.'}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Box display="flex" justifyContent="center">
                    <Box display="flex" flexDirection="column">
                        <Typography variant="h6">UNIVERSITIES</Typography>
                        <Typography variant="h5" sx={{ whiteSpace: 'pre-line' }}>
                            {'We help clients attract, hire, and retain\n best in-class candidates worldwide.'}
                        </Typography>
                        <Typography align="justify" sx={{ whiteSpace: 'pre-line' }}>
                            {
                                'Keep your students up to date on the latest job openings and find\n them a new, exciting role. By joining our network, your students will\n be exposed to some of the best employers in the industry.\n They can showcase their skills in confidential projects to promote\n them to their potential new employer and start a new career path.'
                            }
                        </Typography>
                    </Box>
                </Box>
                <Box display="flex" justifyContent="center">
                    <Box display="flex" flexDirection="column">
                        <Typography variant="h5" sx={{ whiteSpace: 'pre-line' }}>
                            {'Drive value and growth'}
                        </Typography>
                        <Typography align="justify" sx={{ whiteSpace: 'pre-line' }}>
                            {
                                'Benefit from innovative teaching and credentials that\n employers value - all with the flexibility and value they\n need for their first practice.'
                            }
                        </Typography>
                    </Box>
                </Box>
                <Box display="flex" justifyContent="center">
                    <Box display="flex" flexDirection="column">
                        <Typography variant="h6">MEMBERSHIP</Typography>
                        <Typography variant="h5" sx={{ whiteSpace: 'pre-line' }}>
                            {'FOR BUSINESS'}
                        </Typography>
                        <Typography align="justify" sx={{ whiteSpace: 'pre-line' }}>
                            {
                                'Offers suppliers the opportunity to increase brand\n awareness and collaborate with a range of stakeholders\n to drive value and growth. Our membership offers\n several benefits for your business.'
                            }
                        </Typography>
                    </Box>
                </Box>
                <Box display="flex" justifyContent="center">
                    <Box display="flex" flexDirection="column">
                        <Typography variant="h6">TESTIMONIAL</Typography>
                        <Typography variant="h5" sx={{ whiteSpace: 'pre-line' }}>
                            {'You still hesitate about studying with us?\n Check what they say about us'}
                        </Typography>
                    </Box>
                </Box>
                <Footer />
            </Box>
        </div>
    );
};

export default Businesses;
