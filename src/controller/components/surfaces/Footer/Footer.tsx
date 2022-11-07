import { Box, Divider, Typography } from '@mui/material';
import { Button, LinkButton, TextField } from 'react-ui-controller';
import { Facebook, Twitter, Instagram, LinkedIn, YouTube } from '@mui/icons-material';

export const Footer = () => {
    return (
        <Box
            sx={{
                width: '100%',
                height: '600px',
                position: 'relative',
                background: 'linear-gradient(45deg, rgba(7,55,242,1),rgba(169,47,242,1),rgba(233,47,182,1),rgba(86,243,210,1),#FFDC18, #FF3706)',
                backgroundSize: '600% 100%',
                animation: 'gradient 16s linear infinite',
                animationDirection: 'alternate',
                '@keyframes gradient': {
                    '0%': { backgroundPosition: '0%' },
                    '100%': { backgroundPosition: '100%' },
                },
            }}
        >
            <Box display="flex" flexDirection="column" alignItems="center" textAlign="center" p="35px 25%" justifyContent="center" gap={2}>
                <Typography variant="h3" color="white">
                    We strive to deliver and ensure achivements beyond expected results
                </Typography>
                <Button text="Register now" type="button" variant="contained" padding="16px 48px" />
            </Box>

            <Divider />

            <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" height="30vh">
                <Box display="flex" flexDirection="column" justifyContent="center" alignContent="center" mr="100px">
                    <Typography variant="h6" color="white" fontWeight="bold">
                        Register To Our Newsletter
                    </Typography>
                    <Box display="flex" alignItems="center">
                        <TextField
                            label="example@shaper.com"
                            name="shaper-newsletter"
                            variant="standard"
                            handleChange={() => {}}
                            value=""
                            // @ts-ignore
                            type="text"
                        />
                        <Button text="L" type="button" variant="contained" />
                    </Box>
                    <Box mt="20px" justifyContent="space-between" display="flex">
                        <Facebook sx={{ fontSize: '35px', color: 'white' }} />
                        <Twitter sx={{ fontSize: '35px', color: 'white' }} />
                        <Instagram sx={{ fontSize: '35px', color: 'white' }} />
                        <LinkedIn sx={{ fontSize: '35px', color: 'white' }} />
                        <YouTube sx={{ fontSize: '35px', color: 'white' }} />
                        <Facebook sx={{ fontSize: '35px', color: 'white' }} />
                    </Box>
                </Box>
                <Box display="flex" flexDirection="row">
                    <Box display="flex" flexDirection="column" mr="30px">
                        <Typography fontWeight="bold" color="white" variant="h5">
                            Last seen
                        </Typography>
                        <LinkButton text="Motion Graphics" color="white" href="/" />
                        <LinkButton text="UX/UI Design" color="white" href="/" />
                        <LinkButton text="Business" color="white" href="/" />
                        <LinkButton text="Nombre Curso" color="white" href="/" />
                        <LinkButton text="Nombre Curso" color="white" href="/" />
                    </Box>
                    <Box display="flex" flexDirection="column" mr="30px">
                        <Typography fontWeight="bold" color="white" variant="h5">
                            Resources
                        </Typography>
                        <LinkButton text="REVISAR" color="white" href="/" />
                        <LinkButton text="REVISAR" color="white" href="/" />
                        <LinkButton text="REVISAR" color="white" href="/" />
                        <LinkButton text="REVISAR" color="white" href="/" />
                        <LinkButton text="REVISAR" color="white" href="/" />
                    </Box>
                    <Box display="flex" flexDirection="column">
                        <Typography fontWeight="bold" color="white" variant="h5">
                            Shaper
                        </Typography>
                        <LinkButton text="Academy" color="white" href="/" />
                        <LinkButton text="Certified Careers" color="white" href="/" />
                        <LinkButton text="Companies" color="white" href="/" />
                        <LinkButton text="About Us" color="white" href="/" />
                        <LinkButton text="Contact Us" color="white" href="/" />
                    </Box>
                </Box>
            </Box>

            <Divider />

            <Box textAlign="center" m="20px" height="5vh">
                <Typography color="white">Copyright @ Shaper 2022. All Rights Reserved.</Typography>
            </Box>
        </Box>
    );
};
