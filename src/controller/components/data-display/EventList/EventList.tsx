import { Box, List, ListItem } from '@mui/material';
import { EventCard } from '../../card/EventCard';

export const EventList = () => {
    const activities = [
        {
            dateNumber: 1,
            dateMonth: 'nov',
            title: 'Grand event',
            description: 'This is a gran event of our academy',
            bgcolor: 'blue',
        },
        {
            dateNumber: 2,
            dateMonth: 'nov',
            title: 'Grand event',
            description: 'This is a gran event of our academy',
            bgcolor: 'green',
        },
        {
            dateNumber: 3,
            dateMonth: 'nov',
            title: 'Grand event',
            description: 'This is a gran event of our academy',
            bgcolor: 'yellow',
        },
        {
            dateNumber: 4,
            dateMonth: 'nov',
            title: 'Grand event',
            description: 'This is a gran event of our academy',
            bgcolor: 'pink',
        },
        {
            dateNumber: 5,
            dateMonth: 'nov',
            title: 'Grand event',
            description: 'This is a gran event of our academy',
            bgcolor: 'blue',
        },
    ];

    return (
        <Box sx={{ overflowY: 'scroll', height: '300px' }}>
            <List>
                {activities.map((d, i) => (
                    <ListItem key={i}>
                        <EventCard
                            bgcolor={d.bgcolor}
                            dateNumber={d.dateNumber}
                            dateMonth={d.dateMonth}
                            title={d.title}
                            description={d.description}
                        />
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};
