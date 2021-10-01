import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Btn from '../btn/Btn';
import FormInput from '../formInput/FormInput';
// import CustomButton from '../CustomButton/CustomButton';
import { SignUpContainer, SignUpTitle } from './SignUp.styles';
// import { signUpStart } from '../../redux/user/userActions';


const SignUp = ({ children }) => {
    const [userCredentials, setUserCredentials] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const { displayName, email, password, confirmPassword } = userCredentials;
    // const dispatch = useDispatch();
    // const signUpStartHandler = (userCredentials) => dispatch(signUpStart(userCredentials));

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
        
    //     if (password !== confirmPassword) {
    //         alert("Passwords do not match");
    //         return;
    //     }
        
    //     signUpStartHandler({ displayName, email, password });
    // };

    const handleChange = (e) => {
        const { value, name } = e.target;
        setUserCredentials({
            ...userCredentials,
            [name]: value
        })
    };

    return (
        <SignUpContainer>
            <SignUpTitle>Don't have an account?</SignUpTitle>
            <span>Sign up today!</span>
            <form className="sign-up-form">
                <FormInput
                    type="text"
                    name="displayName"
                    value={displayName}
                    label='Name'
                    onChange={handleChange}
                    required
                />
                <FormInput
                    type="email"
                    name="email"
                    value={email}
                    label='Email'
                    onChange={handleChange}
                    required
                />
                <FormInput
                    type="password"
                    name="password"
                    value={password}
                    label='Password'
                    onChange={handleChange}
                    required
                />
                <FormInput
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    label="Confirm Password"
                    onChange={handleChange}
                    required
                />
                <Btn type="submit">Sign Up</Btn>
            </form>
            {children}
        </SignUpContainer>
    )
}


export default SignUp;
