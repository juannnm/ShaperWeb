import { Card, Button } from 'react-ui-controller';
import { CardActions, Box, Typography } from '@mui/material';

interface IProps {
    title: string;
    description: string;
    hours: string;
    background?: string;
}

export const CareerCard = ({ title, description, hours, background = '#FFFFFF' }: IProps) => {
    return (
        <Card
            description={{
                components: (
                    <Box key="container">
                        <Box key="Main text" height={{ mobile: '150px', laptop: '225px' }}>
                            <Typography gutterBottom variant="h6" sx={{ fontWeight: 'bold' }} align="center" color="secondary">
                                {title}
                            </Typography>
                            <Typography variant="body1" color="#737373">
                                {description}
                            </Typography>
                        </Box>
                    </Box>
                ),
                padding: '8px',
            }}
            actions={
                <Box display="flex" justifyContent="space-between" alignItems="center" width="100%">
                    <Box>
                        <Typography component="span" color="primary" fontWeight="bold">
                            {hours}
                        </Typography>{' '}
                        <Typography component="span" color="#737373">
                            /monthly hours
                        </Typography>
                    </Box>
                    <Button text="Apply" type="button" variant="contained" padding="24px 48px" />
                </Box>
            }
            background={background}
            height="inherit"
            width="500px"
            direction="column"
            alignment="left"
            boxShadow="0px 2px 12px 0px #00000040"
        />
    );
};
