import Link from 'next/link';
import { NavigationRail as RUCNavigationRail, IconButton, LinkButton, Button } from 'react-ui-controller';
import { darken } from '@mui/system';
import { Login, ExploreOutlined, SchoolOutlined, WorkOutlineOutlined, Fingerprint, ContactSupportOutlined } from '@mui/icons-material';
import { IsologotipoShaperBlue } from '../../../../../public/assets/svg/logo';
import { useRouter } from 'next/router';
import React from 'react';
import { Box } from '@mui/system';

interface IProps {
    bgColor?: string;
}

export const NavigationRail = ({ bgColor }: IProps) => {
    const { pathname } = useRouter();
    const navButtons = [
        {
            component: (
                <Link href="/" passHref key="home">
                    <Box
                        component="div"
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        sx={{ '&:hover button': { backgroundColor: '#a8c7fa' }, '&:hover a': { color: darken('#050E3F', 3), fontWeight: 'bold' } }}
                    >
                        <IconButton>
                            <IsologotipoShaperBlue style={{ fontSize: '20px' }} />
                        </IconButton>
                        <LinkButton text="Home" variant="body2" />
                    </Box>
                </Link>
            ),
        },
        {
            component: (
                <Link href="/get-started" passHref key="get-started">
                    <Box
                        component="div"
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        sx={{ '&:hover button': { backgroundColor: '#a8c7fa' }, '&:hover a': { color: darken('#050E3F', 3), fontWeight: 'bold' } }}
                    >
                        <IconButton>
                            <ExploreOutlined color="primary" fontSize="medium" />
                        </IconButton>
                        <LinkButton text="Get Started" variant="body2" />
                    </Box>
                </Link>
            ),
        },
        {
            component: (
                <Box
                    component="div"
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    sx={{ '&:hover button': { backgroundColor: '#a8c7fa' }, '&:hover a': { color: darken('#050E3F', 3), fontWeight: 'bold' } }}
                >
                    <IconButton>
                        <SchoolOutlined color="primary" fontSize="medium" />
                    </IconButton>
                    <LinkButton text="College" variant="body2" />
                </Box>
            ),
            layer: {
                components: [
                    <Link href="/college/courses" passHref key="courses">
                        <Button variant="text" text="Courses" type="button" />
                    </Link>,
                    <Link href="/college/careers" passHref key="careers">
                        <Button variant="text" text="Careers" key="careers" type="button" />
                    </Link>,
                ],
            },
        },
        {
            component: (
                <Link href="/businesses" passHref key="businesses">
                    <Box
                        component="div"
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        sx={{ '&:hover button': { backgroundColor: '#a8c7fa' }, '&:hover a': { color: darken('#050E3F', 3), fontWeight: 'bold' } }}
                    >
                        <IconButton>
                            <WorkOutlineOutlined color="primary" fontSize="medium" />
                        </IconButton>
                        <LinkButton text="Businesses" variant="body2" />
                    </Box>
                </Link>
            ),
        },
        {
            component: (
                <Link href="/about-us" passHref key="about-us">
                    <Box
                        component="div"
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        sx={{ '&:hover button': { backgroundColor: '#a8c7fa' }, '&:hover a': { color: darken('#050E3F', 3), fontWeight: 'bold' } }}
                    >
                        <IconButton>
                            <Fingerprint color="primary" fontSize="medium" />
                        </IconButton>
                        <LinkButton text="About Us" variant="body2" />
                    </Box>
                </Link>
            ),
        },
        {
            component: (
                <Link href="/contact" passHref key="contact">
                    <Box
                        component="div"
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        sx={{ '&:hover button': { backgroundColor: '#a8c7fa' }, '&:hover a': { color: darken('#050E3F', 3), fontWeight: 'bold' } }}
                    >
                        <IconButton>
                            <ContactSupportOutlined color="primary" fontSize="medium" />
                        </IconButton>
                        <LinkButton text="Contact" variant="body2" />
                    </Box>
                </Link>
            ),
        },
    ];

    const actions = [
        <Link href="/sign-in" key="login">
            <Box component="div" display="flex" flexDirection="column" alignItems="center">
                <IconButton title="Login">
                    <Login />
                </IconButton>
            </Box>
        </Link>,
    ];

    return <RUCNavigationRail navButtons={navButtons} actions={actions} background="#F3F6FC" />;
};
