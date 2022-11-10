import { Card } from 'react-ui-controller';
import { Typography, Box } from '@mui/material';

export const CourseCard = () => {
    return (
        <Card
            background="white"
            description={{
                components: (
                    <Box key="container" display="flex" flexDirection="column" justifyContent="space-evenly" gap={2}>
                        <Typography variant="body1" fontWeight="bold">
                            Great Course
                        </Typography>
                        <Typography variant="body2">Some strange text I write to fill space</Typography>
                    </Box>
                ),
                // @ts-ignore
                padding: { mobile: '8px', laptop: '16px' },
            }}
            height="130px"
            width="130px"
            padding="0px"
        />
    );
};
