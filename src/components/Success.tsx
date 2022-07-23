import React from 'react';
import {Dialog, Grid, Slide} from "@mui/material";
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

function Success({open}: { open: boolean}) {
    return (
        <Dialog

            fullScreen
            BackdropProps={{ invisible: true }}
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
                <Grid item xs={9} sx={{height: '70%'}}>
                    <Paper sx={{
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'primary.main',
                        borderRadius: 4,
                        border:'10px solid white',
                        color:'white'
                    }}
                    >
                        <Grid
                            container
                            direction={'column'}
                            justifyContent={'center'}
                            alignItems={'center'}
                            spacing={3}
                            sx={{height:'100%'}}
                        >
                            <Grid item xs={'auto'}>
                                <DoneIcon sx={{fontSize:60, fontWeight: 800,p:4, border:'4px solid white', borderRadius: 50}}/>
                            </Grid>
                            <Grid item xs={'auto'}>
                                <Typography variant={'h4'}>
                                    Successful
                                </Typography>
                            </Grid>
                            <Grid item xs={'auto'} sx={{color:'grey.300', textAlign:'center'}}>
                                <Typography variant={'body2'} fontWeight={450}>
                                    A verification email has been sent to you.
                                </Typography>
                                <Typography variant={'body2'} fontWeight={450}>
                                    Please click on the link in the email to verify your account.
                                </Typography>
                            </Grid>

                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </Dialog>
    );
}

export default Success;
