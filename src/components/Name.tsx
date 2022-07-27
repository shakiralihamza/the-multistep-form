import React from 'react';
import {Grid, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import {MyContext} from "../context/MyContext";
import {Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import Button from "@mui/material/Button";
import EastIcon from "@mui/icons-material/East";

function Name() {
    const {name, setName, setCurrentStep} = React.useContext(MyContext);
    return (
        <Grid container sx={{height: '100%'}} justifyContent={'center'} alignItems={'center'}>
            <Grid item xs={12}>
                <Formik
                    initialValues={{name: name}}
                    validationSchema={Yup.object({
                        name: Yup.string()
                            .max(15, 'Must be 15 characters or less')
                            .min(3, 'Must be at least 3 characters')
                            .required('Required'),
                    })}
                    onSubmit={(values) => {
                        setName(values.name);
                        setCurrentStep((prevActiveStep: number) => prevActiveStep + 1);
                    }}
                >
                    {({errors, values}) => (
                        <Form>
                            <Grid container spacing={1.5}>
                                <Grid item xs>
                                    <Field
                                        as={TextField}
                                        name={'name'}
                                        autoFocus
                                        label="Full Name"
                                        variant="outlined"
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={'auto'}>
                                    <Button type={'submit'}
                                            disabled={values.name === '' || errors.name !== undefined}
                                            disableElevation sx={{height: '100%'}}
                                            variant={'contained'}
                                    >
                                        <EastIcon/>
                                    </Button>
                                </Grid>
                            </Grid>
                        </Form>
                    )}
                </Formik>
                <Typography fontSize={12} sx={{pt: 2, color: 'text.secondary'}}>
                    Name must contain 3-15 characters
                </Typography>
            </Grid>
        </Grid>
    );
}

export default Name;
