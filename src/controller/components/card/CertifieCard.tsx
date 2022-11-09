import { Box, Typography } from '@mui/material';
import { Card } from 'react-ui-controller';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EventNoteIcon from '@mui/icons-material/EventNote';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

export const CertifieCard = () => {
    return (
        <Card
            background="white"
            header={{
                title: (
                    <Typography variant="body1" fontWeight="bold" color="primary" mb="20px">
                        Certified MicroDegree for UX/UI Designer
                    </Typography>
                ),
                padding: '0px',
            }}
            description={{
                components: (
                    <>
                        <Box display="flex" gap={1}>
                            <AccessTimeIcon color="primary" />
                            <Typography variant="body2" color="primary">
                                Duracion 4 meses
                            </Typography>
                        </Box>
                        <Box display="flex" gap={1}>
                            <EventNoteIcon color="primary" />
                            <Typography variant="body2" color="primary">
                                07/NOV
                            </Typography>
                        </Box>
                        <Box display="flex" gap={1}>
                            <AccountBoxIcon color="primary" />
                            <Typography variant="body2" color="primary">
                                Profesor: Charles Xavier
                            </Typography>
                        </Box>
                    </>
                ),
                padding: '0px',
            }}
            height="300px"
            width="200px"
            boxShadow="2px 0 10px #00000025"
            direction="column"
            alignment="left"
            justifyContent="center"
        />
    );
};
