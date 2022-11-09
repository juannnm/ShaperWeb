import { Box, List, ListItem } from '@mui/material';
import { EventCard } from '../../card/EventCard';

export const EventList = () => {
    const activities = [
        {
            dateNumber: 1,
            dateMonth: 'nov',
            title: 'Grand event',
            description: 'This is a gran event of our academy',
            bgcolor: '#D8A2F1',
        },
        {
            dateNumber: 2,
            dateMonth: 'nov',
            title: 'Grand event',
            description: 'This is a gran event of our academy',
            bgcolor: '#FFAD94',
        },
        {
            dateNumber: 3,
            dateMonth: 'nov',
            title: 'Grand event',
            description: 'This is a gran event of our academy',
            bgcolor: '#8BB5F3',
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
        <List sx={{ overflowY: 'scroll', height: '400px' }}>
            {activities.map((d, i) => (
                <ListItem key={i}>
                    <EventCard background={d.bgcolor} dateNumber={d.dateNumber} dateMonth={d.dateMonth} title={d.title} description={d.description} />
                </ListItem>
            ))}
        </List>
    );
};
