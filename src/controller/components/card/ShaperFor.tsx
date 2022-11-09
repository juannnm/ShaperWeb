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
                    <Box key="container" display="flex" flexDirection="column" height={{ mobile: '150px', laptop: '250px' }} gap="2%">
                        <Box display="flex" flexDirection={{ mobile: 'row', laptop: 'column' }} alignItems="center">
                            <Typography key="title" variant="h5" sx={{ textAlign: 'center', color: props.titleBold.color }}>
                                {props.title && props.title.toUpperCase()}
                            </Typography>
                            <Typography key="title" variant="h3" sx={{ textAlign: 'center', fontWeight: 'bold', color: props.titleBold.color }}>
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
            direction={{ mobile: 'row', laptop: 'column' }}
            width={{ mobile: '370px', laptop: '400px' }}
            actions={
                <Button
                    text="Learn More"
                    type="button"
                    key="LearnMore"
                    variant="contained"
                    color={props.buttonColor}
                    padding={{ mobile: '16px 32px', laptop: '16px 48px' }}
                />
            }
            boxShadow="0px 2px 24px 3px #00000040"
            padding={{ mobile: '16px', laptop: '32px' }}
            elevated={false}
            borderRadius={props.borderRadius}
        />
    );
};

// Notas
// EL boton queda al borde de la carta, consultar como solucionarlo
