import React from 'react';
import SignUpForm from './components/SignUpForm';
import {createTheme, ThemeProvider} from "@mui/material";
import {red} from "@mui/material/colors";
import {MyContext} from "./context/MyContext";

const theme = createTheme({
    palette: {
        primary: red
    }
});

export type step = { label: string }
export type steps = step[]

function App() {
    const [steps, setSteps] = React.useState<steps>([
        {label: 'What is your name'},
        {label: 'Enter your Email'},
        {label: 'Set password'},
        {label: 'Privacy policy and license agreement'},
    ]);
    const [currentStep, setCurrentStep] = React.useState<number>(0);
    const [name, setName] = React.useState<string>('');
    const [email, setEmail] = React.useState<string>('');
    const [password, setPassword] = React.useState<string>('');
    const [isSubscribed, setIsSubscribed] = React.useState<boolean>(false);
    const [promo, setPromo] = React.useState<boolean>(true);

    const contextValues = {
        name,
        setName,
        email,
        setEmail,
        password,
        setPassword,
        isSubscribed,
        setIsSubscribed,
        steps,
        setSteps,
        currentStep,
        setCurrentStep,
        promo,
        setPromo
    }
    
    return (
        <MyContext.Provider value={contextValues}>
            <ThemeProvider theme={theme}>
                <SignUpForm/>
            </ThemeProvider>
        </MyContext.Provider>
    );
}

export default App;
