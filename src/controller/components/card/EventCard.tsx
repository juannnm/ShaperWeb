import { Card } from 'react-ui-controller';
import { Box, Typography } from '@mui/material';

interface IProps {
    dateNumber?: number;
    dateMonth?: string;
    title?: string;
    description?: string;
    bgcolor?: string;
}

export const EventCard = (props: IProps) => {
    return (
        <Card
            background="white"
            // Arreglar padding tarjeta
            description={[
                <Box key="container" display="flex" alignItems="center" gap="15%">
                    <Box sx={{ backgroundColor: '#ccc' }}>
                        <Typography variant="h4">{props.dateNumber}</Typography>
                        <Typography variant="h6">{props.dateMonth}</Typography>
                    </Box>
                    <Box key="container" sx={{ textAlign: 'left' }}>
                        <Typography variant="h5">{props.title}</Typography>
                        <Typography variant="body1">{props.description}</Typography>
                    </Box>
                </Box>,
            ]}
        />
    );
};
