import React, { useState } from 'react';
import SignUp from '../../components/signUp/SignUp';
import Login from '../../components/login/Login';
import { FiChevronsLeft, FiChevronsRight } from 'react-icons/fi';
import { FormsContainer, Overlay, SwitchFormsBtn, PageContainer } from './LoginAndSignUp.styles';


const LoginAndSignUp = () => {
    const [activeForm, setActiveForm] = useState("left") 

    return (
        <PageContainer>
            <FormsContainer activeForm={activeForm}>
                <Login>
                    <SwitchFormsBtn onClick={() => setActiveForm("right")}>Create an account <FiChevronsRight /></SwitchFormsBtn>
                </Login>
                <SignUp activeForm={activeForm}>
                    <SwitchFormsBtn onClick={() => setActiveForm("left")}> <FiChevronsLeft /> Already have an account? Login</SwitchFormsBtn>
                </SignUp>
                <Overlay activeForm={activeForm} />
            </FormsContainer>
        </PageContainer>
    )
}

export default LoginAndSignUp;
