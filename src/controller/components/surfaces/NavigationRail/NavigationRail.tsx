import Link from 'next/link';
import { NavigationRail as RUCNavigationRail, IconButton, LinkButton, Button } from 'react-ui-controller';
import { Login, ExploreOutlined, SchoolOutlined, BusinessOutlined, Fingerprint, ContactSupportOutlined } from '@mui/icons-material';
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
                        sx={{ '&:hover button': { backgroundColor: '#ddd' }, '&:hover a': { color: '#ccc' } }}
                    >
                        <IconButton>
                            <IsologotipoShaperBlue />
                        </IconButton>
                        <LinkButton text="Home" variant="subtitle1" />
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
                        sx={{ '&:hover button': { backgroundColor: '#ddd' }, '&:hover a': { color: '#ccc' } }}
                    >
                        <IconButton>
                            <ExploreOutlined color="primary" fontSize="large" />
                        </IconButton>
                        <LinkButton text="Get Started" variant="subtitle1" />
                    </Box>
                </Link>
            ),
        },
        {
            component: (
                <Link href="/college" passHref key="academy">
                    <Box
                        component="div"
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        sx={{ '&:hover button': { backgroundColor: '#ddd' }, '&:hover a': { color: '#ccc' } }}
                    >
                        <IconButton>
                            <SchoolOutlined color="primary" fontSize="large" />
                        </IconButton>
                        <LinkButton text="College" variant="subtitle1" />
                    </Box>
                </Link>
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
                        sx={{ '&:hover button': { backgroundColor: '#ddd' }, '&:hover a': { color: '#ccc' } }}
                    >
                        <IconButton>
                            <BusinessOutlined color="primary" fontSize="large" />
                        </IconButton>
                        <LinkButton text="Businesses" variant="subtitle1" />
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
                        sx={{ '&:hover button': { backgroundColor: '#ddd' }, '&:hover a': { color: '#ccc' } }}
                    >
                        <IconButton>
                            <Fingerprint color="primary" fontSize="large" />
                        </IconButton>
                        <LinkButton text="About Us" variant="subtitle1" />
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
                        sx={{ '&:hover button': { backgroundColor: '#ddd' }, '&:hover a': { color: '#ccc' } }}
                    >
                        <IconButton>
                            <ContactSupportOutlined color="primary" fontSize="large" />
                        </IconButton>
                        <LinkButton text="Contact" variant="subtitle1" />
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
