import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepConnector, {stepConnectorClasses} from '@mui/material/StepConnector';
import {styled} from '@mui/material/styles';
import {StepIconProps} from '@mui/material/StepIcon';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {MyContext} from "../context/MyContext";
import {step} from "../App";
import EditIcon from '@mui/icons-material/Edit';
import {Grid} from "@mui/material";

const QontoConnector = styled(StepConnector)(({theme}) => ({

    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            borderColor: theme.palette.primary.main,
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            borderColor: theme.palette.primary.main,
        },
    },
}));
const QontoStepIconRoot = styled('div')<{ ownerState: { active?: boolean } }>(
    ({theme, ownerState}) => ({
        color: 'transparent',
        width: 18,
        height: 18,
        marginLeft: 2.5,
        display: 'flex',
        borderRadius: '50%',
        border: '1px solid',
        ...(ownerState.active && {
            width: 26,
            height: 26,
            marginLeft: -1,
            borderColor: theme.palette.primary.main
        }),
        '& .QontoStepIcon-completedIcon': {
            color: theme.palette.primary.main,
            zIndex: 1,
            fontSize: 19,
        },
        '& .QontoStepIcon-circle': {
            width: 18,
            height: 18,
            borderRadius: '50%',
            border: '1px solid grey',
        }
    }),
);

function QontoStepIcon(props: StepIconProps) {
    const {active, completed, className} = props;
    return (
        <QontoStepIconRoot ownerState={{active}} className={className}>
            {completed ? (
                <CheckCircleIcon className="QontoStepIcon-completedIcon"/>
            ) : (
                !active ?
                    <div className="QontoStepIcon-circle"/> : null
            )}
        </QontoStepIconRoot>
    );
}

const EditValueLabel: React.FC<{ value: string }> = ({value}) => (
    <Grid container alignItems={'center'}
          sx={{'&:hover': {cursor: 'pointer'}}}
    >
        <Grid item>
            <Box sx={{color: 'primary.light'}}>
                {value}
            </Box>
        </Grid>
        <Grid item>
            <EditIcon sx={{fontSize: 18, ml: 1, color: 'primary.main'}}/>
        </Grid>
    </Grid>
)

export default function FormStepper() {
    const {steps, currentStep, setCurrentStep, name, email, password} = React.useContext(MyContext);

    const convertToDots = (str: string) => {
        let result = '';
        for (let i = 0; i < str.length; i++) {
            result += '•';
        }
        return result;
    }
    return (
        <Box>
            <Stepper activeStep={currentStep} color={'error'} orientation="vertical" connector={<QontoConnector/>}>
                {steps.map((step: step, index: number) => (
                    <Step key={step.label}>
                        <StepLabel
                            sx={{m: 0, p: 0}}
                            StepIconComponent={QontoStepIcon}
                        >
                            <Box sx={{ml: 2}}>
                                {
                                    index === 0 ?
                                        name !== '' ?
                                            (
                                                <Box onClick={() => setCurrentStep(0)}>
                                                    <EditValueLabel value={name}/>
                                                </Box>
                                            )
                                            : step.label
                                        : index === 1 ?
                                            email !== '' ?
                                                (
                                                    <Box onClick={() => setCurrentStep(1)}>
                                                        <EditValueLabel value={email}/>
                                                    </Box>
                                                )
                                                : step.label
                                            : index === 2 ?
                                                password !== '' ?
                                                    (
                                                        <Box onClick={() => setCurrentStep(2)}>
                                                            <EditValueLabel value={convertToDots(password)}/>
                                                        </Box>
                                                    )
                                                    : step.label
                                                : step.label
                                }
                            </Box>
                        </StepLabel>
                    </Step>
                ))}
            </Stepper>
        </Box>
    );
}
