import { TopAppBar } from '../controller/components/surfaces/TopAppBar/TopAppBar';
import Head from 'next/head';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { Footer } from '../controller/components/surfaces/Footer/Footer';
import Ella from '../../public/assets/png/About us/ELLA.png';
import Arlo from '../../public/assets/png/About us/ARLO.png';
import Charlie from '../../public/assets/png/About us/CHARLIE.png';
import Oliver from '../../public/assets/png/About us/OLIVER.png';
import GroupImage from '../../public/assets/png/About us/Rectangle 2633.png';

const AboutUs = () => {
    return (
        <div>
            <Head>
                <title>Shaper - About Us</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="" />
                <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
            </Head>
            <Box>
                <TopAppBar bgColor="white" />
                <Box component="div" id="intro" display="flex" flexDirection="column" justifyContent="center" textAlign="center" mt="200px">
                    <Typography variant="h5" fontWeight="bold" color="secondary">
                        TITULO
                    </Typography>
                    <Typography variant="h4" fontWeight="bold" color="primary">
                        Evolution-Transcendences-
                        <br />
                        Growth-Innovation
                    </Typography>
                    <Typography m="20px" color="#737373">
                        elit est. tincidunt malesuada hendrerit Nam nisi faucibus nec elit. nulla, sodales. tincidunt
                        <br /> Donec tortor. vitae consectetur placerat in Lorem tempor
                        <br /> Sed odio Praesent tempor malesuada fringilla ex id dui. convallis. Praesent risus ipsum{' '}
                    </Typography>
                    <Typography mt="50px" color="#737373">
                        Ut quam facilisis Nam sit quis Vestibulum vehicula, eget sit maximus non facilisis scelerisque
                        <br /> sed ipsum vitae eget est. amet, faucibus quis eget malesuada malesuada elit lorem. sit id nisl.
                        <br /> tincidunt tincidunt ex quis facilisis tincidunt{' '}
                    </Typography>
                </Box>
                <Box component="div" id="team" textAlign="center" mt="70px">
                    <Typography variant="h5" fontWeight="bold" color="secondary">
                        MEET THE TEAM
                    </Typography>
                    <Typography variant="h6" color="#737373">
                        elit est. tincidunt malesuada hendrerit Nam nisi faucibus nec elit. nulla, sodales. tincidunt
                        <br /> Donec tortor. vitae consectetur placerat in Lorem tempor Sed odio Praesent tempor malesuada
                        <br /> fringilla ex id dui. convallis. Praesent risus ipsum{' '}
                    </Typography>
                    <Box mb="5%" mt="5%">
                        <Image src={Oliver} alt="character" width="228px" height="236.62px" />
                        <Image src={Arlo} alt="character" width="228px" height="236.62px" />
                        <Image src={Charlie} alt="character" width="228px" height="236.62px" />
                        <Image src={Ella} alt="character" width="228px" height="236.62px" />
                    </Box>
                </Box>
                <Box component="div" id="values" width="70vw" m="50px 300px" textAlign="center">
                    <Typography variant="h5" color="secondary" fontWeight="bold">
                        OUR VALUES
                    </Typography>
                    <Typography variant="h4" color="primary" fontWeight="bold">
                        Titulo que represente nuestros valores
                    </Typography>
                    <Box display="flex" flexDirection="row" textAlign="left" mt="30px" alignItems="center">
                        <Box
                            sx={{
                                bgcolor: '#8BB5F3',
                                borderRadius: '100px 0 0 100px',
                                width: '100px',
                                height: '100px',
                                mr: '15px',
                            }}
                        ></Box>
                        <Box>
                            <Typography variant="h6" fontWeight="bold" color="primary">
                                MISSION
                            </Typography>
                            <Typography variant="body1" color="#737373">
                                non non at, porta maximus tortor. nisl. elementum porta varius non placerat ullamcorper vel leo. quis dui. cursus
                                placerat.{' '}
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                bgcolor: '#FFB8D1',
                                borderRadius: '100px 0 0 100px',
                                width: '100px',
                                height: '100px',
                                mr: '15px',
                            }}
                        ></Box>
                        <Box>
                            <Typography variant="h6" fontWeight="bold" color="primary">
                                MISSION
                            </Typography>
                            <Typography color="#737373">
                                non non at, porta maximus tortor. nisl. elementum porta varius non placerat ullamcorper vel leo. quis dui. cursus
                                placerat.{' '}
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                bgcolor: '#ADD59C',
                                borderRadius: '100px 0 0 100px',
                                width: '100px',
                                height: '100px',
                            }}
                        ></Box>
                        <Box>
                            <Typography variant="h6" color="primary" fontWeight="bold">
                                MISSION
                            </Typography>
                            <Typography color="#737373">
                                non non at, porta maximus tortor. nisl. elementum porta varius non placerat ullamcorper vel leo. quis dui. cursus
                                placerat.{' '}
                            </Typography>
                        </Box>
                    </Box>
                    <Box display="flex" flexDirection="row" textAlign="left" mt="30px">
                        <Box
                            sx={{
                                bgcolor: '#FFAD94',
                                borderRadius: '100px 0 0 100px',
                                width: '100px',
                                height: '100px',
                            }}
                        ></Box>
                        <Box>
                            <Typography variant="h6" color="primary" fontWeight="bold">
                                MISSION
                            </Typography>
                            <Typography color="#737373">
                                non non at, porta maximus tortor. nisl. elementum porta varius non placerat ullamcorper vel leo. quis dui. cursus
                                placerat.{' '}
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                bgcolor: '#FFE3A2',
                                borderRadius: '100px 0 0 100px',
                                width: '100px',
                                height: '100px',
                            }}
                        ></Box>
                        <Box>
                            <Typography variant="h6" color="primary" fontWeight="bold">
                                MISSION
                            </Typography>
                            <Typography color="#737373">
                                non non at, porta maximus tortor. nisl. elementum porta varius non placerat ullamcorper vel leo. quis dui. cursus
                                placerat.{' '}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Box component="div" id="goal" justifyContent="center" textAlign="center" mt="10%">
                    <Typography variant="h4" fontWeight="bold" color="primary">
                        Goal Statement
                    </Typography>
                    <Typography variant="subtitle1" color="primary">
                        quis urna libero, quam nec viverra volutpat sed lobortis, placerat Nam commodo faucibus vitae eu volutpat orci vitae risus{' '}
                    </Typography>
                    <Box display="flex" flexDirection="row" justifyContent="center" mt="40px">
                        <Box textAlign="left" mr="30px">
                            <Box display="flex" gap="5%">
                                <Typography fontWeight="bold" color="secondary">
                                    01
                                </Typography>
                                <Typography fontWeight="bold" color="primary">
                                    {' '}
                                    Start a new career
                                </Typography>
                            </Box>
                            <Typography variant="body1" color="#737373">
                                A new world of possibilities will
                                <br /> open the doors to your new life.
                                <br /> All you need is a computer with
                                <br /> internet access and you will dive
                                <br /> deep into new experiences that
                                <br /> will transform your reality into
                                <br /> growth.
                            </Typography>
                        </Box>
                        <Box textAlign="left" mr="30px">
                            <Box display="flex" gap="5%">
                                <Typography fontWeight="bold" color="secondary">
                                    02
                                </Typography>
                                <Typography fontWeight="bold" color="primary">
                                    Start a new career
                                </Typography>
                            </Box>
                            <Typography variant="body1" color="#737373">
                                We provide you with the most
                                <br /> sought-after skills in a high-
                                <br />
                                demand world where you can put
                                <br /> all your knowledge into practice
                                <br /> on real projects with real
                                <br /> companies, so you can stay
                                <br /> competitive as you start your
                                <br /> new career.
                            </Typography>
                        </Box>
                        <Box textAlign="left">
                            <Box display="flex" gap="5%">
                                <Typography fontWeight="bold" color="secondary">
                                    03
                                </Typography>
                                <Typography color="primary" fontWeight="bold">
                                    {' '}
                                    Start a new career
                                </Typography>
                            </Box>
                            <Typography color="#737373">
                                We invest in your future so you
                                <br /> only have to focus on what
                                <br /> really matters. KNOWLEDGE.
                                <br /> You do not have to pay us now,
                                <br /> just learn and when your career
                                <br /> is completed, we will help you
                                <br /> find your dream job, and only
                                <br /> then will you pay us back.
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Box component="div" id="story" display="flex" flexDirection="column" mt="10%" mb="0" textAlign="center">
                    <Typography variant="h5" fontWeight="bold" color="secondary">
                        OUR STORY
                    </Typography>
                    <Typography variant="h4" fontWeight="bold" color="primary">
                        How we got to the top
                    </Typography>
                    <Typography variant="body1" color="#737373">
                        nec tortor. viverra Lorem ex. quam urna tincidunt libero, ex viverra elit non. viverra non, facilisis
                        <br /> faucibus viverra tincidunt placerat. nec elit. ac Nunc quis lorem. elit faucibus laoreet non libero,
                        <br /> consectetur ultrices ex In ipsum eu{' '}
                    </Typography>
                    <Typography variant="body1" color="#737373">
                        ultrices scelerisque non, vitae maximus odio non turpis non, elit Cras odio porta nisi Quisque ex
                        <br /> porta ex scelerisque convallis. tincidunt at nulla, elit. id eu Donec ipsum risus non nec tincidunt
                        <br /> quis placerat. dui urna placerat ex non.{' '}
                    </Typography>
                    <Typography variant="body1" color="#737373">
                        ex sit non Lorem lorem. placerat Sed Donec at, nibh nisi placerat Ut urna in placerat. volutpat elit
                        <br /> tincidunt Lorem lacus tincidunt nulla, urna quam convallis. Nam ultrices in dui nisi Nunc faucibus
                        <br /> lacus dui. convallis. malesuada sed ac{' '}
                    </Typography>
                    <Box position="relative" height="400px">
                        <Image src={GroupImage} alt="people" layout="fill" objectFit="contain" />
                    </Box>
                </Box>
                <Footer />
            </Box>
        </div>
    );
};

export default AboutUs;
