import Link from 'next/link';
import { Button as MuiButton } from '@mui/material';
import { TopAppBar as RUCTopAppBar, IconButton, LinkButton } from 'react-ui-controller';
import SearchIcon from '@mui/icons-material/Search';
import { LogoShaperBlue } from '../../../../../public/assets/svg/logo';
import { useRouter } from 'next/router';

interface IProps {
    bgColor: string;
}

export const TopAppBar = ({ bgColor }: IProps) => {
    const { pathname } = useRouter();

    const navButtons = [
        {
            component: (
                <Link href="/" passHref key="home">
                    <LinkButton
                        text="Home"
                        color={(bgColor !== 'white' && pathname === '/') || (bgColor === 'white' && pathname !== '/') ? 'primary' : 'inherit'}
                        href="/"
                    />
                </Link>
            ),
        },
        {
            component: (
                <Link href="/academy" passHref key="academy">
                    <LinkButton
                        text="Academy"
                        color={
                            (bgColor !== 'white' && pathname === '/academy') || (bgColor === 'white' && pathname !== '/academy')
                                ? 'primary'
                                : 'inherit'
                        }
                        href="/academy"
                    />
                </Link>
            ),
        },
        {
            component: (
                <Link href="/membership" passHref key="membership">
                    <LinkButton
                        text="Membership"
                        color={
                            (bgColor !== 'white' && pathname === '/membership') || (bgColor === 'white' && pathname !== '/membership')
                                ? 'primary'
                                : 'inherit'
                        }
                        href="/membership"
                    />
                </Link>
            ),
        },
        {
            component: (
                <Link href="/businesses" passHref key="businesses">
                    <LinkButton
                        text="Businesses"
                        color={
                            (bgColor !== 'white' && pathname === '/businesses') || (bgColor === 'white' && pathname !== '/businesses')
                                ? 'primary'
                                : 'inherit'
                        }
                        href="/businesses"
                    />
                </Link>
            ),
        },
        {
            component: (
                <Link href="/jobs" passHref key="jobs">
                    <LinkButton
                        text="Jobs"
                        color={(bgColor !== 'white' && pathname === '/jobs') || (bgColor === 'white' && pathname !== '/jobs') ? 'primary' : 'inherit'}
                        href="/jobs"
                    />
                </Link>
            ),
        },
        {
            component: (
                <Link href="/about-us" passHref key="about-us">
                    <LinkButton
                        text="About Us"
                        color={
                            (bgColor !== 'white' && pathname === '/about-us') || (bgColor === 'white' && pathname !== '/about-us')
                                ? 'primary'
                                : 'inherit'
                        }
                        href="/about-us"
                    />
                </Link>
            ),
        },
        {
            component: (
                <Link href="/contact" passHref key="contact">
                    <LinkButton
                        text="Contact"
                        color={
                            (bgColor !== 'white' && pathname === '/contact') || (bgColor === 'white' && pathname !== '/contact')
                                ? 'primary'
                                : 'inherit'
                        }
                        href="/contact"
                    />
                </Link>
            ),
        },
    ];

    const otherButtons = [
        {
            component: (
                <IconButton handleClick={() => {}}>
                    <SearchIcon />{' '}
                </IconButton>
            ),
        },
        {
            component: (
                <Link href="/sign-in">
                    <MuiButton
                        variant="contained"
                        sx={{
                            bgcolor: 'primary',
                            backgroundFilter: 'blur',
                            borderRadius: '100px',
                        }}
                    >
                        Sign In
                    </MuiButton>
                </Link>
            ),
        },
    ];

    return (
        <RUCTopAppBar
            open={false}
            navButtons={navButtons}
            otherButtons={otherButtons}
            background="transparent"
            position="absolute"
            logo={{
                component: (
                    <Link href="/">
                        <LogoShaperBlue style={{ fontSize: '150px', cursor: 'pointer' }} />
                    </Link>
                ),
                isSVG: true,
            }}
            boxShadow="0px 0px 0px 0px"
            horizontalPadding="10%"
        />
    );
};
