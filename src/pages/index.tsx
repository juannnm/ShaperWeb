import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Box } from '@mui/material';
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
            <Box component="main" sx={{ backgroundColor: '#ccc', width: '100%' }}>
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
                <TopAppBar />
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
