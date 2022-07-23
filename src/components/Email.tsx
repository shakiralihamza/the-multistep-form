import React from 'react';
import {Checkbox, FormControlLabel, Grid, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import EastIcon from '@mui/icons-material/East';
import {MyContext} from "../context/MyContext";
import * as Yup from "yup";
import {Field, Form, Formik} from "formik";

function Email() {
    const {email, setEmail, setCurrentStep, promo, setPromo} = React.useContext(MyContext);
    return (
        <Grid container sx={{height: '100%'}} justifyContent={'center'} alignItems={'center'}>
            <Grid item xs={12}>
                <Formik
                    initialValues={{email: email, promo: promo}}
                    validationSchema={Yup.object({
                        email: Yup.string().email('Invalid email address').required('Required'),
                    })}
                    onSubmit={(values) => {
                        setEmail(values.email);
                        setPromo(values.promo);
                        setCurrentStep((prevActiveStep: number) => prevActiveStep + 1);
                    }}

                >
                    {({errors, values}) => (
                        <Form>
                            <Grid container spacing={1.5}>
                                <Grid item xs={10}>
                                    <Field
                                        as={TextField}
                                        autoFocus
                                        name={'email'}
                                        label="Email"
                                        variant="outlined" fullWidth
                                    />
                                </Grid>
                                <Grid item xs={2}>
                                    <Button type={'submit'}
                                            disabled={values.email === '' || errors.email !== undefined}
                                            disableElevation sx={{height: '100%'}}
                                            variant={'contained'}><EastIcon/></Button>
                                </Grid>
                            </Grid>
                            <Field
                                as={FormControlLabel}
                                name={'promo'}
                                sx={{mt: 1}}
                                control={<Checkbox checked={values.promo}/>}
                                label={
                                    <Typography fontSize={'12px'} color={'text.secondary'}>
                                        I want to receive promo emails
                                    </Typography>
                                }
                            />
                        </Form>
                    )}
                </Formik>
            </Grid>
        </Grid>
    );
}

export default Email;
