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
            description={{
                components: (
                    <Box key="container">
                        <Box key="Main text" height="200px">
                            <Typography gutterBottom variant="h6" sx={{ fontWeight: 'bold' }} align="center" color="secondary">
                                {props.title}
                            </Typography>
                            <Typography variant="body1" color="#737373">
                                {props.description}
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
                            {props.hours}
                        </Typography>{' '}
                        <Typography component="span" color="#737373">
                            /monthly hours
                        </Typography>
                    </Box>
                    <Button text="Apply" type="button" variant="contained" padding="24px 48px" />
                </Box>
            }
            background="#ffffff"
            height="inherit"
            width="460px"
            direction="column"
            alignment="left"
            boxShadow="0px 2px 12px 0px #00000040"
        />
    );
};
