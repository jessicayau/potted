import React, { useState } from 'react';
import Btn from '../btn/Btn';
// import { useDispatch } from 'react-redux';
import FormInput from '../formInput/FormInput';
import { Buttons, LoginContainer, LoginTitle } from './Login.styles';
// import { emailLoginStart, googleLoginStart } from '../../redux/user/userActions';


const Login = ({ children }) => {
    const [userCredentials, setUserCredentials] = useState({ email: '', password: '' });
    const { email, password } = userCredentials;

    // const dispatch = useDispatch();
    // const googleLoginStartHandler = () => dispatch(googleLoginStart());
    // const emailLoginStartHandler = (email, password) => dispatch(emailLoginStart({ email, password }));
    

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     emailLoginStartHandler(email, password);
    // }

    const handleChange = (e) => {
        const { value, name } = e.target;
        setUserCredentials({
            ...userCredentials,
            [name]: value
        })
    }

    return (
        <LoginContainer>
            <LoginTitle>Log In</LoginTitle>
            <span>Log in with your email and password or Google account</span>
            <form> 
                <FormInput
                    type="email"
                    name="email"
                    value={email}
                    label="Email"
                    handleChange={handleChange}
                    required
                />
                <FormInput
                    type="password"
                    name="password"
                    value={password}
                    label="Password"
                    handleChange={handleChange}
                    required
                />
                <Buttons>
                    <Btn type="submit">Login with Email</Btn>
                    <Btn type="button">Continue with Google</Btn>
                    {/* <CustomButton type="button" onClick={googleLoginStartHandler} isGoogleSignIn>Login with Google</CustomButton> */}
                </Buttons>
            </form>
            {children}
        </LoginContainer>
    )
}


export default Login;
