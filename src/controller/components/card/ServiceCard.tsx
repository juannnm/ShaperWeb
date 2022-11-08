import { Box, SvgIconTypeMap, Typography } from '@mui/material';
import { Card } from 'react-ui-controller';
import SettingsIcon from '@mui/icons-material/Settings';
import { OverridableComponent } from '@mui/material/OverridableComponent';

interface IProps {
    title: string;
    background: string;
    icon: JSX.Element;
    description: string;
}

export const ServiceCard = (props: IProps) => {
    return (
        <Card
            background={props.background}
            description={{
                components: (
                    <Box key="container">
                        <Box key="head" display="flex" gap="5%" alignItems="center" height="60px">
                            {props.icon}
                            <Typography variant="h6" color="primary" sx={{ whiteSpace: 'pre-line' }}>
                                {props.title}
                            </Typography>
                        </Box>
                        <Box key="text" m="5px">
                            <Typography variant="body2" color="primary">
                                {props.description}
                            </Typography>
                        </Box>
                    </Box>
                ),
                padding: '8px',
            }}
            height={{ xs: '160px', lg: '298px' }}
            width={{ xs: '160px', lg: '220px' }}
            alignment="left"
        />
    );
};
