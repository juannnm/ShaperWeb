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
            header={{
                title: (
                    <Box display={{ mobile: 'none', laptop: 'block' }}>
                        <Birrete style={{ fontSize: '70px' }} />
                    </Box>
                ),
                padding: {mobile: '0px', laptop: '16px'}
            }}
            description={{
                components: (
                    <Box key="container" display="flex" flexDirection="row" alignItems="center">
                        <Typography key="text" variant="h5" textAlign="center" fontWeight="bold" sx={{ whiteSpace: 'pre-line' }}>
                            {props.title}
                        </Typography>
                    </Box>
                ),
                padding: { mobile: '0px', laptop: '16px' },
            }}
            actions={<Button key="button" type="button" variant="contained" text={props.button} size="large" padding="16px 48px" />}
            // @ts-ignore
            height={{ mobile: '120px', laptop: '120px' }}
            direction="row"
            boxShadow="0px 2px 11px 0px #00000040;"
            // @ts-ignore
            justifyContent={{ mobile: 'row', laptop: 'space-between' }}
        />
    );
};
