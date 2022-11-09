import { Card } from 'react-ui-controller';
import { Box, Typography } from '@mui/material';

interface IProps {
    dateNumber?: number;
    dateMonth?: string;
    title?: string;
    description?: string;
    background?: string;
    direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
}

export const EventCard = ({ dateNumber, dateMonth, title, description, background = 'white', direction = 'row' }: IProps) => {
    return (
        <Card
            background="white"
            direction={direction}
            header={{
                title: (
                    <Typography color="white" fontWeight="bold">
                        {dateNumber}
                    </Typography>
                ),
                subheader: (
                    <Typography variant="body2" color="white">
                        {dateMonth}
                    </Typography>
                ),
                background,
                padding: '24px',
            }}
            description={{
                components: (
                    <Box key="container" display="flex" alignItems="center" flexDirection="column">
                        <Typography variant="h6">{title}</Typography>
                        <Typography variant="body1">{description}</Typography>
                    </Box>
                ),
                padding: '0px 32px',
            }}
            padding="0px 0px 0px 0px"
            boxShadow="0px 2px 12px 0px #00000040"
            elevated={false}
        />
    );
};
