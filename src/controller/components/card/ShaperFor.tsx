import { Card } from 'react-ui-controller';
import { Button } from 'react-ui-controller';
import { Typography, Box } from '@mui/material';

interface IProps {
    title: string;
    titleBold: { text: string; color: string };
    description: string;
}

export const ShaperFor = (props: IProps) => {
    return (
        <Card
            background="transparent"
            description={[
                <Box key="container" sx={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Typography key="title" variant="h4" sx={{ textAlign: 'center' }}>
                        {props.title && props.title.toUpperCase()}
                    </Typography>
                    <Typography key="title" variant="h4" sx={{ textAlign: 'center', fontWeight: 'bold', color: props.titleBold.color }}>
                        {props.titleBold && props.titleBold.text.toUpperCase()}
                    </Typography>
                    <Typography key="paragraph" variant="body2" sx={{ textAlign: 'center' }}>
                        {props.description}
                    </Typography>
                </Box>,
            ]}
            direction="column"
            width="300px"
            actions={<Button text="Learn More" type="button" key="LearnMore" variant="contained" />}
        />
    );
};

// Notas
// EL boton queda al borde de la carta, consultar como solucionarlo
