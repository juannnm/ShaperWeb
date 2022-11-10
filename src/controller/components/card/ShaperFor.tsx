import { Card } from 'react-ui-controller';
import { Button } from 'react-ui-controller';
import { Typography, Box } from '@mui/material';

interface IProps {
    title: string;
    titleBold: { text: string; color: string };
    description: { text: string; color: string };
    background: string;
    buttonColor: 'inherit' | 'error' | 'info' | 'primary' | 'secondary' | 'success' | 'warning' | undefined;
    borderRadius: string;
}

export const ShaperFor = (props: IProps) => {
    return (
        <Card
            background={props.background}
            description={{
                components: (
                    <Box key="container" display="flex" flexDirection="column" height={{ mobile: '150px', laptop: '175px' }} gap="2%">
                        <Box display="flex" flexDirection={{ mobile: 'row', laptop: 'column' }} alignItems="center">
                            <Typography key="title" variant="h6" sx={{ textAlign: 'center', color: props.titleBold.color }} fontWeight="light">
                                {props.title && props.title.toUpperCase()}
                            </Typography>
                            <Typography key="title" variant="h5" sx={{ textAlign: 'center', fontWeight: 'bold', color: props.titleBold.color }}>
                                {props.titleBold && props.titleBold.text.toUpperCase()}
                            </Typography>
                        </Box>
                        <Typography
                            key="paragraph"
                            variant="body1"
                            sx={{ textAlign: { mobile: 'left', laptop: 'center' } }}
                            color={props.description.color}
                        >
                            {props.description.text}
                        </Typography>
                    </Box>
                ),
                padding: '0px',
            }}
            // @ts-ignore
            direction={{ mobile: 'row', laptop: 'column' }}
            // @ts-ignore
            width={{ mobile: '340px', laptop: '350px' }}
            actions={
                <Button
                    text="Learn More"
                    type="button"
                    key="LearnMore"
                    variant="contained"
                    color={props.buttonColor}
                    // @ts-ignore
                    padding={{ mobile: '16px 32px', laptop: '16px 48px' }}
                />
            }
            boxShadow="0px 2px 24px 3px #00000040"
            // @ts-ignore
            padding={{ mobile: '16px', laptop: '32px' }}
            borderRadius={props.borderRadius}
        />
    );
};
