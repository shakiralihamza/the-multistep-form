import React from 'react';
import {Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

function FinalStep() {
    return (
        <Grid container justifyContent={'center'} alignItems={'center'}>
            <Grid item xs={11}>
                <Typography variant={'body2'} color={'text.secondary'} fontWeight={'450'}>
                    By registering, you agree to the&nbsp;
                    <Box component={'span'} sx={{color: 'primary.main', textDecoration: 'underline'}}>Terms and
                        Conditions</Box>,
                    and that you have read our
                    &nbsp;
                    <Box component={'span'} sx={{color: 'primary.main', textDecoration: 'underline'}}>Privacy
                        Policy</Box>
                    &nbsp;
                    of our End User License Agreement.
                </Typography>

            </Grid>
            <Grid xs={'auto'} sx={{mt: 3}}>
                <Button variant={'contained'} type={'submit'}>I AGREE</Button>
            </Grid>
        </Grid>
    );
}

export default FinalStep;
