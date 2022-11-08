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
            description={{
                components: (
                    <Box key="container" display="flex" alignItems="center">
                        <Box sx={{ backgroundColor: '#ccc' }}>
                            <Typography variant="h5">{props.dateNumber}</Typography>
                            <Typography variant="body1">{props.dateMonth}</Typography>
                        </Box>
                        <Box key="container" sx={{ textAlign: 'left' }}>
                            <Typography variant="h6">{props.title}</Typography>
                            <Typography variant="body1">{props.description}</Typography>
                        </Box>
                    </Box>
                ),
                padding: '0px',
            }}
            padding="0px 0px 0px 0px"
            boxShadow="0px 2px 12px 0px #00000040"
            elevated={false}
        />
    );
};
