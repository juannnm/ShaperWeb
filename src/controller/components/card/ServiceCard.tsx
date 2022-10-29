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
            description={
                <Box key="container">
                    <Box key="head" sx={{ display: 'flex', flexDirection: 'row' }}>
                        {props.icon}
                        <Typography sx={{ fontSize: '20px', textAlign: 'left' }}>{props.title}</Typography>
                    </Box>
                    <Box key="text" m="5px">
                        <Typography variant="body1">{props.description}</Typography>
                    </Box>
                </Box>
            }
            height="298px"
            width="220px"
            alignment="left"
        />
    );
};
