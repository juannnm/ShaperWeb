import { Box, CardMedia, Typography } from '@mui/material';
import { Card, Button } from 'react-ui-controller';
import Image from 'next/image';
import { Birrete } from '../../../../public/assets/svg/Academy/birrete';

interface IProps {
    title: string;
    button: string;
}

export const InterestCard = (props: IProps) => {
    return (
        <Card
            background="white"
            description={[
                <Box key="container" display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
                    <Birrete style={{ fontSize: '100px', m: '35px' }} />
                    <Typography key="text" variant="h4" textAlign="center">
                        {props.title}
                    </Typography>
                </Box>,
            ]}
            actions={<Button key="button" type="button" variant="contained" text={props.button} size="large" />}
            height="120px"
            width="60vw"
            direction="row"
        />
    );
};
