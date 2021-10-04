import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Btn from '../btn/Btn';
import FormInput from '../formInput/FormInput';
import { Buttons, LoginContainer, LoginTitle } from './Login.styles';
import { googleLoginStart, emailLoginStart } from '../../redux/user/userSlice';


const Login = ({ children }) => {
    const [userCredentials, setUserCredentials] = useState({ email: '', password: '' });
    const { email, password } = userCredentials;

    const dispatch = useDispatch();
    const googleLoginStartHandler = () => dispatch(googleLoginStart());
    const emailLoginStartHandler = (email, password) => dispatch(emailLoginStart({ email, password }));
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        emailLoginStartHandler(email, password);
    }

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
            <form onSubmit={handleSubmit}> 
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
                    <Btn type="button" onClick={googleLoginStartHandler}>Continue with Google</Btn>
                </Buttons>
            </form>
            {children}
        </LoginContainer>
    )
}


export default Login;
