import React, { useState } from "react";
import SignUp from "../../components/signUp/SignUp";
import Login from "../../components/login/Login";
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";
import {
    FormsContainer,
    Overlay,
    SwitchFormsBtn,
    PageContainer,
} from "./LoginAndSignUp.styles";

const LoginAndSignUp = () => {
    const [activeForm, setActiveForm] = useState("left");

    return (
        <PageContainer>
            <FormsContainer activeForm={activeForm}>
                <Login>
                    <SwitchFormsBtn
                        aria-label="create account form"
                        onClick={() => setActiveForm("right")}
                    >
                        Create an account <FiChevronsRight />
                    </SwitchFormsBtn>
                </Login>
                <SignUp activeForm={activeForm}>
                    <SwitchFormsBtn
                        aria-label="login form"
                        onClick={() => setActiveForm("left")}
                    >
                        <FiChevronsLeft /> Already have an account? Login
                    </SwitchFormsBtn>
                </SignUp>
                <Overlay activeForm={activeForm} />
            </FormsContainer>
        </PageContainer>
    );
};

export default LoginAndSignUp;
