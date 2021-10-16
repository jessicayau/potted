import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Btn from "../btn/Btn";
import FormInput from "../formInput/FormInput";
import { SignUpContainer, SignUpTitle } from "./SignUp.styles";
import { signUpStart } from "../../redux/user/userSlice";

const SignUp = ({ children }) => {
    const [userCredentials, setUserCredentials] = useState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const { displayName, email, password, confirmPassword } = userCredentials;
    const dispatch = useDispatch();
    const signUpHandler = (verifiedCredentials) =>
        dispatch(signUpStart(verifiedCredentials));

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        } else {
            signUpHandler({ displayName, email, password });
        }
    };

    const handleChange = (e) => {
        const { value, name } = e.target;
        setUserCredentials({
            ...userCredentials,
            [name]: value,
        });
    };

    return (
        <SignUpContainer>
            <SignUpTitle>Don't have an account?</SignUpTitle>
            <span>Sign up today!</span>
            <form className="sign-up-form" onSubmit={handleSubmit}>
                <FormInput
                    type="text"
                    id="newUserName"
                    name="displayName"
                    value={displayName}
                    label="Name"
                    onChange={handleChange}
                    required
                />
                <FormInput
                    type="email"
                    id="newUserEmail"
                    name="email"
                    value={email}
                    label="Email"
                    onChange={handleChange}
                    required
                />
                <FormInput
                    type="password"
                    id="newUserPassword"
                    name="password"
                    value={password}
                    label="Password"
                    onChange={handleChange}
                    required
                />
                <FormInput
                    type="password"
                    id="confirmNewUserPassword"
                    name="confirmPassword"
                    value={confirmPassword}
                    label="Confirm Password"
                    onChange={handleChange}
                    required
                />
                <Btn secondaryBtn type="submit">
                    Sign Up
                </Btn>
            </form>
            {children}
        </SignUpContainer>
    );
};

export default SignUp;
