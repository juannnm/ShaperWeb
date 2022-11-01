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
            description={[
                <Box key="container" sx={{ display: 'flex', flexDirection: 'row' }}>
                    <Box
                        sx={{
                            width: '128px',
                            height: '128px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            bgcolor: props.bgcolor,
                            borderRadius: '20% 0 0 20%',
                        }}
                    >
                        <Typography variant="h3">{props.dateNumber}</Typography>
                        <Typography variant="h5">{props.dateMonth}</Typography>
                    </Box>
                    <Box key="container" sx={{ textAlign: 'left' }}>
                        <Typography variant="h4">props.title</Typography>
                        <Typography variant="body1">props.description</Typography>
                    </Box>
                </Box>,
            ]}
            height="130px"
            width="500px"
        />
    );
};
