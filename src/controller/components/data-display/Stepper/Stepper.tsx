import { styled } from "@mui/material/styles";
import { Stepper, Step, StepLabel, StepConnector, Box, Stack } from "@mui/material";
import {stepConnectorClasses} from "@mui/material/StepConnector"
import { StepIconProps } from '@mui/material/StepIcon';

const CustomConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor:
        '#050E3F',
        width: 5,

    },
  },
}))

const ColorlibStepIconRoot = styled('div')<{
  ownerState: { completed?: boolean; active?: boolean };
}>(({ theme, ownerState }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
  zIndex: 1,
  color: '#fff',
  width: 35,
  height: 35,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.active && {
    backgroundColor:
      '#050e3f',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  }),
  ...(ownerState.completed && {
    backgroundColor:
      '#050e3f',
  }),
}));

function ColorlibStepIcon(props: StepIconProps) {
  const { active, completed, className } = props;

  const icons: { [index: string]: string } = {
    1: "1",
    2: "2",
    3: "3",
    4: "4"
  };

  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
    
  );
}

const steps = ["Create your profile.", "Tell us why you are ready to pursue a challenging career.", "Get ready for the test so we can assess your skills.", "Our team will reach out to you with further instructions."]

export const StaticStepper = () => {
  return (
    <Stack>
      <Stepper   orientation="vertical" connector={<CustomConnector/>}>
      {steps.map((label) => (
          <Step key={label} active={true}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
            
          </Stepper>
    </Stack>
  )
}