import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import {IntroCard, FullTimeCareer, ShaperFor1, Services, CourseCardEx, InterestCardEx, Certified, EventCardEx, CharacterCardEx} from '../components/Cards'
import {Box} from '@mui/material'
import { CareerCard } from '../components/card/CareerCard';
import { ShaperFor } from '../components/card/ShaperFor';
import { CourseCard } from '../components/card/CourseCard';
import { InterestCard } from '../components/card/InterestCard';
import { CertifieCard } from '../components/card/CertifieCard';
import { EventCard } from '../components/card/EventCard'
import { ServiceCard } from '../components/card/ServiceCard'
import { CharacterCard } from '../components/card/CharacterCard'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        
        <Box sx={{ padding: "10px", background: "green" }}>
          <CareerCard />
        </Box>
        <Box sx={{ padding: "10px", background: "green" }}>
          <ShaperFor />
        </Box>
        <Box sx={{ padding: "10px", background: "green" }}>
          <CourseCard />
        </Box>
        <Box sx={{ padding: "10px", background: "green" }}>
          <InterestCard />
        </Box>
        <Box sx={{ padding: "10px", background: "green" }}>
          <CertifieCard />
        </Box>
        <Box sx={{ padding: "10px", background: "green" }}>
          <EventCard />
        </Box>
        <Box sx={{ padding: "10px", background: "green" }}>
          <ServiceCard />
        </Box>
        <Box sx={{ padding: "10px", background: "green" }}>
          <CharacterCard />
        </Box>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}

export default Home
