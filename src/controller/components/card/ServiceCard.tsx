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
                    <Box key="container" display="flex" flexDirection="column" gap={1}>
                        <Box key="head" display="flex" gap="5%" alignItems="center" height={{ mobile: '40px', laptop: '60px' }}>
                            {props.icon}
                            <Typography variant="h6" color="primary" sx={{ whiteSpace: 'pre-line' }}>
                                {props.title}
                            </Typography>
                        </Box>
                        <Box key="text">
                            <Typography variant="body2" color="primary">
                                {props.description}
                            </Typography>
                        </Box>
                    </Box>
                ),
                padding: '4px',
            }}
            height={{ mobile: '250px', laptop: '298px' }}
            width={{ mobile: '180px', laptop: '220px' }}
            alignment="left"
        />
    );
};
