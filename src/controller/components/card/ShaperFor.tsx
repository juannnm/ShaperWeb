import { Card } from 'react-ui-controller';
import { Button } from 'react-ui-controller';
import { Typography, Box } from '@mui/material';

interface IProps {
    title: string;
    titleBold: { text: string; color: string };
    description: { text: string; color: string };
    background: string;
    buttonColor: 'inherit' | 'error' | 'info' | 'primary' | 'secondary' | 'success' | 'warning' | undefined;
}

export const ShaperFor = (props: IProps) => {
    return (
        <Card
            background={props.background}
            description={[
                <Box key="container" display="flex" flexDirection="column" height="225px" gap="2%">
                    <Typography key="title" variant="h4" sx={{ textAlign: 'center', color: props.titleBold.color }}>
                        {props.title && props.title.toUpperCase()}
                    </Typography>
                    <Typography key="title" variant="h4" sx={{ textAlign: 'center', fontWeight: 'bold', color: props.titleBold.color }}>
                        {props.titleBold && props.titleBold.text.toUpperCase()}
                    </Typography>
                    <Typography key="paragraph" variant="body1" sx={{ textAlign: 'center' }} color={props.description.color}>
                        {props.description.text}
                    </Typography>
                </Box>,
            ]}
            direction="column"
            width="300px"
            actions={<Button text="Learn More" type="button" key="LearnMore" variant="contained" color={props.buttonColor} />}
            height="inherit"
        />
    );
};

// Notas
// EL boton queda al borde de la carta, consultar como solucionarlo
