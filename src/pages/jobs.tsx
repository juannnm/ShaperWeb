import Head from 'next/head';
import { TopAppBar } from '../controller/components/surfaces/TopAppBar/TopAppBar';

const Jobs = () => {
    return (
        <div>
              <Head>
                <title>Shaper - Jobs</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="" />
                <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
            </Head>
            <TopAppBar bgColor="white" />
        </div>
    );
};

export default Jobs;
