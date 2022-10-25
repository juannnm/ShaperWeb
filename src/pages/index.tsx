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

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Shaper</title>
                <meta name="description" content="" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Box component="main" sx={{ backgroundColor: '#ccc', height: '100vh', width: '100%' }}>
                <TopAppBar />

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
