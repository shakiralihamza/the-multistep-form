import React from 'react';
import {Box, Dialog, Grid, Slide, Stack, useMediaQuery, useTheme} from "@mui/material";
import Paper from "@mui/material/Paper";
import {TransitionProps} from "@mui/material/transitions";
import DoneIcon from '@mui/icons-material/Done';
import Typography from "@mui/material/Typography";

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function Success({open}: { open: boolean }) {
    const theme = useTheme();
    const isBelowXS = useMediaQuery(theme.breakpoints.down('sm'));
    const isBelowSM = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Dialog
            fullScreen
            BackdropProps={{invisible: true}}
            TransitionComponent={Transition}
            sx={{
                backgroundColor: 'transparent',
                '& .MuiDialog-paper': {
                    backgroundColor: 'transparent',
                },
            }}
            open={open}
        >
            <Grid container sx={{backgroundColor: 'transparent', height: '100%'}} alignItems={'center'}
                  justifyContent={'center'}>
                <Grid item xs={12} sm={11} md={9} sx={{height: isBelowXS ? '100%' : '70%'}}>
                    <Paper sx={{
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'primary.main',
                        borderRadius: isBelowXS ? 0 : 4,
                        border: 'solid white',
                        borderWidth: isBelowXS ? 0 : isBelowSM ? '3px' : '10px',
                        color: 'white'
                    }}
                    >
                        <Stack spacing={3} sx={{height: '100%', width: '100%'}} alignItems={'center'}
                               justifyContent={'center'}>
                            <DoneIcon sx={{
                                fontSize: 60,
                                fontWeight: 800,
                                p: 4,
                                border: '4px solid white',
                                borderRadius: 50
                            }}/>
                            <Typography variant={'h4'}>
                                Successful
                            </Typography>
                            <Box sx={{textAlign: 'center'}}>
                                <Typography variant={'body2'} fontWeight={450} px={3}>
                                    A verification email has been sent to you.
                                </Typography>
                                <Typography variant={'body2'} fontWeight={450} px={3}>
                                    Please click on the link in the email to verify your account.
                                </Typography>
                            </Box>
                        </Stack>
                    </Paper>
                </Grid>
            </Grid>
        </Dialog>
    );
}

export default Success;
