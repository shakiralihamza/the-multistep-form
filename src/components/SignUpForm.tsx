import React from 'react';
import Paper from "@mui/material/Paper";
import {Grid, Stack} from "@mui/material";
import FormStepper from "./FormStepper";
import Typography from "@mui/material/Typography";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Box from "@mui/material/Box";
import FinalStep from "./FinalStep";
import {MyContext} from "../context/MyContext";
import Name from "./Name";
import Email from "./Email";
import Password from "./Password";

function SignUpForm() {
    const {currentStep, setCurrentStep} = React.useContext(MyContext);
    const handleBack = () => {
        setCurrentStep((prevActiveStep: number) => prevActiveStep - 1);
    }
    return (
        <Grid container sx={{height: '100vh'}} justifyContent={'center'} alignItems={'center'}>
            <Grid item xs={9} sx={{height: '70%'}}>
                <Paper
                    elevation={5}
                    sx={{
                        width: '100%',
                        height: '100%',
                        backgroundColor: '#F6F7F6',
                        borderRadius: 4
                    }}
                >
                    <Grid container sx={{height: '110px'}} justifyContent={'center'} alignItems={'center'}>
                        <Grid xs={3}>
                            <Box
                                sx={{
                                    pt: 5,
                                    color: 'primary.main',
                                    '& :hover': {
                                        cursor: 'pointer',
                                    }
                                }}
                                onClick={handleBack}
                            >
                                {
                                    currentStep > 0 &&
                                    <Stack direction={'row'}>
                                        <KeyboardBackspaceIcon fontSize={'small'}/>
                                        <Typography sx={{ml: 2, mt: '1px'}} fontSize={12} fontWeight={'500'}>
                                            {
                                                currentStep === 1 ? 'Edit name'
                                                    : currentStep === 2 ? 'Edit email'
                                                        : 'Edit password'
                                            }
                                        </Typography>
                                    </Stack>
                                }
                            </Box>
                        </Grid>
                        <Grid item xs={4} sx={{textAlign: 'center'}}>
                            <Typography variant={'h5'} color={'text.secondary'} fontWeight={450}>Multi Step Signup
                                Form
                            </Typography>
                        </Grid>
                        <Grid xs={3}></Grid>
                    </Grid>
                    <Grid container sx={{pt: 3}} alignItems={'center'} justifyContent={'center'}>
                        <Grid item xs={5}>
                            <FormStepper/>
                        </Grid>
                        <Grid item xs={5}>
                            {
                                currentStep === 0 ? <Name/>
                                    : currentStep === 1 ? <Email/>
                                        : currentStep === 2 ? <Password/>
                                            : <FinalStep/>
                            }
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    );
}

export default SignUpForm;
