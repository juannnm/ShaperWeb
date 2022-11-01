import { Card, Button } from 'react-ui-controller';
import { CardActions, Box, Typography } from '@mui/material';

interface IProps {
    title: string;
    description: string;
    hours: string;
}

export const CareerCard = (props: IProps) => {
    return (
        <Card
            description={[
                <Box key="container">
                    <Box key="Main text">
                        <Typography gutterBottom variant="h5" sx={{ fontWeight: 'bold' }} align="center" color="secondary">
                            {props.title}
                        </Typography>
                        <Typography variant="body1" color="#737373" height="100px">
                            {props.description}
                        </Typography>
                    </Box>
                    <Box key="hours" sx={{ mt: '10px' }}>
                        <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Box>
                                <Typography component="span" color="primary" fontWeight="bold">
                                    {props.hours}
                                </Typography>{' '}
                                <Typography component="span" color="#737373">
                                    /monthly hours
                                </Typography>
                            </Box>
                            <Button text="Apply" type="button">
                                Apply
                            </Button>
                        </CardActions>
                    </Box>
                </Box>,
            ]}
            width="450px"
            alignment="left"
        />
    );
};
