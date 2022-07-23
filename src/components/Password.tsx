import React from 'react';
import {Grid, List, ListItem, ListItemIcon, ListItemText, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import CircleIcon from '@mui/icons-material/Circle';
import {MyContext} from "../context/MyContext";
import * as Yup from "yup";
import {Field, Form, Formik} from "formik";
import Button from "@mui/material/Button";
import EastIcon from "@mui/icons-material/East";

const TheListItem: React.FC<{ text: string, isValid: boolean }> = ({text, isValid}) => (
    <ListItem sx={{
        padding: 0,
        '& .MuiListItemText-root': {
            padding: 0,
            margin: 0
        },
        '& .MuiListItemText-primary': {
            fontSize: 12
        },
        '& .MuiListItemIcon-root': {
            width: '40px !important',
            mr: -5,
        }
    }}>
        <ListItemIcon>
            <CircleIcon sx={{fontSize: 8, color: 'primary.main', opacity: isValid ? 1 : 0.2}}/>
        </ListItemIcon>
        <ListItemText
            primary={text}
        />
    </ListItem>
)


function Password() {
    const {setPassword, setCurrentStep, password} = React.useContext(MyContext);
    return (
        <Grid container sx={{height: '100%'}} justifyContent={'center'} alignItems={'center'}>
            <Grid item xs={12}>
                <Formik
                    initialValues={{password: password}}
                    validationSchema={Yup.object({
                        password: Yup.string()
                            .min(8, 'min 8 characters')
                            .max(16, 'max 16 characters')
                            .matches(/[a-z]/, 'Must have at least one lowercase character')
                            .matches(/[A-Z]/, 'Must have at least one uppercase character')
                            .matches(/\d/, 'Must have at least one number')
                            .required('Required'),
                    })}
                    onSubmit={(values) => {
                        setPassword(values.password);
                        setCurrentStep((prevActiveStep: number) => prevActiveStep + 1);
                    }}
                >
                    {({errors, values}) => (
                        <Form>
                            <Grid container spacing={1.5}>
                                <Grid item xs={10}>
                                    <Field
                                        as={TextField}
                                        inputProps={{
                                            autoComplete: 'off'
                                        }}
                                        name={'password'}
                                        label="Password"
                                        type={'password'}
                                        variant="outlined" fullWidth
                                    />
                                </Grid>
                                <Grid item xs={2}>
                                    <Button type={'submit'}
                                            disabled={values.password === '' || errors.password !== undefined}
                                            disableElevation sx={{height: '100%'}}
                                            variant={'contained'}><EastIcon/></Button>
                                </Grid>
                            </Grid>
                            <Typography fontSize={12} sx={{pt: 2, color: 'text.secondary'}}>
                                Password must contain
                                <Grid container spacing={5}>
                                    <Grid item xs={'auto'}>
                                        <List dense sx={{pt: '3px'}}>
                                            <TheListItem text={'lower-case'}
                                                         isValid={values.password.match(/[a-z]/) !== null}/>
                                            <TheListItem text={'upper-case'}
                                                         isValid={values.password.match(/[A-Z]/) !== null}/>
                                        </List>
                                    </Grid>
                                    <Grid item xs={'auto'}>
                                        <List dense sx={{pt: '3px'}}>
                                            <TheListItem text={'numbers'}
                                                         isValid={values.password.match(/\d/) !== null}/>
                                            <TheListItem text={'8-16 characters'}
                                                         isValid={values.password.length >= 8 && values.password.length <= 16}/>
                                        </List>
                                    </Grid>
                                </Grid>
                            </Typography>
                        </Form>
                    )}
                </Formik>
            </Grid>
        </Grid>
    );
}

export default Password;
