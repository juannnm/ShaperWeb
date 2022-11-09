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
            header={{ title: <Birrete style={{ fontSize: '100px', m: '35px' }} /> }}
            description={{
                components: (
                    <Box key="container" display="flex" flexDirection="row" alignItems="center">
                        <Typography key="text" variant="h5" textAlign="center" fontWeight="bold" sx={{ whiteSpace: 'pre-line' }}>
                            {props.title}
                        </Typography>
                    </Box>
                ),
                padding: '16px',
            }}
            actions={<Button key="button" type="button" variant="contained" text={props.button} size="large" padding="16px 48px" />}
            height="120px"
            width="60vw"
            direction="row"
            elevated={false}
            boxShadow="0px 2px 11px 0px #00000040;"
            justifyContent="space-between"
        />
    );
};
